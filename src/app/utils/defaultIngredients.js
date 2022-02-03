const defaultIngredients = ingredients => {
  const tempIngredients = [...ingredients]
  for (let i = 0; i < tempIngredients.length; i++) {
    tempIngredients[i].list = []
    tempIngredients[i].lessDisable = true
  }

  return tempIngredients
}

export default defaultIngredients
