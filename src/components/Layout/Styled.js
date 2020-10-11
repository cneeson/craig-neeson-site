import styled from 'styled-components';
import { InternalLink, ExternalLink } from '../Link/Styled'
import { rhythm } from '../../utils/typography'

export const PageWrapper = styled.div`
    padding-top: 2rem;
`;

export const BodyWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(24)};

    @media (max-width: 650px) {
        padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
    }
`;

export const Nav = styled.nav`
    background: white;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 1;

    div{
        margin-left: auto;
        margin-right: auto;
        max-width: ${rhythm(24)};

        display: flex;
        justify-content: space-between;
        
        @media (max-width: 650px) {
            text-align: center;
            display: block;
        }
    }
`;

export const Title = styled.h1`
    line-height: 2;
    margin: 0;
    transition: all .2s;

    &:hover {
        background: radial-gradient(#0072f3, #604acc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transform: scale(1.1, 1.1);
    }

    &:active {
        transform: scale(1, 1);
    }
`;

export const TitleLink = styled(InternalLink)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;

    
`;

export const LinkContainer = styled.div`
    display: flex;

    @media (max-width: 650px) {
        margin: 1rem;
        display: block;
    }

    ${InternalLink}, ${ExternalLink} {
        margin: 1rem;
    }
`;

export const Footer = styled.div`
    margin-top: 5rem;
`;