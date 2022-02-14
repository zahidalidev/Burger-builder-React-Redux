import styled from 'styled-components'
import { colors } from 'config/theme'

export const InputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 5px !important;
`

export const InputField = styled.input`
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid ${props => (props.invalid ? colors.red : '#ccc')};
  background-color: ${props => (props.invalid ? colors.salmon : colors.white)};
  font: inherit;
  display: block;

  &:focus {
    outline: none;
    background-color: #ccc;
  }
`
