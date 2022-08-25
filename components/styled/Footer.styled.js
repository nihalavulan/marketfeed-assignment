import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  padding: 6rem;
  background-color: #1a1d24;
  color: #fff;

  display: flex;
  flex-direction: column;

  & > div {
    & > div {
      display: flex;
      justify-content: space-between;


      & > div:first-child {
        p {
          font-size: 16px;
          line-height: 20px;
          letter-spacing: -0.5px;
          font-weight: 500;
          margin-top: 1rem;
        }
        div{
            display: flex;
            gap: 15px;
            margin-top: 10px;
        }
      }
      & > div:last-child{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        width: 100%;
      }
    }

  }

  & > p {
    text-align: center;
    font-size: 18px;
    letter-spacing: -0.5px;
    opacity: 0.8;
    margin-top: 8rem;
  }
`;
