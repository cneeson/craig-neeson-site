import React from 'react';
import { Wrapper } from './styled';


const Background = (props) => {
    const { id, color = 'rgba(193, 0, 111, 0.2)' } = props;

    const gradientId = `${id}Gradient`;
    const maskId = `${id}Mask`;
    const patternId = `${id}Pattern`;

    return (
        <Wrapper>
            <svg width='100vw' height='450px'>
                <defs>
                    <linearGradient id={gradientId} y2='1' x2='0'>
                        <stop offset='0.1' stop-color='white' stop-opacity='0' />
                        <stop offset='1' stop-color='white' stop-opacity='.5' />
                    </linearGradient>

                    <mask id={maskId} maskContentUnits='objectBoundingBox'>
                        <rect width='1' height='1' fill={`url(#${gradientId})`} />
                    </mask>

                    <pattern id={patternId} x='0' y='0' width='256' height='256' patternUnits='userSpaceOnUse'>
                        <g id={patternId}>
                            <polyline
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                fill='none'
                                stroke={color}
                                stroke-width='5'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-miterlimit='5'
                                points=' -3,-2 16.5,15.5 31.5,0.5 63.5,32.5 48.5,47.5 31.5,32.5 -0.5,64.5 16.5,79.5 31.5,64.5 47.5,79.5 95.5,32.5 80.5,15.5 95.5,0.5 127.5,32.5 48.5,111.5 31.5,96.5 -0.5,128.5 16.5,143.5 31.5,127.5 63.5,160.5 80.5,143.5 63.5,128.5 159.5,32.5 144.5,15.5 159.5,0.5 175.5,16.5 192,0 208,16 224,0 256,32 240,48 224,32 207.501,48.501 223.5,64.5 207.5,80.5 176.5,47.5 144.5,80.5 159.5,96.5 175.5,80.5 191.5,96.5 159.5,128.5 127.5,96.5 95.5,127.5 111.5,143.5 127.5,127.5 175.5,176.5 159.5,192.5 127.5,160.5 111.5,176.5 95.5,160.5 63.5,192.5 31.5,160.5 16.5,175.5 31.999,191.483 0,224 16,240 32,225 64,256 80,240 64,224 79.667,208.333 95.5,192.5 111.5,207.5 95.5,224.5 111.5,239.5 127.5,256.5 143.5,240.5 127.5,224.5 143.5,208.5 175.5,240.5 191.5,224.5 175.5,208.5 207.5,176.5 224,160 208,144 191.998,160.998 175.5,144.5 207.5,112.5 240,80 256,96 223.5,128.5 256,160 239.5,176.5 256,192 240,208 224,192 207.5,208.5 223.5,224.5 207.5,240.5 223.5,256.5 240,240 259,259' stroke-dasharray='169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256 169.06820068359374 50.500891113281256'
                            >
                                <animate
                                    attributeName='stroke-dashoffset'
                                    keyTimes='0;1'
                                    values='0;219.569091796875'
                                    repeatCount='indefinite'
                                    dur='10s'
                                ></animate>
                            </polyline>
                        </g>
                        <use href={`#${patternId}`} x='0' y='0'></use>
                        <use href={`#${patternId}`} x='-256' y='0'></use>
                        <use href={`#${patternId}`} x='256' y='0'></use>
                        <use href={`#${patternId}`} x='0' y='256'></use>
                    </pattern>
                </defs>

                <rect
                    x='0'
                    y='0'
                    width='100%'
                    height='100%'
                    fill={`url(#${patternId})`}
                    mask={`url(#${maskId})`}
                />
            </svg>
        </ Wrapper>
    );
};

export default Background;
