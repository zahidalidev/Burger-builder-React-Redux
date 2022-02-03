import { createContext } from 'react'

const IngredientContext = createContext([
  {
    id: 1,
    name: 'Lettuce',
    lessDisable: true,
    price: 0.5,
    list: []
  },
  {
    id: 2,
    name: 'Bacon',
    lessDisable: true,
    price: 0.7,
    list: []
  },
  {
    id: 3,
    name: 'Cheese',
    lessDisable: true,
    price: 0.4,
    list: []
  },
  {
    id: 4,
    name: 'Meat',
    lessDisable: true,
    price: 1.3,
    list: []
  }
])

export const IngredientProvider = IngredientContext.Provider

export default IngredientContext
