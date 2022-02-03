import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Checkout.css'

// custom components
import Burger from '../../components/burger/Burger'
import ContactForm from '../../components/contactform/ContactForm'

// context
import IngredientContext from '../../context/ingredientContext'
import OrdersContext from '../../context/ordersContext'

function Checkout() {
  const [showForm, setshowForm] = useState(false)
  const [currentTotalPrice, setCurrentTotalPrice] = useState(3)

  const { ingredients, setIngredients } = useContext(IngredientContext)
  const { orders, setOrders } = useContext(OrdersContext)

  const navigate = useNavigate()

  useEffect(() => {
    let price = 3
    ingredients.map(item => {
      price += item.price * item.list.length
    })
    setCurrentTotalPrice(price)
  }, [ingredients])

  const handleIngredients = () => {
    const tempIngredients = [...ingredients]
    for (let i = 0; i < tempIngredients.length; i++) {
      tempIngredients[i].list = []
      tempIngredients[i].lessDisable = true
    }

    setIngredients(tempIngredients)
  }

  const handleAction = action => {
    if (!action) {
      handleIngredients()
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
      tempObj.quantity = ingredients[i].list.length
      tempOrder.push(tempObj)
    }
    let orderDetail = {
      id: tempOrder.length + 1,
      burger: tempOrder,
      totalPrice: currentTotalPrice
    }
    console.log('orderDetail: ', orderDetail)
    setOrders([...orders, orderDetail])
    navigate('/')
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
