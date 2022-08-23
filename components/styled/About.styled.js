import styled from "styled-components";

export const StyleAboutWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 0rem 4rem 0;

  display: flex;
  font-size: 20px;
  line-height: 26px;

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
`;
