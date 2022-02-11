import { Route, Routes } from 'react-router-dom'

import Login from 'pages/auth/login'
import Checkout from 'pages/checkout'
import Home from 'pages/home'
import Orders from 'pages/orders'

const routeList = [
  { path: '/', component: <Home /> },
  { path: '/login', component: <Login /> },
  { path: '/checkout', component: <Checkout /> },
  { path: '/orders', component: <Orders /> }
]

import React from 'react'

function AppRoutes() {
  return (
    <Routes>
      {routeList.map(item => (
        <Route key={item.path} path={item.path} exact element={item.component} />
      ))}
    </Routes>
  )
}

export default AppRoutes
