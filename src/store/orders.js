import { createSlice, current } from '@reduxjs/toolkit'

let lastId = 0
const slice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    ADD_ORDERS: (state, action) => [
      ...current(state),
      {
        id: ++lastId,
        ingredients: action.payload.ingredients,
        totalPrice: action.payload.totalPrice
      }
    ]
  }
})

export const { ADD_ORDERS } = slice.actions
export default slice.reducer
