import React from 'react'
import styled from '@emotion/styled'

export const ButtonTypes = {
  primary: 'primary',
  default: 'default',
  secondary: 'secondary'
}
const FilterButtonContainer = styled.a`
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    ${props => {
      let buttonBackgroundColor
      let buttonTextColor
      switch (props.buttonType){
        case ButtonTypes.primary:
            buttonBackgroundColor = 'grey'
            buttonTextColor = 'white'
            break

        case ButtonTypes.secondary:
            buttonBackgroundColor = 'blue'
            buttonTextColor = 'white'
            break
        default:
            buttonBackgroundColor = 'white'
            buttonTextColor = 'black'
            break
          }
        return{
          backgroundColor: buttonBackgroundColor,
          color: buttonTextColor
        }
    }}
    :hover {
        border: 10px solid pink;
    }
`

function FilterButton({ href, onClick, text, buttonType }) {
  return <FilterButtonContainer
            href={href}
            onClick={onClick}
            buttonType={buttonType}>
            {text}
          </FilterButtonContainer>
}

export default FilterButton
