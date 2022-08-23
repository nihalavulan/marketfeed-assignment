import React from "react";
import Button from "./common/Button";
import { StyledContainer } from "./common/styled/Container.styled";
import { StyledJoinDiscordWrapper } from "./styled/JoinDiscord.styled";

const JoinDiscord = () => {
  return (
    <StyledContainer>
      <StyledJoinDiscordWrapper>
        <div>
          <h5>Limited Period Offer</h5>
          <h3>
            We have everyone covered. <br /> Join FREE Section
          </h3>
          <p>
            There is space for everyone! Join the FREE section of our virtual
            campus on Discord and connect with like-minded students and stock
            market trading experts. Talk to us directly there and get onboarded
            onto the stock market world.
          </p>
          <Button btnText={"Take Me There"} />
        </div>
        <img src="static/images/illustrations/JoinCycleImg.svg" />
      </StyledJoinDiscordWrapper>
    </StyledContainer>
  );
};

export default JoinDiscord;
