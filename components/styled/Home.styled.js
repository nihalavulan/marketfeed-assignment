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
    }
`