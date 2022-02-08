import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import _ from 'lodash'

import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGOUT } from 'store/user'

import 'components/appbar/styles.css'
import logo from 'assets/burger-logo.b8503d26.png'

const MyAppbar = () => {
  const [state, setState] = useState({ left: false })
  const [currentMenu, setCurrentMenu] = useState('/')

  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isLogin = currentMenu === '/login'
  const isOrders = currentMenu === '/orders'
  const isHome = currentMenu === '/'
  const activeMenu = drawerClass => (drawerClass ? 'active-menu-drawer' : 'active-menu')

  useEffect(() => {
    setCurrentMenu(pathname)
  }, [pathname])

  const toggleDrawer = open => () => {
    setState({ ...state, left: open })
  }

  const handleLogout = () => {
    dispatch(USER_LOGOUT())
    navigate('/')
  }

  const handleNavigation = menu => {
    setCurrentMenu(menu)
    navigate(menu)
  }

  const loginMenu = (navClass, drawerClass) => (
    <>
      <li
        className={`${navClass} d-flex align-items-center ${
          isOrders ? activeMenu(drawerClass) : null
        }`}
      >
        <a onClick={() => handleNavigation('/orders')} className='nav-link'>
          Orders
        </a>
      </li>
      <li className={`${navClass} d-flex align-items-center`}>
        <a onClick={handleLogout} className='nav-link'>
          Logout
        </a>
      </li>
    </>
  )

  const logoutMenu = (navClass, drawerClass) => (
    <li
      className={`${navClass} d-flex align-items-center ${
        isLogin ? activeMenu(drawerClass) : null
      }`}
    >
      <a onClick={() => handleNavigation('/login')} className='nav-link'>
        Login
      </a>
    </li>
  )

  const menuList = (navClass, drawerClass) => (
    <>
      <li
        className={`${navClass} d-flex align-items-center ${
          isHome ? activeMenu(drawerClass) : null
        }`}
      >
        <a onClick={() => handleNavigation('/')} className='nav-link'>
          Burger Builder
        </a>
      </li>
      {!_.isEmpty(user) ? loginMenu(navClass, drawerClass) : logoutMenu(navClass, drawerClass)}
    </>
  )

  const drawerList = () => (
    <div className='drawer-fullList' onClick={toggleDrawer(false)}>
      <img className='drawer-logo' onClick={() => handleNavigation('/')} src={logo} />
      <List>
        <ul className='navbar-nav drawer-list'>{menuList(null, true)}</ul>
      </List>
    </div>
  )

  return (
    <header className='header text-white'>
      <Drawer open={state['left']} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>

      <nav className='navbar navbar-expand-lg py-3 py-lg-0'>
        <button
          type='button'
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          onClick={toggleDrawer(true)}
        >
          <a onClick={toggleDrawer(true)} className='fa fa-bars'></a>
        </button>

        <img className='logo' onClick={() => handleNavigation('/')} src={logo} />

        <div className='collapse navbar-collapse justify-content-between px-3' id='navbarCollapse'>
          <ul className='navbar-nav nav-list ml-auto py-0'>{menuList('nav-item', false)}</ul>
        </div>
      </nav>
    </header>
  )
}

export default MyAppbar
