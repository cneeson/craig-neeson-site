import styled from 'styled-components'
import Link from '../Link'

export const Wrapper = styled.div`
    margin-top: 2.5rem;

    @media (max-width: 650px) {
        margin-top: 5rem;
    }
`

export const BlogCard = styled(Link)`
    display: block;
    text-decoration: none;
    color: hsla(0,0%,0%,0.9);
    background-color: white;
    padding: 2rem 2rem;
    border-radius: .5rem;
    box-shadow: 5px 5px rgba(193, 0, 111, 0.22), -5px -5px rgba(96,74,204,0.12);
    margin-bottom: 2rem;
    transition: .1s all;

    &:hover{
        box-shadow: 5px 5px rgba(96, 74, 204, 0.26), -5px -5px rgba(193, 0, 111, 0.28);
        background-color: #f2f2f3;
        transform: scale(1.02, 1.02);
    }

    &:active {
        transform: scale(1, 1);
    }
`;

export const Title = styled.h3`
    color: #ff007d;
    margin: 0;
`;

export const PreviewText = styled.p`
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const TagContainer = styled.div`
    margin: 0.5rem 0;
`;