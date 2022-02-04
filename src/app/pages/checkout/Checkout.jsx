import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './checkout.css'

// custom components
import Burger from '../../components/burger/Burger'
import ContactForm from '../../components/contactform/ContactForm'

// context
import IngredientContext from '../../context/ingredientContext'
import OrdersContext from '../../context/ordersContext'

// utils
import burgerTotalPrice from '../../utils/burgerTotalPrice'
import defaultIngredients from '../../utils/defaultIngredients'

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
      setIngredients(defaultIngredients(ingredients))
      navigate('/')
    } else {
      setshowForm(true)
    }
  }

  const handleOrder = () => {
    let tempOrder = []
    for (let i = 0; i < ingredients.length; i++) {
      let tempObj = {}
      tempObj.name = ingredients[i].name
      tempObj.quantity = ingredients[i].quantity
      tempOrder.push(tempObj)
    }
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
