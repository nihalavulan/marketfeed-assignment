import React from "react";
import FeaturedItem from "./common/FeaturedItem";
import { StyledContainer } from "./common/styled/Container.styled";
import { StyledFeatureWrapper } from "./styled/Featured.styled";

const Features = () => {
  return (
    <StyledContainer>
      <StyledFeatureWrapper>
        <FeaturedItem
          head={
            <>
              Virtual Campus <br /> Community
            </>
          }
          text={
            "The best environment to learn and interact with budding traders just like you. Trade and invest together, get expert help, or simply make new friends!"
          }
          src={"static/images/illustrations/Feature1.png"}
        />
        <FeaturedItem
          head={
            <>
              Practical <br /> Learning
            </>
          }
          text={
            "Trading cannot be mastered through just theoretical knowledge. Our students get to trade with us, drawing from the experience and expertise of professional trading mentors."
          }
          src={"static/images/illustrations/Feature2.png"}
        />
        <FeaturedItem
          head={
            <>
              For Traders, <br /> By Traders
            </>
          }
          text={
            "The best environment to learn and interact with budding traders just like you. Trade and invest together, get expert help, or simply make new friends!"
          }
          src={"static/images/illustrations/Feature1.png"}
        />
      </StyledFeatureWrapper>
    </StyledContainer>
  );
};

export default Features;
