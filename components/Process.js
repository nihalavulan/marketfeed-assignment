import React from "react";
import ProcessCard from "./common/ProcessCard";
import { StyledContainer } from "./common/styled/Container.styled";
import { StyledHeading } from "./common/styled/Heading.styled";
import { StyledProcessBg } from "./common/styled/ProcessBg.styled";
import { PrimaryColorSpan } from "./common/styled/Span.style";
import { StyledProcessWrapper } from "./styled/Process.styled";

const Process = () => {
  return (
      <StyledContainer>
          <StyledProcessWrapper>
        <StyledHeading>
          We prepare you for success in your{" "}
          <PrimaryColorSpan>
            <br /> entire stock market lifecycle
          </PrimaryColorSpan>
        </StyledHeading>

        <div>
            <ProcessCard step={1} src={'static/images/illustrations/process1.svg'} heading={<><PrimaryColorSpan>Join</PrimaryColorSpan> us from anywhere, anytime</>} text={'breakout university is easily accessible over the internet, allowing you to learn,trade and succeed wherever and whenever you want.'}/>
            <ProcessCard step={2} src={'static/images/illustrations/process2.svg'} heading={<><PrimaryColorSpan>Learn</PrimaryColorSpan> with on-demand online lessons and daily interactive Q&A sessions</>} text={'Get unrestricted access to our expert-led daily sessions and interactive Q&A programs. Our all-inclusive and engaging online stock trading courses are designed to help you grasp all fundamental concepts and get you ready to make profitable market moves.'}/>
            <ProcessCard step={3} src={'static/images/illustrations/process3.svg'} heading={<><PrimaryColorSpan>Practice</PrimaryColorSpan> with live trading sessions led by expert traders and advisors</>} text={'Ever wondered how exactly people trade stocks in the real world and make money? Our live stock market trading sessions will walk you through the process and give you the confidence to make your first trade!'}/>
            <ProcessCard step={4} src={'static/images/illustrations/process4.svg'} heading={<>Losses, Experience and <PrimaryColorSpan>Profits</PrimaryColorSpan> #athishaktham 🚀</>} text={'Stock market is no rocket science. Still, it won’t be a smooth journey with instant returns. It is natural to make some losses, but we make sure that you learn from them and become successful traders just like us.'}/>
        </div>
      </StyledProcessWrapper>
      </StyledContainer>
  );
};

export default Process;
