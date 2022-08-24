import React from "react";
import { StyledFaqItem } from "./styled/FaqItem.styled";

const FaqItem = () => {
  return (
    <StyledFaqItem>
      <div>
        <h6>
          How do I trust you? Are you even actually making profits? Isn’t this
          all a scam?
        </h6>
        <span>-</span>
      </div>
      <p>
        We completely understand your feelings. Even we had the same questions
        in mind when we started out and saw many “stock market gurus” in our
        journey. Please make sure that you ask for and see the Profit and Loss
        report of whoever you are learning trading from. With that being said,
        we will be showing our P&L statements when you join the programme. What
        is more interesting is Sharique Samsudheen has made his P&L public on
        social media.{" "}
      </p>
    </StyledFaqItem>
  );
};

export default FaqItem;
