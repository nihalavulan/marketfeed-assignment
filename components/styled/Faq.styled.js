import styled from "styled-components";

export const StyledFaqWrapper = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(158.73deg, #fffcf1 -0.08%, #eefeff 102.46%);
  text-align: center;
  padding: 6rem 0;

  & > div > div {
    padding: 4rem 7rem;
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    & > div {
      h2 {
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        letter-spacing: -1px;
        padding: 0 4rem;
      }
    }

    & > div > div {
      padding: 4rem 1rem;
      text-align: left;
    }
  }
`;
