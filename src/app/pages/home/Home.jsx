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

  const handleIngredients = (i, type) => {
    const tempIngredients = [...ingredients]
    if (type === 'add') {
      tempIngredients[i].list.push(1)
      if (tempIngredients[i].list.length > 0) {
        tempIngredients[i].lessDisable = false
      }
    } else {
      tempIngredients[i].list.pop()
      if (tempIngredients[i].list.length === 0) {
        tempIngredients[i].lessDisable = true
      }
    }

    setIngredients(tempIngredients)
  }

  return (
    <>
      <Burger ingredients={ingredients} />
      <Footer ingredients={ingredients} handleIngredients={handleIngredients} />
    </>
  )
}

export default Home
