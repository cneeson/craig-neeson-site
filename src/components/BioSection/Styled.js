import styled from 'styled-components'
import { rhythm } from '../../utils/typography'
import Image from 'gatsby-image'

export const Section = styled.section`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    min-height: 75vh;
`;

export const Header = styled.h2`
    text-align: center;
`;

export const Content = styled.div`
`;

export const Visual = styled(Image)`
    margin-right: ${rhythm(1 / 2)};
    margin-bottom: 0;
    min-width: 100px;
    min-height: 100px;
    border-radius: 100%;
    borderRadius: 50%;
    margin: 1rem;
`;

export const VisualWrapper = styled.div`
    text-align: center;
`;
