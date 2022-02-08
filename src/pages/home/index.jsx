import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Burger from 'components/burger'
import Footer from 'components/footer'
import Modal from 'components/modal'
import _ from 'lodash'

function Home() {
  const [modal, setModal] = useState(false)

  const user = useSelector(state => state.user)

  const navigate = useNavigate()

  const handleOrder = () => {
    if (_.isEmpty(user)) {
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
      <Footer handleOrder={handleOrder} />
      {modal && <Modal handleModal={handleModal} />}
    </>
  )
}

export default Home
