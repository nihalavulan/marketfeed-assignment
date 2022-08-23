import styled from "styled-components";

export const StyledHeading = styled.h2`
  font-size: 50px;
  letter-spacing: -1px;
  line-height: 60px;
  font-weight: 800;

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    h2 {
      font-size: 30px;
      line-height: 38px;
    }
  }
`;
