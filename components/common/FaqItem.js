import React, { useEffect, useState } from "react";
import { StyledFaqItem } from "./styled/FaqItem.styled";

const FaqItem = ({ id, question, answer }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (id == 1) setOpen(true);
  }, []);

  return (
    <StyledFaqItem open={open}>
      <div>
        <h6>{question}</h6>
        <span onClick={() => setOpen(!open)}>{open ? "-" : "+"}</span>
      </div>
      <p>{answer}</p>
    </StyledFaqItem>
  );
};

export default FaqItem;
