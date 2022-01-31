import React from 'react'
import PropTypes from 'prop-types'

import './Footer.css'

function Footer({ ingredients, handleIngredients }) {
  return (
    <div className='BuildControls'>
      <p>
        Current price: <strong>$3.00</strong>
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
        className='BuildControls OrderButton OrderButton-active OrderButton-disabled'
        disabled={true}
      >
        SIGN UP TO ORDER
      </button>
    </div>
  )
}

Footer.propTypes = {
  ingredients: PropTypes.array.isRequired,
  handleIngredients: PropTypes.func.isRequired
}

export default Footer
