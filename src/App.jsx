import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from 'pages/home'
import MyAppbar from 'components/appbar'
import Orders from 'pages/orders'
import Login from 'pages/auth/login'
import Checkout from 'pages/checkout'

import { UserProvider } from 'context/userContext'
import IngredientContext, { IngredientProvider } from 'context/ingredientContext'
import { OrderProvider } from 'context/ordersContext'

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
