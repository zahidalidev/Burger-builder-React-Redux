import { useSelector } from 'react-redux'

import 'containers/orders/styles.css'

const Orders = () => {
  const orders = useSelector(state => state.orders)

  return (
    <div>
      {orders.map((item, i) => (
        <div key={i.toString()} className='Order'>
          <p>
            Ingredients:
            {item.ingredients.map(ingredient => (
              <span
                key={ingredient.name}
                className='c-order'
              >{`${ingredient.name} (${ingredient.quantity})`}</span>
            ))}
          </p>
          <p>
            Price <strong>USD ({item.totalPrice})</strong>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Orders
