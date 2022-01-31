import React, { useState } from 'react'
import { useHistory } from 'react-router'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'

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
  const history = useHistory()

  const classes = useStyles()

  const [state, setState] = useState({
    left: false
  })

  const toggleDrawer = open => () => {
    setState({ ...state, left: open })
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

        <img className='logo' onClick={() => history.push('/home')} src={logo} />

        {/* collabseable */}
        <div className='collapse navbar-collapse justify-content-between px-3' id='navbarCollapse'>
          <ul className='navbar-nav nav-list ml-auto py-0'>
            <li className='nav-item d-flex align-items-center active-menue'>
              <a onClick={() => {}} className='nav-link'>
                Burger Builder
              </a>
            </li>
            <li className='nav-item d-flex align-items-center'>
              <a onClick={() => {}} className='nav-link'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default MyAppbar
