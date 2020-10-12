import styled from 'styled-components';

export const P = styled.p`
    ${({ color, size }) => `
        color: ${color};
        font-size: ${size === 'small' ? '.75rem' : '.9rem'};
    `}
`;