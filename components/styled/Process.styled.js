import styled from "styled-components";

export const StyledProcessWrapper = styled.div`
  text-align: center;
  margin-top: 5rem;

  & > div {
    padding: 8rem 7rem;
  }

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    & > h2 {
      font-size: 32px;
      line-height: 38px;
      letter-spacing: -1px;
    }
    & > div {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
