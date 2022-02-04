import React, { useContext } from 'react'

// context
import IngredientContext from '../../context/ingredientContext'

import './ingredient.css'

function Ingredient() {
  const { ingredients } = useContext(IngredientContext)

  const ingreExist =
    ingredients[0].quantity > 0 ||
    ingredients[1].quantity > 0 ||
    ingredients[2].quantity > 0 ||
    ingredients[3].quantity > 0

  return (
    <>
      {!ingreExist ? <p>No Ingredients Added</p> : null}
      {ingredients.map(item =>
        [...Array(item.quantity)].map((item2, index) => (
          <div key={index.toString} className={`BurgerIngredient ${item.name}`}></div>
        ))
      )}
    </>
  )
}

export default Ingredient
