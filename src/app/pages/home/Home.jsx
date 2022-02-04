import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Custom components
import Burger from '../../components/burger/Burger'
import Footer from '../../components/footer/Footer'
import Modal from '../../components/modal/Modal'

// Context
import UserContext from '../../context/userContext'
import IngredientContext from '../../context/ingredientContext'

// utils
import burgerTotalPrice from '../../utils/burgerTotalPrice'

function Home() {
  const [modal, setModal] = useState(false)
  const [currentTotalPrice, setCurrentTotalPrice] = useState(3)

  const { ingredients, setIngredients } = useContext(IngredientContext)
  const { currentUser } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    setCurrentTotalPrice(burgerTotalPrice(ingredients))
  }, [ingredients])

  const handleIngredients = (i, type) => {
    const tempIngredients = [...ingredients]
    if (type === 'add') {
      tempIngredients[i].quantity += 1
      if (tempIngredients[i].quantity > 0) {
        tempIngredients[i].lessDisable = false
      }
    } else {
      tempIngredients[i].quantity -= 1
      if (tempIngredients[i].quantity === 0) {
        tempIngredients[i].lessDisable = true
      }
    }

    setIngredients(tempIngredients)
  }

  const handleOrder = () => {
    if (!currentUser) {
      navigate('/login', { state: { from: 'home' } })
      return
    }

    setModal(true)
  }

  const handleModal = action => {
    setModal(false)
    if (action) {
      navigate('/checkout')
    }
  }

  return (
    <>
      <Burger />
      <Footer
        handleOrder={handleOrder}
        ingredients={ingredients}
        handleIngredients={handleIngredients}
        currentTotalPrice={currentTotalPrice}
      />
      {modal && <Modal handleModal={handleModal} currentTotalPrice={currentTotalPrice} />}
    </>
  )
}

export default Home
