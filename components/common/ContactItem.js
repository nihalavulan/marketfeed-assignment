import React from "react";
import { StyledContactItem } from "./styled/ContactItem.styled";

const ContactItem = ({ text, value }) => {
  return (
    <StyledContactItem>
      <h6>{text}</h6>
      <h3>{value}</h3>
    </StyledContactItem>
  );
};

export default ContactItem;
