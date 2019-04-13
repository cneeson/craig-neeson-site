import React from 'react'
import { StyledTag } from './Styled';

function Tag({ color, background, text, children }) {
    return (
        <StyledTag background={background} color={color}>{children || text}</StyledTag>
    )
}

export default Tag
