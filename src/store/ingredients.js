const addIngredient = 'ADD_INGREDIENT'
const removeIngredient = 'REMOVE_INGREDIENT'
const defaultIngredient = 'DEFAULT_INGREDIENT'

export const ADD_INGREDIENT = id => ({
  type: addIngredient,
  payload: {
    id
  }
})

export const REMOVE_INGREDIENT = id => ({
  type: removeIngredient,
  payload: {
    id
  }
})

export const DEFAULT_INGREDIENT = () => ({
  type: defaultIngredient
})

const initialState = [
  {
    id: 0,
    name: 'Lettuce',
    price: 0.5,
    quantity: 0
  },
  {
    id: 1,
    name: 'Bacon',
    price: 0.7,
    quantity: 0
  },
  {
    id: 2,
    name: 'Cheese',
    price: 0.4,
    quantity: 0
  },
  {
    id: 3,
    name: 'Meat',
    price: 1.3,
    quantity: 0
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case addIngredient:
      return [...state].map((item, index) =>
        index === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      )

    case removeIngredient:
      return [...state].map((item, index) =>
        index === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      )

    case defaultIngredient:
      return [...state].map(item => ({ ...item, quantity: 0 }))

    default:
      return state
  }
}
