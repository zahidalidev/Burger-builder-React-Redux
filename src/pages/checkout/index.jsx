import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Burger from 'components/burger'
import ContactForm from 'components/contactform'

import IngredientContext from 'context/ingredientContext'
import OrdersContext from 'context/ordersContext'

import burgerTotalPrice from 'utils/burgerTotalPrice'
import defaultIngredients from 'utils/defaultIngredients'

import 'pages/checkout/styles.css'

function Checkout() {
  const [showForm, setshowForm] = useState(false)
  const [currentTotalPrice, setCurrentTotalPrice] = useState(3)

  const { ingredients, setIngredients } = useContext(IngredientContext)
  const { orders, setOrders } = useContext(OrdersContext)

  const navigate = useNavigate()

  useEffect(() => {
    setCurrentTotalPrice(burgerTotalPrice(ingredients))
  }, [ingredients])

  const handleAction = action => {
    if (!action) {
      console.log('defaultIngredients(ingredients): ', defaultIngredients(ingredients))
      setIngredients(defaultIngredients(ingredients))
      navigate('/')
    } else {
      setshowForm(true)
    }
  }

  const handleOrder = () => {
    let tempOrder = ingredients.map(item => ({
      name: item.name,
      quantity: item.quantity
    }))

    let orderDetail = {
      id: tempOrder.length + 1,
      burger: tempOrder,
      totalPrice: currentTotalPrice
    }
    setOrders([...orders, orderDetail])
    handleAction(false)
  }

  return (
    <div className='CheckoutSummary'>
      <h1>We hope it tastes well!</h1>
      <Burger ingredients={ingredients} />
      <button onClick={() => handleAction(false)} className='Button main-btn Danger'>
        Cancel
      </button>
      <button onClick={() => handleAction(true)} className='Button Success'>
        Continue
      </button>
      {showForm && <ContactForm handleOrder={handleOrder} />}
    </div>
  )
}

export default Checkout
