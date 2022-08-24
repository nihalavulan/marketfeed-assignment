import styled from "styled-components";

export const StyledProcessBg = styled.div`
    position: relative;
    div{
        height: 80rem;

    background: linear-gradient(180deg, #e2f8ff 0%, rgba(255, 255, 255, 0) 100%);

    width: 110%;
    top: -5%;
    left: -5%;
    transform: rotate(-4deg);

    margin-top: -20rem;

    @media (max-width: ${({ theme }) => theme.isMobile}) {
            width: 100%;
            transform: none;
        }
    }
`;
