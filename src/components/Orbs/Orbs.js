import React from 'react'
import { Orb, Container } from './Styled';

const colours = [
    'rgba(96, 74, 204, 0.12)',
    'rgba(255, 0, 125, 0.5)',
    'rgba(199, 237, 255, 0.8)'
];
const getRandomOrbSize = () => Math.floor(Math.random() * 100) + 50;
const getRandomOrbCount = () => Math.floor(Math.random() * 15);
const getRandomOrbColor = () => colours[Math.floor(Math.random() * colours.length)];
const getRandomPosition = () => {
    let rand = Math.floor(Math.random() * 4) + 1;
    return rand *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;;
}


const Orbs = () => {
    const orbCount = getRandomOrbCount();
    return (
        <Container>
            {Array.from(Array(15), () => {
                const size = getRandomOrbSize();
                const positionX = getRandomPosition();
                const positionY = getRandomPosition();
                return (<Orb size={size} positionY={positionY} positionX={positionX} colour={getRandomOrbColor} />)
            })}
        </ Container>
    )
}

export default Orbs
