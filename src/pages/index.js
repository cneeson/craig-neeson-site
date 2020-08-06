import React from 'react'
import { graphql } from 'gatsby'
import Orbs from '../components/Orbs';

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          lang="en"
          title="Home"
          keywords={[`craig`, `neeson`, `craig neeson`, `developer`, `northern ireland`, `NI`, `belfast`, `blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
