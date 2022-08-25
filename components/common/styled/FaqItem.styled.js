import styled from "styled-components";

export const StyledFaqItem = styled.div`
  border-bottom: 1px solid #cecece;
  padding: 1rem;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h6 {
      font-size: 20px;
      font-weight: 500;
      letter-spacing: -0.5px;
      color: #3849a6;
    }

    span {
      font-weight: 800;
      font-size: 30px;
      color: #637bff;
      cursor: pointer;
    }
  }
  p {
    font-size: 16px;
    line-height: 24px;
    max-width: 95%;
    margin-top: 2rem;
    display: ${({ open }) => !open && "none"};
  }

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    & > div {
      h6 {
        font-size: 14px;
        line-height: 21px;
        max-width: 90%;
      }
    }
    p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
