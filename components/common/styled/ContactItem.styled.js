import styled from "styled-components";

export const StyledContactItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  h6 {
    color: ${({ theme }) => theme.text.lightText};
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.5px;
    font-weight: 600;
    opacity: 0.7;
  }
  h3 {
    color: ${({ theme }) => theme.text.darkText};
    font-size: 36px;
    letter-spacing: -1px;
    font-weight: 800;
  }

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    text-align: center;
    h6 {
      font-size: 16px;
      color: #8149a8;
    }
    h3 {
      font-size: 24px;
    }
  }
`;
