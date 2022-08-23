import styled from "styled-components";

export const StyledFeaturedItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin: 1rem 0;
    
    div {
        display: flex;
        flex-direction: column;

        h4 {
            font-size: 24px;
            line-height: 29px;
            letter-spacing: -0.5px;
            color: #641B98;
        }

        p {
            max-width: 80%;
            margin-top: .7rem;
            font-size: 16px;
            line-height: 21px;
            font-weight: 500;
        }
    }
`