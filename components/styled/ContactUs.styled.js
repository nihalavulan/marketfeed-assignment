import styled from "styled-components";

export const StyledContactUsWrapper = styled.div`
  width: 100%;
  height: 40rem;
  background-color: #f6f8ff;
  position: relative;
  background-image: url("static/images/illustrations/ContactBg.svg");
  background-repeat: no-repeat;
  background-size: cover;

  & > img {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    gap: 3rem;

    & > div {
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.04);
      border-radius: 40px;
      padding: 4rem;
      width: 60%;
      height: 15rem;

      display: flex;
      justify-content: space-evenly;
      gap: 2rem;
      align-items: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    height: 45rem;

    & > img {
      width: 300px;
      right: 3rem;
    }
    & > div {
      align-items: center;
      justify-content: flex-start;
      padding: 3rem 0;

      h2 {
        font-weight: 32px;
      }

      & > div {
        flex-direction: column;
        width: 90%;
        height: auto;
      }
    }
  }
`;
