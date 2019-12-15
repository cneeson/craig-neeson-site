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
                                I am a UI Engineer based in Belfast, Northern Ireland.
                            </Tagline>
                        </div>
                    </IntroSection>
                    <BioSection
                        title="Code"
                        visualSource={codeSvgUrl}
                        content="I am a software engineer with a passion for UI. I am interested in building beautiful, data-centric user experiences for web and mobile. The technologies that I am most familar with are JavaScript, TypeScript and progressive CSS-in-JS frameworks such as styled-components and emotion. I have a deep interest in building highly scalable front-ends, employing the latest tools and processes to build the best possible product. I enjoy delivering UIs just as much as I enjoy thinking through foundational concepts for front-end teams to thrive. These concepts include an interest in design systems, continuous delivery, staying on top of the latest tech and writing robust documentation."
                    />
                    <BioSection
                        title="Projects"
                        visualSource={projectsSvgUrl}
                        content="I have been fortunate enough to be involved in the creation and maintenance of web-applications for many industries across Northern Ireland including manufacture, healthcare and e-commerce. Most of these projects have been fully bespoke, tailored to the specific business-needs of the customer in question. I also have worked to develop highly scalable microservices for the US insurance consumer market, capable of processing millions of requests in an acceptable timeframe. Other products include building dashboards to query and visualise one of the largest datasets in the world, and most recently to create a next generation recruitment platform for healthcare professionals across the UK."
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
