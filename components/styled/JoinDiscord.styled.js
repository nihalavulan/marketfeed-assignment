import styled from "styled-components";

export const StyledJoinDiscordWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-image: url("static/images/illustrations/JoinBackground.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;
  position: relative;
  padding: 3rem;
  margin: 3rem 0;

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
      text-fill-color: transparent;
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

  img {
    position: absolute;
    right: -40px;
    bottom: 40px;
  }
`;
