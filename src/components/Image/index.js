import styled, { css } from 'styled-components';


const commonCss = css`
    ${({ mb, mt, ml, mr, width, borderRadius }) => `
        ${mt ? `margin-top: ${mt}` : ''}
        ${mb ? `margin-bottom: ${mb}` : ''}
        ${ml ? `margin-left: ${ml}` : ''}
        ${mr ? `margin-right: ${mr}` : ''}

        ${width ? `width: ${width};` : ''}
        ${borderRadius ? `border-radius: ${borderRadius};` : ''}
    `}
`;

export const Image = styled.img`
    ${commonCss}
`;
