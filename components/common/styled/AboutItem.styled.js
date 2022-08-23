import styled from "styled-components";

export const StyledAboutItem = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 800;
    font-size: 36px;
  }
  h6 {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: -1px;
    margin-top: 0.5rem;
  }
`;
