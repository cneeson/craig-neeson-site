import styled from 'styled-components';

export const Flex = styled.div`
    ${({ justifyContent, alignItems, width }) => `
        display: flex;
        ${justifyContent ? `justify-content: ${justifyContent};` : ''}
        ${alignItems ? `align-items: ${alignItems};` : ''}

        ${width ? `width: ${width};` : ''}
    `}
`;
