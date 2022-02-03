import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// Custom components
import Home from './app/pages/home/Home'
import MyAppbar from './app/components/appbar/MyAppbar'
import Orders from './app/pages/orders/Orders'
import Login from './app/pages/auth/login/Login'
import Checkout from './app/pages/checkout/Checkout'

// Context
import { UserProvider } from './app/context/userContext'
import IngredientContext, { IngredientProvider } from './app/context/ingredientContext'
import { OrderProvider } from './app/context/ordersContext'

function App(props) {
  const [currentUser, setCurrentUser] = useState(false)
  const [orders, setOrders] = useState([])
  const [ingredients, setIngredients] = useState(IngredientContext._currentValue)

  useEffect(() => {
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    setCurrentUser(user)
  }, [])

  return (
    <div>
      <IngredientProvider value={{ ingredients, setIngredients }}>
        <UserProvider value={{ currentUser, setCurrentUser }}>
          <OrderProvider value={{ orders, setOrders }}>
            <MyAppbar />
            <main className='main-body'>
              <Routes>
                <Route path='/' exact element={<Home {...props} />} />
                <Route path='/login' exact element={<Login {...props} />} />
                <Route path='/checkout' exact element={<Checkout {...props} />} />
                <Route path='/orders' exact element={<Orders {...props} />} />
              </Routes>
            </main>
          </OrderProvider>
        </UserProvider>
      </IngredientProvider>
    </div>
  )
}

export default App
