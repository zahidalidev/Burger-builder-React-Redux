import { createContext } from 'react'

const IngredientContext = createContext([
  {
    id: 1,
    name: 'Lettuce',
    lessDisable: true,
    price: 0.5,
    quantity: 0
  },
  {
    id: 2,
    name: 'Bacon',
    lessDisable: true,
    price: 0.7,
    quantity: 0
  },
  {
    id: 3,
    name: 'Cheese',
    lessDisable: true,
    price: 0.4,
    quantity: 0
  },
  {
    id: 4,
    name: 'Meat',
    lessDisable: true,
    price: 1.3,
    quantity: 0
  }
])

export const IngredientProvider = IngredientContext.Provider

export default IngredientContext
