import React from 'react'
import PropsTypes from 'prop-types'

import 'components/input/styles.css'

const Input = ({ item, handleChange, index }) => {
  return (
    <div className='Input input-container'>
      <input
        type={item.type}
        className={`Input InputElement ${item.error && 'Invalid'}`}
        placeholder={item.placeHolder}
        value={item.value}
        onChange={e => handleChange(index, e.target.value)}
      />
      {item.error ? <p className='Input ValidationError'>Please enter a valid </p> : null}
    </div>
  )
}

Input.propTypes = {
  item: PropsTypes.object.isRequired,
  handleChange: PropsTypes.func.isRequired,
  index: PropsTypes.number.isRequired
}

export default Input
