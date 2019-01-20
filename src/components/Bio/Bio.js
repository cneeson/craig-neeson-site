import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BioSection from '../BioSection';
import { ProfileImage, IntroSection, Tagline } from './Styled';

function Bio() {

    const introSection = (data) => (
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
    )

    const codeSection = (data) => (
        <BioSection
            title="Code"
            // visualSource={data.codeImage.childImageSharp.fixed}
            content="My primary passion is front-end, I have extensive experience building rich, data-centric user experiences for the web using a variety of different tools and setups. I am up-to-date with the latest ES6 standard of JavaScript and am obsessive in my efforts to promote and champion the latest features of the language. My two backend stacks are ASP.NET MVC and Node, I have experience targeting both monolithic and microservice architectures with a focus on optimal server-side performance. I have also designed Continuous Integration and Delivery pipelines for a variety of environments."
        />
    )

    const projectsSection = (data) => (
        <BioSection
            title="Projects"
            // visualSource={data.avatar.childImageSharp.fixed}
            content="I have been fortunate enough to be involved in the creation and maintenance of web-apps for many industries across the country including manufacture, healthcare and e-commerce. Most projects I have been part of are fully bespoke, tailored to the specific business-needs of the customer in question. I also have experience developing highly scalable products for the US insurance consumer markets."
        />
    )

    const contactSection = (
        <div>Find Me section</div>
    )

    return (
        <StaticQuery
            query={bioQuery}
            render={data => (
                <Fragment>
                    {introSection(data)}
                    {codeSection(data)}
                    {projectsSection(data)}
                    {contactSection}
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
                    social {
                            twitter
                    }
                }
            }
    }
`

export default Bio
