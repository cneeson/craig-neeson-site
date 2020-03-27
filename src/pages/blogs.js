import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment';

import Layout from '../components/Layout'
import SEO from '../components/seo'
import BlogList from '../components/BlogList';
import externalBlogs from '../../content/blog/externalBlogs';

const byDate = (a,b) => new moment(b.node.frontmatter.date).format('YYYYMMDD') - new moment(a.node.frontmatter.date).format('YYYYMMDD');

const formatDates = ({ node: { frontmatter, fields, excerpt } }) => {
  const newFrontmatter = {
    ...frontmatter,
    date: moment(frontmatter.date).format('MMMM DD, YYYY')
  };

  return {
    node: {
      frontmatter: newFrontmatter,
      fields,
      excerpt
    }
  };
};

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const blogs = data.allMarkdownRemark ? data.allMarkdownRemark.edges : []

    const sortedBlogs = [...blogs, ...externalBlogs]
      .sort(byDate)
      .map(formatDates);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          lang="en"
          title="Craig Neeson Blog"
          keywords={[`craig`, `neeson`, `craig neeson`, `developer`, `northern ireland`, `NI`, `belfast`, `blog`, `gatsby`, `javascript`, `react`]}
        />
        <BlogList blogs={sortedBlogs} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { isPublished: { eq: true } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            timeToRead
            isNote
            isPublished
          }
        }
      }
    }
  }
`
