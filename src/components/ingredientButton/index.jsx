import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from 'store/ingredients'

const IngredientButton = ({ item, index }) => {
  const dispatch = useDispatch()

  const isDisable = item => item.quantity === 0

  const addIngredient = index => {
    dispatch(ADD_INGREDIENT({ id: index }))
  }

  const removeIngredient = index => {
    dispatch(REMOVE_INGREDIENT({ id: index }))
  }

  return (
    <div className='BuildControl'>
      <div className='BuildControl Label'>{item.name}</div>
      <button
        onClick={() => removeIngredient(index)}
        className={`BuildControl ${isDisable(item) && 'buil-btn-disabled'} less less-active`}
        disabled={isDisable(item)}
      >
        Less
      </button>
      <button onClick={() => addIngredient(index)} className='BuildControl more more-active'>
        More
      </button>
    </div>
  )
}

IngredientButton.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default IngredientButton
