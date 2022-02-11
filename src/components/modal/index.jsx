import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import burgerTotalPrice from 'utils/burgerTotalPrice'

import 'components/modal/styles.css'

function Modal({ handleModal }) {
  const [currentTotalPrice, setCurrentTotalPrice] = useState(3)

  const ingredients = useSelector(state => state.ingredients)

  useEffect(() => {
    setCurrentTotalPrice(burgerTotalPrice(ingredients))
  }, [ingredients])

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
          <strong>Total Price: {`$${currentTotalPrice}`}</strong>
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
  handleModal: PropTypes.func.isRequired
}

export default Modal
