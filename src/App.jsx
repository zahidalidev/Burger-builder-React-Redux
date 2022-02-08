import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { USER_LOGIN } from 'store/user'

import Home from 'pages/home'
import MyAppbar from 'components/appbar'
import Orders from 'pages/orders'
import Login from 'pages/auth/login'
import Checkout from 'pages/checkout'

function App(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    if (user) {
      dispatch(USER_LOGIN({ email: user.email, password: user.password }))
    }
  }, [])

  return (
    <div>
      <MyAppbar />
      <main className='main-body'>
        <Routes>
          <Route path='/' exact element={<Home {...props} />} />
          <Route path='/login' exact element={<Login {...props} />} />
          <Route path='/checkout' exact element={<Checkout {...props} />} />
          <Route path='/orders' exact element={<Orders {...props} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
