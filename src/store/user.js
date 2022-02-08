import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    USER_LOGIN: (user, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload))
      return action.payload
    },
    USER_LOGOUT: () => {
      localStorage.removeItem('user')
      return {}
    }
  }
})

export const { USER_LOGIN, USER_LOGOUT } = slice.actions
export default slice.reducer
