import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;

    @media (max-width: ${({theme}) => theme.isMobile}) {
        padding: 1rem 2rem;
    }

    & > img {
        width: 180px;
        @media (max-width: ${({theme}) => theme.isMobile}) {
            width: 120px;
        }
    } 
`