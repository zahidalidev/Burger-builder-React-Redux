import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import validator from 'validator'
import { useDispatch } from 'react-redux'

import Input from 'components/input'

import { USER_LOGIN } from 'store/user'

import 'containers/auth/login/styles.css'
import { LoginWrapper } from 'containers/auth/login/styles'
import { DangerButton, SuccessButton } from 'sharedStyle'

const Login = () => {
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

  const dispatch = useDispatch()
  const [submitType, setSubmitType] = useState('SIGNIN')
  const [navFrom, setNavFrom] = useState('loginBtn')

  const navigate = useNavigate()
  const { state: locationState } = useLocation()

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
      dispatch(USER_LOGIN({ email: user.email, password: user.password }))

      if (navFrom === 'home') {
        navigate('/checkout')
      } else {
        navigate('/')
      }
    }

    handleChange(0, formData[0].value)
    handleChange(1, formData[1].value)
  }

  const signinBtn = <DangerButton onClick={() => setSubmitType('REGISTER')}>SIGNIN</DangerButton>

  const registerBtn = <DangerButton onClick={() => setSubmitType('SIGNIN')}>REGISTER</DangerButton>

  return (
    <main>
      <LoginWrapper>
        <form>
          {formData.map((item, index) => (
            <Input key={item.placeHolder} index={index} item={item} handleChange={handleChange} />
          ))}
          <SuccessButton onClick={handleLogin}>SUBMIT</SuccessButton>
        </form>

        {submitType === 'SIGNIN' ? signinBtn : registerBtn}
      </LoginWrapper>
    </main>
  )
}

export default Login
