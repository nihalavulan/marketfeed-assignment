import React from 'react'
import { StyledButton } from './styled/Button.style'


const Button = ({btnText, src , iconOnly}) => {
  return (
    <StyledButton>
        {src && <img src={src} alt="" />}
        {!iconOnly && btnText}
    </StyledButton>
  )
}

export default Button