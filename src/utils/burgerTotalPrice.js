const burgerTotalPrice = ingredients => {
  let price = 3
  ingredients.map(item => {
    price += item.price * item.quantity
  })
  return price
}

export default burgerTotalPrice
