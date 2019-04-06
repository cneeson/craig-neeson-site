import React from 'react'
import { Orb, Container } from './Styled';

const colours = [
    'rgba(96, 74, 204, 0.12)',
    'rgba(255, 0, 125, 0.5)',
    'rgba(199, 237, 255, 0.8)',
];
const getRandomOrbSize = () => Math.floor(Math.random() * 2.5) + 0.5;
const getRandomOrbCount = () => Math.floor(Math.random() * 40);
const getRandomAnimationDelay = () => Math.floor(Math.random() * 10);
const getRandomOrbColor = () => colours[Math.floor(Math.random() * colours.length)];
const getRandomPosition = () => {
    let rand = Math.floor(Math.random() * 4) + 1;
    return rand *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;;
}

const getOrbArray = () => {
    const size = getRandomOrbSize();
    const positionX = getRandomPosition();
    const positionY = getRandomPosition();
    const animationdDelay = getRandomAnimationDelay();

    Array.from(Array(50), (v, i) => {
        return (<Orb key={i} size={size} positionY={positionY} positionX={positionX} colour={getRandomOrbColor} animationdDelay={animationdDelay} />);
    })
}

const Orbs = () => {
    const orbCount = getRandomOrbCount();

    // Get 4 variations of orb
    // Print those out one by pne

    // const orbArray1 = Array.from(Array(50), (v, i) => {
    //     const size = getRandomOrbSize();
    //     const positionX = getRandomPosition();
    //     const positionY = getRandomPosition();
    //     const animationdDelay = getRandomAnimationDelay();
    //     return (<Orb key={i} size={size} positionY={positionY} positionX={positionX} colour={getRandomOrbColor} animationdDelay={animationdDelay} />);
    // })


    return (
        <Container>
            {/* {getOrbArray()} */}
            {Array.from(Array(200), (v, i) => {
                const size = getRandomOrbSize();
                const positionX = getRandomPosition();
                const positionY = getRandomPosition();
                const animationdDelay = getRandomAnimationDelay();
                return (<Orb key={i} size={size} positionY={positionY} positionX={positionX} colour={getRandomOrbColor} animationdDelay={animationdDelay} />);
            })}
        </ Container>
    )
}

export default Orbs
