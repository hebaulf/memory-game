import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --fontColor: rgb(255, 255, 255);
        --backgroundColor: rgb(34, 34, 16);
        --borderColor: rgb(90, 90, 90);
        --btnBackground: rgb(40, 40, 40);
        --btnBackgroundHover: rgb(40, 40, 40);

        --fontSizeH1: clamp(2rem, 5vw, 4rem);
        --fontSizeP: clamp(1rem, 2.5vw, 1.5rem);
        --fontSizeButton: clamp(1rem, 2.5vw, 1.5rem);

        --border: 1px solid var(--borderColor);
        --borderRadiusCard: 16px;
        --borderRadiusBtn: 8px;
    }

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
        min-width: 320px;
        min-height: 100vh;
        font-size: 16px;
        overflow-x: hidden;
    }

    body {
        height: 100%;
        margin: 0;
        background: var(--backgroundColor);
        color: var(--fontColor);
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`