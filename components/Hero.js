import React from 'react'
import Button from './common/Button'
import Navbar from './common/Navbar'
import { StyledContainer } from './common/styled/Container.styled'
import { StyledHeading } from './common/styled/Heading.styled'
import { StyledHeader } from './common/styled/Navbar.styled'
import { PrimaryColorSpan } from './common/styled/Span.style'
import { StyledHomeWrapper } from './styled/Home.styled'

const Hero = () => {
  return (
    <StyledHomeWrapper>
      <Navbar />
      <div>
        <StyledContainer>
        <div>
          <h5>Digital Learning Platform</h5>
          <StyledHeading><PrimaryColorSpan>World’s #1</PrimaryColorSpan> <br /> Stock Market <br /> University</StyledHeading>
          <p>Become a successful stock market trader and investor, learning directly from <b>Sharique Samsudheen</b> and his team of stock market experts!</p>
          <Button btnText={'Join now'} hero={true} iconOnly={false}/>
          <h6>Trusted by over 3000+ Traders</h6>
        </div>
        </StyledContainer>
      </div>
    </StyledHomeWrapper>
  )
}

export default Hero