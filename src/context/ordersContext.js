import { createContext } from 'react'

const OrdersContext = createContext({})

export const OrderProvider = OrdersContext.Provider

export default OrdersContext
