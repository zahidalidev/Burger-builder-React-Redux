import React from 'react'

import './Checkout.css'

// custom components
import Burger from '../../components/burger/Burger'

function Checkout() {
  return (
    <div className='CheckoutSummary'>
      <h1>We hope it tastes well!</h1>
      <div>
        <Burger />
      </div>
      <button className='Button main-btn Danger'>Cancel</button>
      <button className='Button Success'>Continue</button>
    </div>
  )
}

export default Checkout
