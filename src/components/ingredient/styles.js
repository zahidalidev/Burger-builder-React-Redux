import styled from 'styled-components'

const Meat = `
  width: 80%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 2% auto;
  border-radius: 15px;
`
const Cheese = `
  width: 90%;
  height: 4.5%;
  margin: 2% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`
const Lettuce = `
  width: 85%;
  height: 7%;
  margin: 2% auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`
const Bacon = `
  width: 80%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: 2% auto;
`
export const IngredientDiv = styled.div`
  ${props =>
    props.name === 'Meat'
      ? Meat
      : props.name === 'Cheese'
      ? Cheese
      : props.name === 'Lettuce'
      ? Lettuce
      : Bacon}
`
