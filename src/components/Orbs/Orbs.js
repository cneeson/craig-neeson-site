import React from 'react'
import { Orb, Container } from './Styled';

const VARIATIONS = 15;

const colours = [
    'rgba(96, 74, 204, 0.12)',
    'rgba(199, 237, 255, 0.8)',
];
// const getRandomOrbSize = () => Math.floor(Math.random() * 2.5) + 1;
const getRandomOrbSize = () => Math.floor(Math.random() * 5) + 0.5;
const getRandomAnimationDelay = () => Math.floor(Math.random() * 10);
const getRandomOrbColor = () => colours[Math.floor(Math.random() * colours.length)];
const getRandomPosition = () => {
    let rand = Math.floor(Math.random() * 4) + 1;
    return rand *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
};
const getOrbs = (variations) => shuffle(Array.from(Array(variations), (v, index) => generateOrbArray(index)).flat());

const generateOrbArray = (arrayKey) => {
    const size = getRandomOrbSize();
    const positionX = getRandomPosition();
    const positionY = positionX;
    const animationdDelay = getRandomAnimationDelay();

    return Array.from(Array(10), (v, i) => {
        return (<Orb key={`${i}-${arrayKey}`} size={size} positionY={positionY} positionX={positionX} colour={getRandomOrbColor} animationdDelay={animationdDelay} />);
    })
};

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const Orbs = () => <Container>{getOrbs(VARIATIONS)}</Container>;

export default Orbs
