import React from 'react'

import './Login.css'

function Login() {
  return (
    <main className='Layout Content'>
      <div className='Auth'>
        <form>
          <div className='Input input-container'>
            <label className='Input Label'></label>
            <input
              type='email'
              className='Input InputElement'
              placeholder='E-mail Address'
              value=''
            />
          </div>
          <div className='Input input-container'>
            <label className='Input Label'></label>
            <input type='password' className='Input InputElement' placeholder='Password' value='' />
          </div>
          <button className='Button Success'>SUBMIT</button>
        </form>
        <button className='Button Danger'>SIGNIN</button>
      </div>
    </main>
  )
}

export default Login
