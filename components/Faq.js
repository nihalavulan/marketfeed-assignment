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
                <FaqItem id={1} question={'How do I trust you? Are you even actually making profits? Isn’t this all a scam?'} answer={'We completely understand your feelings. Even we had the same questions in mind when we started out and saw many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&L statements when you join the programme. What is more interesting is Sharique Samsudheen has made his P&L public on social media.'}/>
                <FaqItem id={2} question={'If you are successful in trading, then why do you need to sell courses for money?'} answer={'We completely understand your feelings. Even we had the same questions in mind when we started out and saw many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&L statements when you join the programme. What is more interesting is Sharique Samsudheen has made his P&L public on social media.'}/>
                <FaqItem id={3} question={'What is breakout university?'} answer={'We completely understand your feelings. Even we had the same questions in mind when we started out and saw many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&L statements when you join the programme. What is more interesting is Sharique Samsudheen has made his P&L public on social media.'}/>
                <FaqItem id={4} question={'How do I join the university?'} answer={'We completely understand your feelings. Even we had the same questions in mind when we started out and saw many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&L statements when you join the programme. What is more interesting is Sharique Samsudheen has made his P&L public on social media.'}/>
                <FaqItem id={5} question={'Will I get a certificate for completing the stock market trading course?'} answer={'We completely understand your feelings. Even we had the same questions in mind when we started out and saw many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&L statements when you join the programme. What is more interesting is Sharique Samsudheen has made his P&L public on social media.'}/>
                <FaqItem id={6} question={'How exactly will your stock market trading courses help me start making money?'} answer={'We completely understand your feelings. Even we had the same questions in mind when we started out and saw many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&L statements when you join the programme. What is more interesting is Sharique Samsudheen has made his P&L public on social media.'}/>
                <FaqItem id={7} question={'What’s in it for me?'} answer={'We completely understand your feelings. Even we had the same questions in mind when we started out and saw many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&L statements when you join the programme. What is more interesting is Sharique Samsudheen has made his P&L public on social media.'}/>
            </div>
        </StyledContainer>
    </StyledFaqWrapper>
  )
}

export default Faq