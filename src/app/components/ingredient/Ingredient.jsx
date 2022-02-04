import React from 'react'

import PropsTypes from 'prop-types'

import './ingredient.css'

function Ingredient({ name }) {
  return <div className={`BurgerIngredient ${name}`}></div>
}

Ingredient.propTypes = {
  name: PropsTypes.string.isRequired
}

export default Ingredient
