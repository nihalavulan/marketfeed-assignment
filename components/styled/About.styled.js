import styled from "styled-components";

export const StyleAboutWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 0rem 4rem 0;

  display: flex;
  font-size: 20px;
  line-height: 26px;
  margin-top: 5rem;

  & > div {
    display: flex;
    flex-direction: column;
    padding: 0 5rem;

    & > div:nth-child(1) {
      p {
        font-size: 20px;
        line-height: 30px;
      }
      p:nth-child(2) {
        margin-top: 3rem;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      width: 70%;
      margin-top: 2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    flex-direction: column;
    text-align: center;

    & > div {
      padding: 0 2rem;
      & > div:nth-child(1) {
        p {
          font-size: 14px;
          line-height: 21px;
          margin-top: 1rem;
        }
        p:nth-child(2) {
          margin-top: 1rem;
        }
      }
      & > div:nth-child(2) {
        width: 100%;
        flex-wrap: wrap;

        div{
          flex-basis: 50%;
        }
        div:nth-child(3){
          margin-top: 2rem;
        }
      }
    }
  }
`;
