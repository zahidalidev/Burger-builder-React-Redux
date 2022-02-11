import { createSlice, current } from '@reduxjs/toolkit'

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

const slice = createSlice({
  name: 'ingredients',
  initialState: initialState,
  reducers: {
    ADD_INGREDIENT: (ingredients, action) => {
      return current(ingredients).map((item, index) =>
        index === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      // ingredients[index].quantity++
    },
    REMOVE_INGREDIENT: (ingredients, action) => {
      return current(ingredients).map((item, index) =>
        index === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    },
    DEFAULT_INGREDIENT: ingredients => current(ingredients).map(item => ({ ...item, quantity: 0 }))
  }
})

export const { ADD_INGREDIENT, REMOVE_INGREDIENT, DEFAULT_INGREDIENT } = slice.actions
export default slice.reducer
