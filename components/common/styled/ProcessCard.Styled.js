import styled from "styled-components";

export const StyledProcessCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ layout }) => layout};
  gap: 13rem;

  & > div {
    display: flex;
    flex-direction: column;
    text-align: left;

    & > span {
      color: ${({ theme }) => theme.text.secondary};
      text-transform: uppercase;
      font-size: 16px;
      letter-spacing: 2px;
      font-weight: 700;
    }
    h3 {
      font-size: 30px;
      letter-spacing: -0.5px;
      margin: 1rem 0;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme.text.lightText};
      max-width: 450px;
    }
  }

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    flex-direction: column;
    gap: 2rem;

    & > div {
      text-align: center;
      & > span {
        font-size: 12px;
      }
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
      }
    }

    img {
      width: 320px;
    }
  }
`;
