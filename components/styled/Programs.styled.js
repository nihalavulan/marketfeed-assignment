import styled from "styled-components";

export const StyledProgramsWrapper = styled.div`
  display: flex;
  padding: 5rem 0;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 2rem;
    z-index: 2;
  }

  & > h2 {
    margin-top: 4rem;
  }

  @media (max-width: ${({theme}) => theme.isMobile}){
    flex-direction: column;
    text-align: center;
    padding: 1rem 0;

    & > h2{
      font-size: 32px;
      line-height: 38px;
      margin-bottom: 2rem;
    }

    & > div {
      overflow-x: auto;
      padding: 0 1rem;
      gap: .5rem;
    }
  }
`;
