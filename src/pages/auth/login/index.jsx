import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import validator from 'validator'

import Input from 'components/input'

import UserContext from 'context/userContext'

import 'pages/auth/login/styles.css'

function Login() {
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

  const userCont = useContext(UserContext)

  useEffect(() => {
    if (locationState != null) {
      setNavFrom(locationState.from || 'loginBtn')
    }
  })

  const handleChange = (i, value) => {
    const tempData = [...formData]
    tempData[i].value = value
    tempData[i].error = i === 0 ? tempData[i].value.length < 1 : tempData[i].value.length < 7
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

    if (user.email.length > 0 && user.password.length > 6) {
      const { setCurrentUser } = userCont
      localStorage.setItem('user', JSON.stringify(user))
      setCurrentUser(user)

      if (navFrom === 'home') {
        navigate('/checkout')
      } else {
        navigate('/')
      }
    }

    handleChange(0, formData[0].value)
    handleChange(1, formData[1].value)
  }

  const signinBtn = (
    <button onClick={() => setSubmitType('REGISTER')} className='Button Danger'>
      SIGNIN
    </button>
  )

  const registerBtn = (
    <button onClick={() => setSubmitType('SIGNIN')} className='Button Danger'>
      REGISTER
    </button>
  )

  return (
    <main className='Layout Content'>
      <div className='Auth'>
        <form>
          {formData.map((item, index) => (
            <Input key={item.placeHolder} index={index} item={item} handleChange={handleChange} />
          ))}
          <button onClick={handleLogin} className='Button Success'>
            SUBMIT
          </button>
        </form>

        {submitType === 'SIGNIN' ? signinBtn : registerBtn}
      </div>
    </main>
  )
}

export default Login
