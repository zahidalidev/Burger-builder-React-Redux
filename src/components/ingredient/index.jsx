import { useSelector } from 'react-redux'

import 'components/ingredient/styles.css'

const Ingredient = () => {
  const ingredients = useSelector(state => state.ingredients)

  const ingreExist = ingredients.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      {!ingreExist ? <p>No Ingredients Added</p> : null}
      {ingredients.map(item =>
        [...Array(item.quantity)].map((item2, index) => (
          <div key={index.toString} className={`BurgerIngredient ${item.name}`}></div>
        ))
      )}
    </>
  )
}

export default Ingredient
