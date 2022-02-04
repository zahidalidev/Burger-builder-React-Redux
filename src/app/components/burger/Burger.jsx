import React from 'react'
import PropsTypes from 'prop-types'

import Ingredient from '../ingredient/Ingredient'

import './burger.css'

function Burger({ ingredients }) {
  const ingreExist =
    ingredients[0].quantity > 0 ||
    ingredients[1].quantity > 0 ||
    ingredients[2].quantity > 0 ||
    ingredients[3].quantity > 0

  return (
    <div className='Burger'>
      <div className='BreadTop'>
        <div className='Seeds1'></div>
        <div className='Seeds2'></div>
      </div>
      {!ingreExist ? <p>No Ingredients Added</p> : null}
      {ingredients.map(item =>
        [...Array(item.quantity)].map((item2, index) => (
          <Ingredient key={index.toString} name={item.name} />
        ))
      )}
      <div className='BreadBottom'></div>
    </div>
  )
}

Burger.propTypes = {
  ingredients: PropsTypes.array.isRequired
}

export default Burger
