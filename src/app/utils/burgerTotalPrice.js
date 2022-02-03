const burgerTotalPrice = ingredients => {
  let price = 3
  ingredients.map(item => {
    price += item.price * item.list.length
  })
  return price
}

export default burgerTotalPrice
