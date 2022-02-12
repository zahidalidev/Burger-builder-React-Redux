import { useState } from 'react'
import PropsTypes from 'prop-types'
import validator from 'validator'

import Input from 'components/input'

import 'components/contactform/styles.css'
import 'containers/auth/login/styles.css'

const ContactForm = ({ handleOrder }) => {
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
    tempData[i].error = i === 2 ? tempData[i].value.length != 5 : tempData[i].value.length < 1

    setFormData(tempData)
    handleOrderButton()
  }

  const handleOrderButton = () => {
    const tempFormData = [...formData]
    let isBreak = false
    tempFormData.forEach((item, index) => {
      if (index === 2) {
        if (item.value.length != 5) {
          setDisableOrderBtn(true)
          isBreak = true
          return
        }
      } else {
        if (item.value.length === 0) {
          setDisableOrderBtn(true)
          isBreak = true
          return
        }
      }
    })

    if (!isBreak) {
      setDisableOrderBtn(false)
    }
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
        {formData.map((item, index) => (
          <Input key={item.placeHolder} index={index} item={item} handleChange={handleChange} />
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
