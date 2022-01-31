import React from 'react'
import PropTypes from 'prop-types'

import './Footer.css'

function Footer({ ingredients }) {
  console.log(ingredients)
  return (
    <div className='BuildControls'>
      <p>
        Current price: <strong>$3.00</strong>
      </p>

      {ingredients.map(item => (
        <div key={item.id} className='BuildControl'>
          <div className='BuildControl Label'>{item.name}</div>
          <button className='BuildControl buil-btn-disabled less less-active' disabled=''>
            Less
          </button>
          <button className='BuildControl more more-active'>More</button>
        </div>
      ))}

      <div className='BuildControl'>
        <div className='BuildControl Label'>Bacon</div>
        <button className='BuildControl buil-btn-disabled less less-active' disabled=''>
          Less
        </button>
        <button className='BuildControl more more-active'>More</button>
      </div>
      <div className='BuildControl'>
        <div className='BuildControl Label'>Cheese</div>
        <button className='BuildControl buil-btn-disabled less less-active' disabled=''>
          Less
        </button>
        <button className='BuildControl more more-active'>More</button>
      </div>
      <div className='BuildControl'>
        <div className='BuildControl Label'>Meat</div>
        <button className='BuildControl buil-btn-disabled less less-active' disabled=''>
          Less
        </button>
        <button className='BuildControl more more-active'>More</button>
      </div>
      <button
        className='BuildControls OrderButton OrderButton-active OrderButton-disabled'
        disabled={true}
      >
        SIGN UP TO ORDER
      </button>
    </div>
  )
}

Footer.propTypes = {
  ingredients: PropTypes.string.isRequired
}

export default Footer
