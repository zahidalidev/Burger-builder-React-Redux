export default ingredients =>
  ingredients.reduce((acc, item) => (acc = acc + item.price * item.quantity), 3)
