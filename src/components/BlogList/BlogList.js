import React, { Fragment } from 'react'
import Link from '../Link'
import { rhythm } from '../../utils/typography'
import { Wrapper, BlogCard, Title, PreviewText } from './Styled';

const BlogList = (props) => {
  return (
    <Wrapper>
      {
        props.blogs.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <BlogCard key={node.fields.slug} to={node.fields.slug}>
              <Title>
                {title}
              </Title>
              <small>{node.frontmatter.date}</small> - <small>{node.frontmatter.timeToRead}</small>
              <PreviewText dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </BlogCard>
          )
        })
      }
    </Wrapper>
  )
};

export default BlogList