import React from 'react'
import { StyledProcessCard } from './styled/ProcessCard.Styled'
import { PrimaryColorSpan } from './styled/Span.style'

const ProcessCard = ({step , heading , text , src}) => {
  return (
    <StyledProcessCard layout={step % 2 == 0 ? 'row-reverse' : 'row'}>
        <div>
            <span>step {step}</span>
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
        <Image src={src}  />
    </StyledProcessCard>
  )
}

export default ProcessCard