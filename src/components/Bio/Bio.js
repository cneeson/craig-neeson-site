import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import projectsSvgUrl from '../../../content/assets/projects-image.svg';
import codeSvgUrl from '../../../content/assets/code-image.svg';
import Link from '../Link'
import BioSection from '../BioSection';
import ContactSection from '../ContactSection';
import InvisibleAnchor from '../InvisibleAnchor';
import { ProfileImage, Section, Tagline } from './Styled';


function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => (
                <Fragment>
                    <InvisibleAnchor id="about">About</InvisibleAnchor>
                    <Section>
                        <ProfileImage
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={data.site.siteMetadata.author}
                        />
                        <Tagline>
                            Hi, I'm <strong>{data.site.siteMetadata.author}</strong>.
                            <br />
                                I am a Front-end Software Engineer based in <Link href='https://www.google.com/maps/place/Belfast/@54.5947991,-6.0667142,11z/data=!3m1!4b1!4m5!3m4!1s0x4860fffdd7d08a3b:0x2e57162cefc7c531!8m2!3d54.597285!4d-5.93012' target='_blank' fancyHover>Belfast.</Link>
                        </Tagline>
                    </Section>
                    <Section>
                        <Tagline>
                            I have been fortunate enough to build UIs for global industries including healthcare, manufacture and e-commerce. I have worked in various diverse teams for the past 5 years to bring awesome user-experiences to life in collaboration with Product Owners, Designers and other Developers.
                        </Tagline>
                    </Section>
                    <Section>
                        <Tagline>
                            I am interested in staying afloat of the latest and greatest in the JavaScript eco-system, but am equally interested in delivering the most stable solution possible. I have experience in React, TypeScript and CSS-in-JS libraries. Check out my experience <Link href='/experience' target='_blank' fancyHover>here.</Link>
                        </Tagline>
                    </Section>
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
