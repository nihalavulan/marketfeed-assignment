import Link from "next/link";
import React from "react";
import Button from "./Button";
import { StyledProgramsCard } from "./styled/ProgramsCard.styled";

const ProgramsCard = ({ programName, amount, benifits, discount }) => {
  return (
    <StyledProgramsCard>
      <div>
        <h3>{programName}</h3>
        <span>
          ₹ <b>{amount}</b>/seat
        </span>
        <ul>
          {benifits.map((benefit) => (
            <li>{benefit}</li>
          ))}
        </ul>
        {discount && (
          <div>
            <p>Claim your 10% off - if you have demat account through us</p>
            <Link href="/">Check Eligibility</Link>
          </div>
        )}
      </div>
      <Button btnText={"Book My Seat"} />
    </StyledProgramsCard>
  );
};

export default ProgramsCard;
