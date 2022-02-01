import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// Custom components
import Home from './app/pages/home/Home'
import MyAppbar from './app/components/appbar/MyAppbar'
import Orders from './app/pages/orders/Orders'
import Login from './app/pages/auth/login/Login'
import Checkout from './app/pages/checkout/Checkout'

// Context
import { UserProvider } from './app/context/userContext'

function App(props) {
  const [currentUser, setCurrentUser] = useState(false)

  // const currentUser = useContext(UserContext)

  return (
    <div>
      <UserProvider value={{ currentUser, setCurrentUser }}>
        <MyAppbar />
        <main className='main-body'>
          <Routes>
            <Route path='/' exact element={<Home {...props} />} />
            <Route path='/login' exact element={<Login {...props} />} />
            <Route path='/checkout' exact element={<Checkout {...props} />} />
            <Route path='/orders' exact element={<Orders {...props} />} />
          </Routes>
        </main>
      </UserProvider>
    </div>
  )
}

export default App
