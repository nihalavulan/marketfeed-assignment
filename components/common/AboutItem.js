import React from 'react'
import { StyledAboutItem } from './styled/AboutItem.styled'

const AboutItem = ({number , text}) => {
  return (
    <StyledAboutItem>
        <span>{number}</span>
        <h6>{text}</h6>
    </StyledAboutItem>
  )
}

export default AboutItem