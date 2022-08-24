import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: #fff;
        color: ${({ theme }) => theme.text.darkText};
        overflow-x: hidden;
    }
    input, textarea, button {
        font-family: 'Inter', sans-serif;
    }
`;
