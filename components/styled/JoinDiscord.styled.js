import styled from "styled-components";

export const StyledJoinDiscordWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-image: url("/static/images/illustrations/JoinBackground.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;
  position: relative;
  padding: 3rem;
  margin: 3rem 0;

  img {
    position: absolute;
    right: -40px;
    bottom: 40px;
  }

  & > div {
    width: 60%;

    h5 {
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #c4b85d;
    }
    h3 {
      font-size: 50px;
      letter-spacing: -1px;
      background: linear-gradient(112.22deg, #bc00cc 18.15%, #e4006e 74.41%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-top: 1rem;
      font-weight: 800;
    }
    p {
      font-size: 20px;
      line-height: 26px;
      max-width: 80%;
      margin-top: 1rem;
    }

    & > button {
      background: linear-gradient(137.56deg, #6a79df 0.23%, #886adf 110.36%);
      margin-top: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    text-align: center;
    margin: 2rem auto;
    width: 85%;
    padding: 3rem 0 8rem 0;
    background-size: cover;
    background-position: bottom;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      h5{
        font-size: 12px;
      }
      h3{
        font-size: 32px;
        line-height: 38px;
      }
      p{
        max-width: 100%;
        font-size: 14px;
        line-height: 21px;
      }
    }

    img{
      width: 210px;
      bottom: -20px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;
