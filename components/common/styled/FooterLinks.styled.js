import styled from "styled-components";

export const StyledFooterLinks = styled.div`
  display: flex;
  flex-direction: column;

  h6 {
    font-size: 20px;
    letter-spacing: -0.5px;
    color: #ffffff;
    opacity: 0.6;
    font-weight: 500;
    text-transform: capitalize;
  }

  ul {
    list-style: none;
    margin-top: 0.7rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    a {
      li {
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        letter-spacing: -0.5px;

        :hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    flex: 50%;
    margin-top: 2rem;
  }
`;
