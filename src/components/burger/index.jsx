import Ingredient from 'components/ingredient'

import 'components/burger/styles.css'

const Burger = () => (
  <div className='Burger'>
    <div className='BreadTop'>
      <div className='Seeds1'></div>
      <div className='Seeds2'></div>
    </div>
    <Ingredient />
    <div className='BreadBottom'></div>
  </div>
)

export default Burger
