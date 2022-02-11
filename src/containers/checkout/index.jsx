import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Burger from 'components/burger'
import ContactForm from 'components/contactform'

import { DEFAULT_INGREDIENT } from 'store/ingredients'
import { ADD_ORDERS } from 'store/orders'

import burgerTotalPrice from 'utils/burgerTotalPrice'

import 'containers/checkout/styles.css'

const Checkout = () => {
  const [showForm, setshowForm] = useState(false)
  const [currentTotalPrice, setCurrentTotalPrice] = useState(3)

  const dispatch = useDispatch()
  const ingredients = useSelector(state => state.ingredients)

  const navigate = useNavigate()

  useEffect(() => {
    setCurrentTotalPrice(burgerTotalPrice(ingredients))
  }, [ingredients])

  const handleAction = action => {
    if (!action) {
      dispatch(DEFAULT_INGREDIENT())
      navigate('/')
    } else {
      setshowForm(true)
    }
  }

  const handleOrder = () => {
    let tempIngredients = ingredients.map(item => ({
      name: item.name,
      quantity: item.quantity
    }))

    dispatch(ADD_ORDERS({ ingredients: tempIngredients, totalPrice: currentTotalPrice }))
    handleAction(false)
  }

  return (
    <div className='CheckoutSummary'>
      <h1>We hope it tastes well!</h1>
      <Burger />
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
