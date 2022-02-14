import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Burger from 'components/burger'
import ContactForm from 'components/contactform'

import { DEFAULT_INGREDIENT } from 'store/ingredients'
import { ADD_ORDERS } from 'store/orders'

import burgerTotalPrice from 'utils/burgerTotalPrice'

import { CheckoutWrapper, MainButton } from 'containers/checkout/styles'
import { Heading1, SuccessButton } from 'sharedStyle'

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
    <CheckoutWrapper>
      <Heading1>We hope it tastes well!</Heading1>
      <Burger />
      <MainButton onClick={() => handleAction(false)}>Cancel</MainButton>
      <SuccessButton onClick={() => handleAction(true)}>Continue</SuccessButton>
      {showForm && <ContactForm handleOrder={handleOrder} />}
    </CheckoutWrapper>
  )
}

export default Checkout
