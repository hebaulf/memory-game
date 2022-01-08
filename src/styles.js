import styled from "styled-components";

export const Container = styled.div`
    width: clamp(16rem, 90vw, 77.5rem);
    margin: 0 auto;
    padding-bottom: 3rem;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3% 0;
    margin-bottom: 3%;

    @media screen and (max-width: 550px) {
        flex-direction: column;
        justify-content: space-around;
        gap: 1rem;
    }
    
    h1 {
        font-family: 'Metamorphous', cursive;
        font-size: var(--fontSizeH1);
    }

    .header-right {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 550px) {
            width: 100%;
            justify-content: space-around;
        }

        p {
            margin-right: clamp(0.8rem, 3vw, 1.5rem);
            font-family: 'Open Sans', sans-serif;
            font-size: var(--fontSizeP);
            white-space: nowrap;
        }
    }
`;

export const Button = styled.button`
    padding: 0.8rem 1.3rem;
    background: var(--btnBackground);
    color: var(--fontColor);
    font-family: 'Open Sans', sans-serif;
    font-size: var(--fontSizeButton);
    line-height: 1;
    white-space: nowrap;
    border: var(--border);
    border-radius: var(--borderRadiusBtn);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    :hover {
        background: darkgray;
        color: var(--fontColor);
    }
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: clamp(0.8rem, 3vw, 1.5rem);

    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
