import React, { useContext } from 'react'
import PropTypes from 'prop-types'

// context
import UserContext from 'context/userContext'
import IngredientContext from 'context/ingredientContext'

import 'components/footer/styles.css'

function Footer({ handleIngredients, handleOrder, currentTotalPrice }) {
  const { currentUser } = useContext(UserContext)
  const { ingredients } = useContext(IngredientContext)

  const isDisable = item => item.quantity === 0

  return (
    <div className='BuildControls'>
      <p>
        Current price: <strong>{`$${currentTotalPrice.toFixed(2)}`}</strong>
      </p>

      {ingredients.map((item, i) => (
        <div key={item.id.toString()} className='BuildControl'>
          <div className='BuildControl Label'>{item.name}</div>
          <button
            onClick={() => handleIngredients(i, 'remove')}
            className={`BuildControl ${isDisable(item) && 'buil-btn-disabled'} less less-active`}
            disabled={isDisable(item)}
          >
            Less
          </button>
          <button
            onClick={() => handleIngredients(i, 'add')}
            className='BuildControl more more-active'
          >
            More
          </button>
        </div>
      ))}

      <button
        className={`BuildControls OrderButton text-uppercase ${
          currentTotalPrice > 3 ? 'OrderButton-active' : 'OrderButton-disabled'
        }`}
        disabled={currentTotalPrice == 3}
        onClick={handleOrder}
      >
        {currentUser ? 'Order now' : 'Sign up to order'}
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
