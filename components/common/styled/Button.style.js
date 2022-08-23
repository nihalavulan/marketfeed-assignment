import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.button.primary};
  border: 1px solid rgba(18, 18, 18, 0.1);
  border-radius: 16px;
  font-size: 16px;
  padding: 13px 22px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    ${({ iconOnly }) =>
      iconOnly &&
      `
            background-color: transparent;
            border: none;
            font-size: 1px;
            outline: none;

            & > img {
                width: 64px;
            }
        `}
  }
`;
