import React from 'react'

import './Home.css'

// Custom components
import Navbar from '../../components/appbar/MyAppbar'
import Burger from '../../components/burger/Burger'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      <main className='burger-raper'>
        <Burger />
        <Footer />
      </main>
    </div>
  )
}

export default Home
