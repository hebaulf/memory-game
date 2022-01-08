import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    cursor: pointer;
`;

export const Card = styled.div`
    img {
        width: 100%;
        display: block;
        border: var(--border);
        border-radius: var(--borderRadiusCard);

        &.front {
            transform: rotateY(90deg);
            transition: all 0.2s ease-in;
            position: absolute;
        }

        &.back {
            transition: all 0.2s ease-in;
            transition-delay: 0.2s;
        }
    }

    &.flipped {
        img.front {
            transform: rotateY(0deg);
            transition-delay: 0.2s;
        }

        img.back {
            transform: rotateY(90deg);
            transition-delay: 0s;
        }
    }
`;