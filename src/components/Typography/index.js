import styled, { css } from 'styled-components';

const commonCss = css`
    ${({ mb, mt, ml, mr }) => `
        margin-top: ${mt};
        margin-bottom: ${mb};
        margin-left: ${ml};
        margin-right: ${mr};
    `}
`;

export const H4 = styled.h4`
    ${commonCss}
`;

export const H5 = styled.h5`
    ${commonCss}
`;