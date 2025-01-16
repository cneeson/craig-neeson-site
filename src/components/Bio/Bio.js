import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from '../Link'
import ContactSection from '../ContactSection';
import InvisibleAnchor from '../InvisibleAnchor';
import { ProfileImage, Section, Tagline } from './Styled';
import Background from '../Background';


function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => (
                <Fragment>
                    <InvisibleAnchor id="about">About</InvisibleAnchor>
                    <Section>
                        <Background id='bg-1' />
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
                        <Background id='bg-2' color='rgba(96,74,204,0.2)' />
                        <Tagline>
                            I have been fortunate enough to build products for a range of global industries including healthcare, manufacturing and e-commerce. I have worked in a variety of teams over the past 7 years to deliver awesome user-experiences to customers worldwide.
                        </Tagline>
                    </Section>
                    <Section>
                        <Background id='bg-3' color='#c6edff' />
                        <Tagline>
                            I have experience writing UIs in Javascript/Typescript with React and Vue. I have a special interest in design systems, front-end build tools and web performance. Check out my experience <Link href='/experience' fancyHover>here.</Link>
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
