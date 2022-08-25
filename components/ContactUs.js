import React from "react";
import ContactItem from "./common/ContactItem";
import { StyledContactItem } from "./common/styled/ContactItem.styled";
import { StyledContainer } from "./common/styled/Container.styled";
import { StyledHeading } from "./common/styled/Heading.styled";
import { StyledContactUsWrapper } from "./styled/ContactUs.styled";

const ContactUs = () => {
  return (
    <StyledContactUsWrapper>
      <StyledContainer>
        <StyledHeading>Talk to Us</StyledHeading>
        <div>
          <ContactItem text={"Send us an Email"} value={"hello@fundfolio.in"} />
          <ContactItem text={"Give us a call"} value={"+91 99006 63322"} />
        </div>
      </StyledContainer>
      <img src="static/images/illustrations/ContactIllustration.svg" alt="" />
    </StyledContactUsWrapper>
  );
};

export default ContactUs;
