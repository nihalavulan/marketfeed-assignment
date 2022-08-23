import React from 'react'
import { StyledButton } from './styled/Button.style'


const Button = ({btnText, src , iconOnly}) => {
  return (
    <StyledButton iconOnly={iconOnly}>
        {src && <img src={src} />}
        {btnText}
    </StyledButton>
  )
}

export default Button