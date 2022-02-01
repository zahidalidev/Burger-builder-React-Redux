import React, { useState, useContext } from 'react'

import UserContext from '../../../context/userContext'

import './Login.css'

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

  const userCont = useContext(UserContext)

  const handleChange = (i, value) => {
    const tempData = [...formData]
    tempData[i].value = value

    const validLength = i === 0 ? 1 : 7
    tempData[i].error = tempData[i].value.length < validLength

    setFormData(tempData)
  }

  const handleLogin = e => {
    e.preventDefault()

    const user = {
      email: formData[0].value,
      password: formData[1].value
    }

    const { setCurrentUser } = userCont
    setCurrentUser(user)
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
        <button className='Button Danger'>SIGNIN</button>
      </div>
    </main>
  )
}

export default Login
