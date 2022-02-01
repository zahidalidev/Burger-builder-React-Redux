import React, { useState } from 'react'

import './ContactForm.css'
import '../../pages/auth/login/Login.css'

function ContactForm() {
  const [formData, setFormData] = useState([
    {
      id: 0,
      placeHolder: 'Your Name',
      type: 'text',
      error: false,
      value: ''
    },
    {
      id: 1,
      placeHolder: 'Street',
      type: 'text',
      error: false,
      value: ''
    },
    {
      id: 2,
      placeHolder: 'Zip Code',
      type: 'text',
      error: false,
      value: ''
    },
    {
      id: 3,
      placeHolder: 'Country',
      type: 'text',
      error: false,
      value: ''
    },
    {
      id: 4,
      placeHolder: 'E-mail',
      type: 'email',
      error: false,
      value: ''
    }
  ])

  const handleChange = (i, value) => {
    const tempData = [...formData]
    tempData[i].value = value

    const validLength = i === 2 ? 5 : 1
    if (i === 2) {
      tempData[i].error = tempData[i].value.length != validLength
    } else {
      tempData[i].error = tempData[i].value.length < validLength
    }
    setFormData(tempData)
  }

  return (
    <div className='ContactData'>
      <h4>Enter your Contact Data</h4>
      <form>
        {formData.map((item, i) => (
          <div key={item.placeHolder} className='Input input-container'>
            <input
              type={item.type}
              className={`Input InputElement ${item.error && 'Invalid'}`}
              placeholder={item.placeHolder}
              value={item.value}
              onChange={e => handleChange(i, e.target.value)}
            />
            {item.error ? <p className='Input ValidationError'>Please enter a valid </p> : null}
          </div>
        ))}

        <div className='Input input-container'>
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
