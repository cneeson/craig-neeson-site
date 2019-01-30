import React from 'react';
import PropTypes from 'prop-types'
import { ExternalLink, InternalLink } from './Styled'

const Link = (props) => {
    const LinkType = props.href ? ExternalLink : InternalLink;
    return <LinkType {...props}>{props.children}</LinkType>;
}

Link.propTypes = {
    fancyHover: PropTypes.bool,
}

export default Link;