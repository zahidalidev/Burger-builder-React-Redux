import React, { useContext } from 'react'

// context
import OrdersContext from '../../context/ordersContext'

import './Orders.css'

function Orders() {
  const { orders } = useContext(OrdersContext)

  return (
    <div>
      {orders.map((item, i) => (
        <div key={i.toString()} className='Order'>
          <p>
            Ingredients:
            {item.burger.map(bur => (
              <span key={bur.name} className='c-order'>{`${bur.name} (${bur.quantity})`}</span>
            ))}
          </p>
          <p>
            Price <strong>USD ({item.totalPrice.toFixed(2)})</strong>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Orders
