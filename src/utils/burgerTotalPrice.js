export default ingredients =>
  ingredients.reduce((acc, item) => (acc = acc + item.price * item.quantity), 3).toFixed(2)
