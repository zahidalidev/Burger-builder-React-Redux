import React from 'react'

import './Burger.css'

function Burger() {
  return (
    <div className='Burger'>
      <div className='BreadTop'>
        <div className='Seeds1'></div>
        <div className='Seeds2'></div>
      </div>
      <p>No Ingredients Added</p>
      <div className='BurgerIngredient Lettuce'></div>
      <div className='BurgerIngredient Bacon'></div>
      <div className='BurgerIngredient Cheese'></div>
      <div className='BurgerIngredient Meat'></div>
      <div className='BreadBottom'></div>
    </div>
  )
}

export default Burger