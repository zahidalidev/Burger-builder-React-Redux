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
import { IngredientProvider } from './app/context/ingredientContext'

function App(props) {
  const [currentUser, setCurrentUser] = useState(false)
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      name: 'Lettuce',
      lessDisable: true,
      price: 0.5,
      list: []
    },
    {
      id: 2,
      name: 'Bacon',
      lessDisable: true,
      price: 0.7,
      list: []
    },
    {
      id: 3,
      name: 'Cheese',
      lessDisable: true,
      price: 0.4,
      list: []
    },
    {
      id: 4,
      name: 'Meat',
      lessDisable: true,
      price: 1.3,
      list: []
    }
  ])

  // const currentUser = useContext(UserContext)

  return (
    <div>
      <IngredientProvider value={{ ingredients, setIngredients }}>
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
      </IngredientProvider>
    </div>
  )
}

export default App
