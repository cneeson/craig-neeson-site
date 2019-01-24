import styled from 'styled-components';
import Link from '../Link'
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
    
    border-bottom: 5px solid #ff007d;

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
    line-height: 1.5;
    margin: 0;
`;

export const TitleLink = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    transition: all .2s;

    &:hover{
        color: #12167d;
    }
`;

export const LinkContainer = styled.div`
    display: flex;

    @media (max-width: 650px) {
        margin: 1rem;
        display: block;
    }

    ${Link}{
        margin: 1rem;
    }
`;