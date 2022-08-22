import styled from "styled-components";

export const StyledHomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(151.68deg, #E3F7FF -2.69%, #DAE3FD 98.31%);

    & > div {
        background-image: url('static/images/illustrations/HeroImgWeb.svg');
        background-size: 65rem;
        background-repeat: no-repeat;
        background-position: right bottom;
        width: 100%;
        height: 90%;
        @media (max-width: 968px) {
            background-size: 50rem;
        }
        @media (max-width: 576px) {
            background-image: url('static/images/illustrations/HeroImgMob.svg');
            background-position: bottom ;
            background-size: 100%;

        }
        display: flex;
        align-items: center;
        padding-bottom: 15rem;

        & > div {
            h5{
                font-size: 16px;
                text-transform: uppercase;
                color: #779FBD;
                letter-spacing: 2px;
                font-weight: 600;
            }
            h1{
                font-size: 50px;
                letter-spacing: -1px;
                line-height: 60px;
                font-weight: 800;
                margin: 2rem 0;
            }
            button{
                margin: 2rem 0;
            }
            p{
                font-size: 16px;
                line-height: 21px;
                font-weight: 500;
                max-width: 19rem;
            }
            h6{
                font-size: 16px;
                letter-spacing: 1px;
                color: #767676;
            }
        }
    }
`