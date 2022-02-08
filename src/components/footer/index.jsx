import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { useSelector } from 'react-redux'

import IngredientButton from 'components/ingredientButton'
import burgerTotalPrice from 'utils/burgerTotalPrice'

import 'components/footer/styles.css'

function Footer({ handleOrder }) {
  const [currentTotalPrice, setCurrentTotalPrice] = useState(3)

  const user = useSelector(state => state.user)
  const ingredients = useSelector(state => state.ingredients)

  const isOrderActive = currentTotalPrice > 3
  const orderBtnLable = _.isEmpty(user) ? 'Sign up to order' : 'Order now'

  useEffect(() => {
    setCurrentTotalPrice(burgerTotalPrice(ingredients))
  }, [ingredients])

  return (
    <div className='BuildControls'>
      <p>
        Current price: <strong>{`$${currentTotalPrice}`}</strong>
      </p>

      {ingredients.map((item, index) => (
        <IngredientButton key={item.id.toString()} index={index} item={item} />
      ))}

      <button
        className={`BuildControls OrderButton text-uppercase ${
          isOrderActive ? 'OrderButton-active' : 'OrderButton-disabled'
        }`}
        disabled={currentTotalPrice == 3}
        onClick={handleOrder}
      >
        {orderBtnLable}
      </button>
    </div>
  )
}

Footer.propTypes = {
  handleOrder: PropTypes.func.isRequired
}

export default Footer
