import React from 'react'
import PropsTypes from 'prop-types'

import './Burger.css'

function Burger({ ingredients }) {
  const ingreExist =
    ingredients[0].list.length > 0 ||
    ingredients[1].list.length > 0 ||
    ingredients[2].list.length > 0 ||
    ingredients[3].list.length > 0

  return (
    <div className='Burger'>
      <div className='BreadTop'>
        <div className='Seeds1'></div>
        <div className='Seeds2'></div>
      </div>
      {!ingreExist ? <p>No Ingredients Added</p> : null}
      {ingredients.map(item =>
        item.list.map((item2, i) => (
          <div key={i.toString()} className={`BurgerIngredient ${item.name}`}></div>
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
