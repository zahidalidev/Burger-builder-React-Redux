import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'

import UserContext from '../../context/userContext'
import logo from '../../assets/burger-logo.b8503d26.png'
import './MyAppbar.css'

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

function MyAppbar() {
  // states
  const [state, setState] = useState({ left: false })
  const [currentMenue, setCurrentMenue] = useState('/')

  const navigate = useNavigate()
  const classes = useStyles()
  const { pathname } = useLocation()

  // context
  const { currentUser, setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    console.log('locationState: ', pathname)
    setCurrentMenue(pathname)
  })

  const toggleDrawer = open => () => {
    setState({ ...state, left: open })
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setCurrentUser(false)
    navigate('/')
  }

  const handleNavigation = menue => {
    setCurrentMenue(menue)
    navigate(menue)
  }

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <a
          style={{
            cursor: 'pointer'
          }}
          onClick={() => {}}
          className='nav-item nav-link '
        >
          Home
        </a>
        <hr />

        <a
          style={{
            cursor: 'pointer'
          }}
          onClick={() => {}}
          className='nav-item nav-link'
        >
          Aboutlogo
        </a>
        <hr />
      </List>
    </div>
  )

  return (
    <header className='header text-white'>
      <Drawer open={state['left']} onClose={toggleDrawer(false)}>
        {list('left')}
      </Drawer>

      <nav className='navbar navbar-expand-lg py-3 py-lg-0'>
        {/* Toggler icon */}
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

        {/* collabseable */}
        <div className='collapse navbar-collapse justify-content-between px-3' id='navbarCollapse'>
          <ul className='navbar-nav nav-list ml-auto py-0'>
            <li
              className={`nav-item d-flex align-items-center ${
                currentMenue === '/' ? 'active-menue' : null
              }`}
            >
              <a onClick={() => handleNavigation('/')} className='nav-link'>
                Burger Builder
              </a>
            </li>
            {currentUser ? (
              <>
                <li
                  className={`nav-item d-flex align-items-center ${
                    currentMenue === '/orders' ? 'active-menue' : null
                  }`}
                >
                  <a onClick={() => handleNavigation('/orders')} className='nav-link'>
                    Orders
                  </a>
                </li>
                <li className={`nav-item d-flex align-items-center`}>
                  <a onClick={handleLogout} className='nav-link'>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li
                className={`nav-item d-flex align-items-center ${
                  currentMenue === '/login' ? 'active-menue' : null
                }`}
              >
                <a onClick={() => handleNavigation('/login')} className='nav-link'>
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default MyAppbar
