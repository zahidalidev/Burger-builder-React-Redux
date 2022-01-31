import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <div className='BuildControls'>
      <p>
        Current price: <strong>$3.00</strong>
      </p>
      <div className='BuildControl'>
        <div className='BuildControl Label'>Lettuce</div>
        <button className='BuildControl buil-btn-disabled less less-active' disabled=''>
          Less
        </button>
        <button className='BuildControl more more-active'>More</button>
      </div>
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

export default Footer
