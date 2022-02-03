import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import validator from 'validator'

import UserContext from '../../../context/userContext'

import './Login.css'

function Login() {
  // states
  const [formData, setFormData] = useState([
    {
      id: 0,
      placeHolder: 'E-mail Address',
      type: 'email',
      error: false,
      value: ''
    },
    {
      id: 1,
      placeHolder: 'Password',
      type: 'password',
      error: false,
      value: ''
    }
  ])

  const [submitType, setSubmitType] = useState('SIGNIN')
  const [navFrom, setNavFrom] = useState('loginBtn')

  const navigate = useNavigate()
  const { state: locationState } = useLocation()

  // context
  const userCont = useContext(UserContext)

  useEffect(() => {
    if (locationState != null) {
      setNavFrom(locationState.from || 'loginBtn')
    }
  })

  const handleChange = (i, value) => {
    const tempData = [...formData]
    tempData[i].value = value

    const validLength = i === 0 ? 1 : 7
    tempData[i].error = tempData[i].value.length < validLength

    setFormData(tempData)
  }

  const handleLogin = e => {
    e.preventDefault()

    const tempData = [...formData]
    if (!validator.isEmail(formData[0].value)) {
      formData[0].error = true
      setFormData(tempData)
      return
    }

    const user = {
      email: formData[0].value,
      password: formData[1].value
    }

    const valid = formData[0].value.length > 0 && formData[1].value.length > 6

    if (valid) {
      const { setCurrentUser } = userCont
      localStorage.setItem('user', JSON.stringify(user))
      setCurrentUser(user)

      console.log(navFrom)
      if (navFrom === 'home') {
        navigate('/checkout')
      } else {
        navigate('/')
      }
    }

    handleChange(0, formData[0].value)
    handleChange(1, formData[1].value)
  }

  return (
    <main className='Layout Content'>
      <div className='Auth'>
        <form>
          {formData.map((item, i) => (
            <div key={item.placeHolder} className='Input input-container'>
              <input
                type={item.type}
                className={`Input InputElement ${item.error && 'Invalid'}`}
                placeholder={item.placeHolder}
                value={item.value}
                onChange={e => handleChange(i, e.target.value)}
              />
              {item.error ? <p className='Input ValidationError'>Please enter a valid </p> : null}
            </div>
          ))}
          <button onClick={handleLogin} className='Button Success'>
            SUBMIT
          </button>
        </form>

        {submitType === 'SIGNIN' ? (
          <button onClick={() => setSubmitType('REGISTER')} className='Button Danger'>
            SIGNIN
          </button>
        ) : (
          <button onClick={() => setSubmitType('SIGNIN')} className='Button Danger'>
            REGISTER
          </button>
        )}
      </div>
    </main>
  )
}

export default Login
