import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top: 3rem;

    a {
        color: #ff007d;
        transition: all 0.3s;
        text-decoration: none;
        box-shadow: none;
    }

    @media (max-width: 650px) {
        margin-top: 2rem;
    }
`;

export const SubHeading = styled.div`

    span {
        margin-right: 0.5rem;
    }
`;