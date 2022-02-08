import React from 'react'
import { useSelector } from 'react-redux'

import 'components/ingredient/styles.css'

function Ingredient() {
  const ingredients = useSelector(state => state.ingredients)

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
