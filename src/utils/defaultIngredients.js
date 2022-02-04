const defaultIngredients = ingredients =>
  [...ingredients].map(item => ({
    ...item,
    quantity: 0,
    lessDisable: true
  }))

export default defaultIngredients
