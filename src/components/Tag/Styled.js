import styled from 'styled-components'

export const StyledTag = styled.div`
    background: ${({ background }) => background || 'lightgray'};
    color: ${({ color }) => color || 'grey'};
    display: inline;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
`;
