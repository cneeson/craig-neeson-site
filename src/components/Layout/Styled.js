import styled from 'styled-components';
import { InternalLink, ExternalLink } from '../Link/Styled'
import { rhythm } from '../../utils/typography'

export const PageWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(24)};
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

export const Nav = styled.nav`
    background: white;
    padding: 1rem;
    box-shadow: 0 10px 23px rgba(0,0,0,0.25), 0 3px 7px rgba(0,0,0,0.22);

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
        // background: linear-gradient(to right, #c1006f 0%, #0072f3 50%, #604acc 100%);
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