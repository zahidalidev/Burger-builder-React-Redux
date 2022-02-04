import { createContext } from 'react'

const IngredientContext = createContext([
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
])

export const IngredientProvider = IngredientContext.Provider

export default IngredientContext
