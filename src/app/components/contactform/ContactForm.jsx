import React from 'react'

import './ContactForm.css'
import '../../pages/auth/login/Login.css'

function ContactForm() {
  return (
    <div className='ContactData'>
      <h4>Enter your Contact Data</h4>
      <form>
        <div className='Input input-container'>
          <label className='Input Label'></label>
          <input type='text' className='Input InputElement' placeholder='Your Name' value='' />
        </div>
        <div className='Input input-container'>
          <label className='Input Label'></label>
          <input type='text' className='Input InputElement' placeholder='Street' value='' />
        </div>
        <div className='Input input-container'>
          <label className='Input Label'></label>
          <input type='text' className='Input InputElement' placeholder='Zip Code' value='' />
        </div>
        <div className='Input input-container'>
          <label className='Input Label'></label>
          <input type='text' className='Input InputElement' placeholder='Country' value='' />
        </div>
        <div className='Input input-container'>
          <label className='Input Label'></label>
          <input type='email' className='Input InputElement' placeholder='E-mail' value='' />
        </div>
        <div className='Input input-container'>
          <label className='Input Label'></label>
          <select className='Input InputElement'>
            <option value='fastest'>Fastest</option>
            <option value='cheapest'>Cheapest</option>
          </select>
        </div>
        <button disabled='' className='Button Success'>
          ORDER
        </button>
      </form>
    </div>
  )
}

export default ContactForm
