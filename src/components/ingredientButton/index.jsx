import React from 'react'
import PropTypes from 'prop-types'

function IngredientButton({ item, index, handleIngredients }) {
  const isDisable = item => item.quantity === 0

  return (
    <div className='BuildControl'>
      <div className='BuildControl Label'>{item.name}</div>
      <button
        onClick={() => handleIngredients(index, 'remove')}
        className={`BuildControl ${isDisable(item) && 'buil-btn-disabled'} less less-active`}
        disabled={isDisable(item)}
      >
        Less
      </button>
      <button
        onClick={() => handleIngredients(index, 'add')}
        className='BuildControl more more-active'
      >
        More
      </button>
    </div>
  )
}

IngredientButton.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleIngredients: PropTypes.func.isRequired
}

export default IngredientButton
