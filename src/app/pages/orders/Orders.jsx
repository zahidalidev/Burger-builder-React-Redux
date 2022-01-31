import React from 'react'

import './Orders.css'

function Orders() {
  return (
    <div>
      <div className='Order'>
        <p>
          Ingredients: <span className='c-order'>bacon (1)</span>
          <span className='c-order'>cheese (0)</span>
          <span className='c-order'>lettuce (0)</span>
          <span className='c-order'>meat (0)</span>
        </p>
        <p>
          Price <strong>USD 3.70</strong>
        </p>
      </div>
    </div>
  )
}

export default Orders
