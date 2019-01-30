import React from 'react';
import { ExternalLink, InternalLink } from './Styled'

const Link = (props) => {
    const LinkType = props.href ? ExternalLink : InternalLink;
    return <LinkType {...props}>{props.children}</LinkType>;
}

export default Link;