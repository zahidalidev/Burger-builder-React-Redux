import Ingredient from 'components/ingredient'

import { BreadBottom, BreadTop, BurgerWrapper, Seeds1, Seeds2 } from 'components/burger/styles'

import { colors } from 'config/theme'

const Burger = () => (
  <BurgerWrapper>
    <BreadTop>
      <Seeds1 white={colors.white} grey={colors.grey}></Seeds1>
      <Seeds2 white={colors.white} grey={colors.grey}></Seeds2>
    </BreadTop>
    <Ingredient />
    <BreadBottom></BreadBottom>
  </BurgerWrapper>
)

export default Burger
