import styled from "styled-components";

export const StyledProgramsCard = styled.div`
  width: 25rem;
  height: auto;
  padding: 3rem 2rem;

  background: #ffffff;
  border: 1px solid #e4e5eb;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    h3 {
      color: ${({ theme }) => theme.text.secondary};
      font-size: 30px;
      line-height: 35px;
      letter-spacing: -1px;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    span {
      font-weight: 600;
      font-size: 19px;

      b {
        font-weight: 800;
        font-size: 22px;
      }
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 3rem;
      font-size: 20px;
      letter-spacing: -0.5px;
      color: #767676;
    }

    div {
      width: 100%;
      height: auto;
      background: linear-gradient(
        rgba(234, 222, 113, 0.2),
        rgba(255, 211, 186, 0.2)
      );
      margin: 3rem 0;
      border-radius: 6px;
      padding: 1rem;

      p {
        font-size: 20px;
        line-height: 23px;
        letter-spacing: -0.5px;
        margin-bottom: 1rem;
      }
    }
  }

  button {
    width: 100%;
    padding: 1rem 2rem;
    justify-content: center;
  }

  @media (max-width: ${({theme}) => theme.isMobile}){
    min-width: 90%;
    padding: 2rem 1rem;
    & > div{
      h3{
        font-size: 20px;
        margin-bottom: .5rem;
      }
      span{
        font-size: 12px;
      }
      div{
        text-align: left;
        p{
          font-size: 14px;
        }
        a{
          font-size: 14px;
        }
      }
    }
  }
`;
