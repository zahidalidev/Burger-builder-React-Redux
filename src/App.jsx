import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Appbar from 'components/appbar'
import AppRoutes from 'components/AppRoutes'
import { Main } from 'sharedStyle'

import { USER_LOGIN } from 'store/user'

const App = () => {
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
      <Appbar />
      <Main>
        <AppRoutes />
      </Main>
    </div>
  )
}

export default App
