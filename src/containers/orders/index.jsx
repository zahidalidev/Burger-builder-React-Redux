import { useSelector } from 'react-redux'

import { OrderContent, OrderWrapper } from 'containers/orders/styles'

const Orders = () => {
  const orders = useSelector(state => state.orders)

  return (
    <div>
      {orders.map((item, index) => (
        <OrderWrapper key={index.toString()}>
          <p>
            Ingredients:
            {item.ingredients.map(ingredient => (
              <OrderContent
                key={ingredient.name}
              >{`${ingredient.name} (${ingredient.quantity})`}</OrderContent>
            ))}
          </p>
          <p>
            Price <strong>USD ({item.totalPrice})</strong>
          </p>
        </OrderWrapper>
      ))}
    </div>
  )
}

export default Orders
