import { combineReducers } from 'redux'

import userReducer from 'store/user'
import ingredientsReducer from 'store/ingredients'
import ordersReducer from 'store/orders'

export default combineReducers({
  user: userReducer,
  ingredients: ingredientsReducer,
  orders: ordersReducer
})
