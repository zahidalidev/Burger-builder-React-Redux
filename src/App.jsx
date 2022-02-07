import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from 'pages/home'
import MyAppbar from 'components/appbar'
import Orders from 'pages/orders'
import Login from 'pages/auth/login'
import Checkout from 'pages/checkout'

import IngredientContext, { IngredientProvider } from 'context/ingredientContext'
import { OrderProvider } from 'context/ordersContext'
import { USER_LOGIN } from 'store/user'

function App(props) {
  const [orders, setOrders] = useState([])
  const [ingredients, setIngredients] = useState(IngredientContext._currentValue)

  const dispatch = useDispatch()

  useEffect(() => {
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    if (user) {
      dispatch(USER_LOGIN(user))
    }
  }, [])

  return (
    <div>
      <IngredientProvider value={{ ingredients, setIngredients }}>
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
      </IngredientProvider>
    </div>
  )
}

export default App
