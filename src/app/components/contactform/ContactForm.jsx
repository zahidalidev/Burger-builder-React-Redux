import React, { useState } from 'react'
import PropsTypes from 'prop-types'
import validator from 'validator'

// custom components
import './contactForm.css'
import '../../pages/auth/login/login.css'

function ContactForm({ handleOrder }) {
  const [deliveryOption, setDeliveryOption] = useState('fastest')
  const [disableOrderBtn, setDisableOrderBtn] = useState(true)

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
    handleOrderButton()
  }

  const handleOrderButton = () => {
    const tempFormData = [...formData]
    let tempDisble
    for (let i = 0; i < tempFormData.length; i++) {
      if (i === 2) {
        tempDisble = tempFormData[i].value.length != 5
        if (tempDisble) {
          setDisableOrderBtn(true)
          return
        }
      } else {
        tempDisble = tempFormData[i].value.length === 0
        if (tempDisble) {
          setDisableOrderBtn(true)
          return
        }
      }
    }
    setDisableOrderBtn(false)
  }

  const handleValidateOrder = e => {
    e.preventDefault()

    const tempData = [...formData]
    if (!validator.isEmail(formData[4].value)) {
      formData[4].error = true
      setFormData(tempData)
      setDisableOrderBtn(true)
      return
    }

    handleOrder()
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
          <select
            value={deliveryOption}
            onChange={value => setDeliveryOption(value.target.value)}
            className='Input InputElement'
          >
            <option value='fastest'>Fastest</option>
            <option value='cheapest'>Cheapest</option>
          </select>
        </div>
        <button
          disabled={disableOrderBtn}
          onClick={handleValidateOrder}
          className={`Button Success ${disableOrderBtn && 'form-btn-disable'}`}
        >
          ORDER
        </button>
      </form>
    </div>
  )
}

ContactForm.propTypes = {
  handleOrder: PropsTypes.func.isRequired
}

export default ContactForm
