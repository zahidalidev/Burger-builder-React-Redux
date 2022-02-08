const addOrders = 'ADD_ORDERS'

export const ADD_ORDERS = (ingredients, totalPrice) => ({
  type: addOrders,
  payload: {
    ingredients,
    totalPrice
  }
})

let lastId = 0
export default (state = [], action) => {
  switch (action.type) {
    case addOrders:
      return [
        ...state,
        {
          id: ++lastId,
          ingredients: action.payload.ingredients,
          totalPrice: action.payload.totalPrice
        }
      ]

    default:
      return state
  }
}
