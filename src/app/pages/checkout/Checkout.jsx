import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Checkout.css'

// custom components
import Burger from '../../components/burger/Burger'
import ContactForm from '../../components/contactform/ContactForm'

// context
import IngredientContext from '../../context/ingredientContext'

function Checkout() {
  const [showForm, setshowForm] = useState(false)
  const { ingredients, setIngredients } = useContext(IngredientContext)
  const navigate = useNavigate()

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

  return (
    <div className='CheckoutSummary'>
      <h1>We hope it tastes well!</h1>
      <div>
        <Burger ingredients={ingredients} />
      </div>
      <button onClick={() => handleAction(false)} className='Button main-btn Danger'>
        Cancel
      </button>
      <button onClick={() => handleAction(true)} className='Button Success'>
        Continue
      </button>
      {showForm && <ContactForm />}
    </div>
  )
}

export default Checkout
