import React from 'react'

import './Modal.css'

function Modal() {
  return (
    <>
      <div className='backdrop'></div>
      <div className='Modal' style={{ transform: 'translateY(0px)', opacity: 1 }}>
        <h3>Your Order Summary:</h3>
        <ul>
          <li>
            <span>Lettuce</span>: 1
          </li>
          <li>
            <span>Bacon</span>: 0
          </li>
          <li>
            <span>Cheese</span>: 0
          </li>
          <li>
            <span>Meat</span>: 0
          </li>
        </ul>
        <p>
          <strong>Total Price: $3.50</strong>
        </p>
        <p>Continue to Checkout?</p>
        <button className='Button Danger'>CANCEL</button>
        <button className='Button Success'>CONTINUE</button>
      </div>
    </>
  )
}

export default Modal
