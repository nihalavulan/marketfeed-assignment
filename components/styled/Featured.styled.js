import styled from "styled-components";

export const StyledFeatureWrapper = styled.div`
  width: 100%;
  height: auto;

  background: linear-gradient(144.46deg, #e0ffed 1.35%, #e0f9ff 115.13%);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  padding: 3rem;
  display: flex;
  margin: -7.5rem 0 2rem 0;

  @media (max-width: ${({ theme }) => theme.isMobile}) {
    flex-direction: column;
    margin: -3rem auto 2rem auto;
    width: 85%;
  }
`;
