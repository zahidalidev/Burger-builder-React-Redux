import React from 'react'
import PropsTypes from 'prop-types'

import './Burger.css'

function Burger({ ingredients }) {
  return (
    <div className='Burger'>
      <div className='BreadTop'>
        <div className='Seeds1'></div>
        <div className='Seeds2'></div>
      </div>
      {(ingredients[0].list ||
        ingredients[1].list ||
        ingredients[2].list ||
        ingredients[3].list) && <p>No Ingredients Added</p>}
      {ingredients.map(item =>
        item.list.map(() => (
          <div key={item.id.toString()} className={`BurgerIngredient ${item.name}`}></div>
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
