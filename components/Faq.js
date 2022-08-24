import React from 'react'
import FaqItem from './common/FaqItem'
import { StyledContainer } from './common/styled/Container.styled'
import { StyledHeading } from './common/styled/Heading.styled'
import { StyledFaqWrapper } from './styled/Faq.styled'

const Faq = () => {
  return (
    <StyledFaqWrapper>
        <StyledContainer>
            <StyledHeading>Frequently Asked Questions</StyledHeading>
            <div>
                <FaqItem />
            </div>
        </StyledContainer>
    </StyledFaqWrapper>
  )
}

export default Faq