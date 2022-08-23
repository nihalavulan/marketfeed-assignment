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
        display: flex;
        align-items: center;
        padding-bottom: 15rem;

        @media (max-width: 968px) {
            background-size: 50rem;
        }
        @media (max-width: ${({theme}) => theme.isMobile}) {
            background-image: url('static/images/illustrations/HeroImgMob.svg');
            background-position: bottom;
            background-size: 100%;
            padding-bottom: 1rem;
            align-items: flex-start;
            height: 100%;
        }

        & > div {
            h5{
                font-size: 16px;
                text-transform: uppercase;
                color: #779FBD;
                letter-spacing: 2px;
                font-weight: 600;
            }
            h2{
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

            @media (max-width: ${({theme}) => theme.isMobile}) {
                text-align: center;
                h5{
                    font-size: 14px;
                }
                h2{
                    font-size: 30px;
                    line-height: 38px;
                    margin: 1rem 0;
                }
                button{
                    margin: 1rem auto;
                }
                p{
                    font-size: 14px;
                    margin: auto;
                }
                h6{
                    font-size: 16px;
                    letter-spacing: 1px;
                    color: #767676;
                }
            }
        }
    }
`