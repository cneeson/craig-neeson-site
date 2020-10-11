import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Tagline } from '../components/Bio/Styled'
import Link from '../components/Link'

class ExperiencePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          lang="en"
          title="Home"
          keywords={[`craig`, `neeson`, `craig neeson`, `CV`, `northern ireland`, `NI`, `belfast`, `blog`, `gatsby`, `javascript`, `react`]}
        />

        <p>
          For a downloadable copy of my experience, check out my <Link href='/Craig-Neeson-CV.pdf' target='_blank' fancyHover>CV.</Link>
        </p>

        <h2>Workplaces</h2>

        

        <h2>Education</h2>

        <h2>Skills</h2>
      </Layout>
    )
  }
}

export default ExperiencePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
