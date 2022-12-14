import Image from 'next/image'
import React from 'react'
import { StyledProcessCard } from './styled/ProcessCard.Styled'

const ProcessCard = ({step , heading , text , src}) => {
  return (
    <StyledProcessCard layout={step % 2 == 0 ? 'row-reverse' : 'row'}>
        <div>
            <span>step {step}</span>
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
        <Image width="400" height="400" src={src}  />
    </StyledProcessCard>
  )
}

export default ProcessCard