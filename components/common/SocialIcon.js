import Image from 'next/image'
import React from 'react'
import { StyledSocialIconWrap } from './styled/SocialIcon.styled'

const SocialIcon = ({src}) => {
  return (
    <StyledSocialIconWrap>
        <Image src={src} />
    </StyledSocialIconWrap>
  )
}

export default SocialIcon