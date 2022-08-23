import styled from "styled-components";

export const StyledFeaturedItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin: 1rem 0;

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    flex-direction: column;
    img {
      width: 36px;
      height: 36px;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 24px;
      line-height: 29px;
      letter-spacing: -0.5px;
      color: ${({theme}) => theme.text.secondary};
    }

    p {
      max-width: 80%;
      margin-top: 0.7rem;
      font-size: 16px;
      line-height: 21px;
      font-weight: 500;
    }

    @media (max-width: ${({ theme }) => theme.isMobile}) {
      h4 {
        font-size: 16px;
        line-height: 21px;

        br {
          display: none;
        }
      }
      p {
        font-size: 12px;
        line-height: 16px;
        max-width: 100%;
      }
    }
  }
`;
