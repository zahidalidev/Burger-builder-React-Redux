import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import UserContext from '../../context/userContext'

import './Footer.css'

function Footer({ ingredients, handleIngredients, handleOrder, currentTotalPrice }) {
  const { currentUser } = useContext(UserContext)

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
            className={`BuildControl ${item.lessDisable && 'buil-btn-disabled'} less less-active`}
            disabled={item.lessDisable}
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
  ingredients: PropTypes.array.isRequired,
  handleIngredients: PropTypes.func.isRequired,
  handleOrder: PropTypes.func.isRequired,
  currentTotalPrice: PropTypes.number.isRequired
}

export default Footer
