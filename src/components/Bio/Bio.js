import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import projectsSvgUrl from '../../../content/assets/projects-image.svg';
import codeSvgUrl from '../../../content/assets/code-image.svg';
import BioSection from '../BioSection';
import ContactSection from '../ContactSection';
import InvisibleAnchor from '../InvisibleAnchor';
import { ProfileImage, IntroSection, Tagline } from './Styled';

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => (
                <Fragment>
                    <InvisibleAnchor id="about">About</InvisibleAnchor>
                    <IntroSection>
                        <div>
                            <ProfileImage
                                fixed={data.avatar.childImageSharp.fixed}
                                alt={data.site.siteMetadata.author}
                            />
                            <Tagline>
                                Hi, I'm <strong>{data.site.siteMetadata.author}</strong>.
                            <br />
                                I am a software engineer based in Belfast, Northern Ireland.
                            </Tagline>
                        </div>
                    </IntroSection>
                    <BioSection
                        title="Code"
                        visualSource={codeSvgUrl}
                        content="My primary passion is working in the front-end. I have extensive experience building rich, data-centric user experiences for the web using a variety of stacks. The technologies that I am most familiar with nowadays are Javascript and React alongside CSS in JS packages such as styled-components. Although my focus at this point in my career is to do great front-end work, I like to keep my field knowledge diverse. My interests lie in every aspect of the way people can build things using technology. You can find my full details of my work history in my CV."
                    />
                    <BioSection
                        title="Projects"
                        visualSource={projectsSvgUrl}
                        content="I have been fortunate enough to be involved in the creation and maintenance of web-apps for many industries across Northern Ireland including manufacture, healthcare and e-commerce. Most of these projects have been fully bespoke, tailored to the specific business-needs of the customer in question, big or small. I have worked to develop highly scalable microservices for the US insurance consumer market, capable of processing millions of requests under an acceptable timeframe. My latest  role is as a UI engineer, building modern web systems to query and visualise one of the largest datasets in the world. "
                    />
                    <ContactSection />
                </Fragment>
            )}
        />
    )
}

const bioQuery = graphql`
  query BioQuery {
        avatar: file(absolutePath: {regex: "/profile-pic.jpg/" }) {
                childImageSharp {
                    fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
            }
        }
    }
`

export default Bio
