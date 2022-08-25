import Image from 'next/image'
import React from 'react'
import { StyledSocialIconWrap } from './styled/SocialIcon.styled'

const SocialIcon = ({src}) => {
  return (
    <StyledSocialIconWrap>
        <Image width={16} height={16}  src={src} />
    </StyledSocialIconWrap>
  )
}

export default SocialIcon