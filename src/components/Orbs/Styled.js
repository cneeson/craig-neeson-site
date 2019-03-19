import styled from 'styled-components'

export const Orb = styled.div`
    background: ${({ colour }) => colour};
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    margin: 1rem;
    display: inline-block;
    border-radius: 50%;
    box-shadow: rgba(193, 0, 111, 0.22) 10px 10px, rgba(96, 74, 204, 0.12) -10px 10px;
    position: relative;
    top: ${({positionY}) => positionY}rem;
    left: ${({positionX}) => positionX}rem;
    border: 3px solid black;
`;

export const Container = styled.div`
       height: 0;
`;
