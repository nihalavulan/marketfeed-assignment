import React from 'react'
import Button from './common/Button'
import { StyledHeader } from './common/Navbar.styled'

const Navbar = () => {
  return (
    <StyledHeader>
      <img src="static/images/logo.svg" alt=""/>
      <Button btnText='chat with us' src={'static/images/social/wtsp.png'} />
    </StyledHeader>
  )
}

export default Navbar