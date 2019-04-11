import styled from 'styled-components'

export const Orb = styled.div`
    background: ${({ colour }) => colour};
    height: ${({ size }) => size}rem;
    width: ${({ size }) => size}rem;
    margin: 1rem;
    display: inline-block;
    border-radius: 4px;
    box-shadow: rgba(193, 0, 111, 0.22) 5px 5px, rgba(96, 74, 204, 0.12) -5px 5px;
    position: relative;
    top: ${({positionY}) => positionY}rem;
    left: ${({positionX}) => positionX}rem;
    border: 1px solid #9a9a9a;
    z-index: -1;
    animation: spinner1 11000ms ease infinite;
    animation-delay: ${({ animationdDelay }) => animationdDelay}s;

    @keyframes spinner1 {
        0% {
            transform: scale(1.0);
        }
        50% {
            transform: rotate(360deg);
            transform: scale(1.5);
        }
        100% {
            transform: rotate(0deg);
            transform: scale(1.0);
        }
    }
`;

export const Container = styled.div`
    height: 0;
    width: 90%;
    margin: 0 auto;
    opacity: 0.25;
`;
