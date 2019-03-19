import styled from 'styled-components'
import Image from 'gatsby-image'
import { rhythm } from '../../utils/typography'

export const ProfileImage = styled(Image)`
    margin-right: ${rhythm(1 / 2)};
    margin-bottom: 0;
    min-width: 110px;
    min-height: 110px;
    border-radius: 100%;
    borderRadius: 50%;
    margin: 1.5rem;
`;

export const IntroSection = styled.section`
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 10rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 60vw;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 650px) {
        max-width: 90vw;
        margin-top: 8rem;
    }
`
export const Tagline = styled.p`
    font-size: 1.5rem;
    line-height: 1.6;

    @media (max-width: 650px) {
        font-size: 1.2rem;
    }
`;