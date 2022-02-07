import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Burger from 'components/burger'
import Footer from 'components/footer'
import Modal from 'components/modal'

import UserContext from 'context/userContext'
import IngredientContext from 'context/ingredientContext'

import burgerTotalPrice from 'utils/burgerTotalPrice'

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
    type === 'add' ? (tempIngredients[i].quantity += 1) : (tempIngredients[i].quantity -= 1)
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
        handleIngredients={handleIngredients}
        currentTotalPrice={currentTotalPrice}
      />
      {modal && <Modal handleModal={handleModal} currentTotalPrice={currentTotalPrice} />}
    </>
  )
}

export default Home
