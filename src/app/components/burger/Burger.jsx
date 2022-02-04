import React from 'react'

import Ingredient from '../ingredient/Ingredient'

import './burger.css'

function Burger() {
  return (
    <div className='Burger'>
      <div className='BreadTop'>
        <div className='Seeds1'></div>
        <div className='Seeds2'></div>
      </div>
      <Ingredient />
      <div className='BreadBottom'></div>
    </div>
  )
}

export default Burger
