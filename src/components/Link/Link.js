import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby'

const Link = styled(GatsbyLink)`
    color: #ff007d;

    ${(props) => props.fancyHover && `
        transition: all 0.3s;
        text-decoration: none;
        box-shadow: none;

        &:hover {
            transform: scale(1.3, 1.3);
        }

        &:active {
            transform: scale(1, 1);
        }
    `}
`;

export default Link;