import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { Section, Header, IconsWrapper } from './Styled';
import InvisibleAnchor from '../InvisibleAnchor';

function ContactSection(props) {
    return (
        <Fragment>
            <InvisibleAnchor id="contact">Contact</InvisibleAnchor>
            <Section id="contact">
                <Header>Get in touch!</Header>
                <IconsWrapper>
                    <a href="https://uk.linkedin.com/in/craig-neeson-b2808278" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} color="#0077b5" size="5x" />
                    </a>
                    <a href="mailto:craigneeson@hotmail.co.uk">
                        <FontAwesomeIcon icon={faEnvelopeOpen} color="#eca624" size="5x" />
                    </a>
                    <a href="https://github.com/cneeson" target="_blank" className="github'">
                        <FontAwesomeIcon icon={faGithub} color="#24292e" size="5x" />
                    </a>
                    <a href="https://open.spotify.com/user/cneeson12?si=P47MYR4jS8usftxVUtsPwQ" target="_blank">
                        <FontAwesomeIcon icon={faSpotify} color="#1DB954" size="5x" />
                    </a>
                </IconsWrapper>
            </Section >
        </Fragment>
    )
}

export default ContactSection
