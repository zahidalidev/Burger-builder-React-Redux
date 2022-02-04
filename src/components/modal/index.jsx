import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import IngredientContext from 'context/ingredientContext'

import 'components/modal/styles.css'

function Modal({ handleModal, currentTotalPrice }) {
  const { ingredients } = useContext(IngredientContext)

  return (
    <>
      <div className='backdrop'></div>
      <div className='Modal' style={{ transform: 'translateY(0px)', opacity: 1 }}>
        <h3>Your Order Summary:</h3>
        <ul>
          {ingredients.map(item => (
            <li key={item.name}>
              <span>{item.name}</span>: {item.quantity}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total Price: {`$${currentTotalPrice.toFixed(2)}`}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <button onClick={() => handleModal(false)} className='Button Danger'>
          CANCEL
        </button>
        <button onClick={() => handleModal(true)} className='Button Success'>
          CONTINUE
        </button>
      </div>
    </>
  )
}

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  currentTotalPrice: PropTypes.number.isRequired
}

export default Modal
