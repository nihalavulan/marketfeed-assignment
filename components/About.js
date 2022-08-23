import React from "react";
import AboutItem from "./common/AboutItem";
import { StyledAboutItem } from "./common/styled/AboutItem.styled";
import { StyledContainer } from "./common/styled/Container.styled";
import { StyledHeading } from "./common/styled/Heading.styled";
import { PrimaryColorSpan } from "./common/styled/Span.style";
import { StyleAboutWrapper } from "./styled/About.styled";

const About = () => {
  return (
    <StyledContainer>
      <StyleAboutWrapper>
        <StyledHeading>
          <PrimaryColorSpan>About</PrimaryColorSpan>
          <br /> Breakout <br /> University
        </StyledHeading>
        <div>
          <div>
            <p>
              breakout university is an online stock market learning platform on
              a mission to democratize the stock market. Since our
              establishment, we have helped thousands of students just like you
              learn how to navigate the stock market and become successful
              traders.
            </p>
            <p>
              Our stock trading training platform is an educational initiative
              of fundfolio and the vision of Sharique Samsudheen, specially
              designed to help you break out into the world of stock market and
              claim your financial freedom.
            </p>
          </div>
          <div>
            <AboutItem number={"800k"} text={"followers"} />
            <AboutItem number={"100k"} text={"students"} />
            <AboutItem number={"3000+"} text={"traders"} />
          </div>
        </div>
      </StyleAboutWrapper>
    </StyledContainer>
  );
};

export default About;
