import { createSlice } from '@reduxjs/toolkit'

let lastId = 0
const slice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    ADD_ORDERS: (orders, action) => {
      orders.push({
        id: ++lastId,
        ingredients: action.payload.ingredients,
        totalPrice: action.payload.totalPrice
      })
    }
  }
})

export const { ADD_ORDERS } = slice.actions
export default slice.reducer
