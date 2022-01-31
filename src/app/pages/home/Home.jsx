import React, { useState } from 'react'

import './Home.css'

// Custom components
import Burger from '../../components/burger/Burger'
import Footer from '../../components/footer/Footer'

function Home() {
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      name: 'Lettuce',
      quantity: []
    },
    {
      id: 2,
      name: 'Bacon',
      quantity: []
    },
    {
      id: 3,
      name: 'Cheese',
      quantity: []
    },
    {
      id: 4,
      name: 'Meat',
      quantity: []
    }
  ])

  return (
    <>
      <Burger ingredients={ingredients} />
      <Footer ingredients={ingredients} setIngredients={setIngredients} />
    </>
  )
}

export default Home
