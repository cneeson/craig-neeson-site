import React from 'react'
import Tag from '../Tag';
import { Wrapper, BlogCard, Title, PreviewText, TagContainer } from './Styled';

const BlogList = (props) => {
  return (
    <Wrapper>
      {
        props.blogs.length > 0 ? props.blogs.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <BlogCard key={node.fields.slug} to={node.fields.slug}>
              <Title>
                {title}
              </Title>
              <small>{node.frontmatter.isNote}</small><small>{node.frontmatter.date}</small> - <small>{node.frontmatter.timeToRead} read</small>
              {node.frontmatter.isNote && (
                <TagContainer>
                  <Tag color="rgba(96,74,204,0.6)" background="rgba(96,74,204,0.12)">Personal Note</Tag>
                </TagContainer>
              )}
              <PreviewText dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </BlogCard>
          )
        }) : <h2>No blogs</h2>
      }
    </Wrapper>
  )
};

export default BlogList