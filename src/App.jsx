import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import MyAppbar from 'components/appbar'
import AppRoutes from 'components/AppRoutes'

import { USER_LOGIN } from 'store/user'

function App() {
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
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
