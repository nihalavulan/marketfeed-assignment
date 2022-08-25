import React from 'react'
import { StyledSocialIconWrap } from './styled/SocialIcon.styled'

const SocialIcon = ({src}) => {
  return (
    <StyledSocialIconWrap>
        <img src={src} />
    </StyledSocialIconWrap>
  )
}

export default SocialIcon