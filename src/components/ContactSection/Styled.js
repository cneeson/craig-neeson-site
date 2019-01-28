import styled from 'styled-components'

export const Section = styled.section`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10rem;
`;

export const Header = styled.h2`
    text-align: center;
    margin-top: 10rem;
`;

export const IconsWrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;

    a {
        box-shadow: none;
        transition: all 0.3s;
        padding-bottom: .6rem;

        &:hover {
            transform: scale(1.3, 1.3);
        }
    }

    @media (max-width: 650px) {
        flex-direction: column;

        a {
            margin-right: auto;
            margin-left: auto;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }
`;