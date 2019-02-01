import styled from 'styled-components'
import { rhythm } from '../../utils/typography'
import Image from 'gatsby-image'

export const Section = styled.section`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 7rem;
`;

export const Header = styled.h2`
    text-align: center;
    margin-top: 0;
`;

export const Content = styled.div`
    text-align: center;
`;

export const Visual = styled.img`
    margin-right: ${rhythm(1 / 2)};
    margin-bottom: 1rem;
    min-width: 100px;
    min-height: 100px;
    max-width: 300px;
    max-width: 300px;
`;

export const VisualWrapper = styled.div`
    text-align: center;
`;
