import React from "react";
import ProgramsCard from "./common/ProgramsCard";
import { StyledContainer } from "./common/styled/Container.styled";
import { StyledHeading } from "./common/styled/Heading.styled";
import { StyledProgramsCard } from "./common/styled/ProgramsCard.styled";
import { PrimaryColorSpan } from "./common/styled/Span.style";
import { StyledProgramsWrapper } from "./styled/Programs.styled";

const Programs = () => {
  const benifitsArray1 = [
    "Weekly Live",
    "Raise Ticket",
    "Monthly Webinars",
    "Group support from us",
  ];

  const benifitsArray2 = [
    "Live QnA",
    "Raise Ticket",
    "Monthly Webinars",
    "Weekly Live",
    "Group support from us",
  ];

  return (
    <StyledContainer>
      <StyledProgramsWrapper>
        <StyledHeading>
          Discover
          <PrimaryColorSpan>
            <br /> Our Programs
          </PrimaryColorSpan>
        </StyledHeading>
        <div>
          <ProgramsCard
            programName="Stock Market Basics"
            amount="9999"
            benifits={benifitsArray1}
            discount
          />
          <ProgramsCard
            programName="Option Selling"
            amount="4999"
            benifits={benifitsArray2}
          />
        </div>
      </StyledProgramsWrapper>
    </StyledContainer>
  );
};

export default Programs;
