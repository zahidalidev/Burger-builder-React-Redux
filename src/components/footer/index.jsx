import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import IngredientButton from 'components/ingredientButton'

import UserContext from 'context/userContext'
import IngredientContext from 'context/ingredientContext'

import 'components/footer/styles.css'

function Footer({ handleIngredients, handleOrder, currentTotalPrice }) {
  const { currentUser } = useContext(UserContext)
  const { ingredients } = useContext(IngredientContext)

  const isOrderActive = currentTotalPrice > 3
  const orderBtnLable = currentUser ? 'Order now' : 'Sign up to order'

  return (
    <div className='BuildControls'>
      <p>
        Current price: <strong>{`$${currentTotalPrice.toFixed(2)}`}</strong>
      </p>

      {ingredients.map((item, index) => (
        <IngredientButton
          key={item.id.toString()}
          index={index}
          item={item}
          handleIngredients={handleIngredients}
        />
      ))}

      <button
        className={`BuildControls OrderButton text-uppercase ${
          isOrderActive ? 'OrderButton-active' : 'OrderButton-disabled'
        }`}
        disabled={currentTotalPrice == 3}
        onClick={handleOrder}
      >
        {orderBtnLable}
      </button>
    </div>
  )
}

Footer.propTypes = {
  handleIngredients: PropTypes.func.isRequired,
  handleOrder: PropTypes.func.isRequired,
  currentTotalPrice: PropTypes.number.isRequired
}

export default Footer
