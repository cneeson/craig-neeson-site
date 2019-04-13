import React from 'react'
import { rhythm, scale } from '../../utils/typography'
import { Wrapper, SubHeading } from './Styled';
import Tag from '../Tag';

const BlogPost = (props) => {
    const { post } = props;
    return (
        <Wrapper>
            <h1>{post.frontmatter.title}</h1>
            <SubHeading
                style={{
                    ...scale(-1 / 5),
                    marginBottom: rhythm(1),
                    marginTop: rhythm(-.7),
                }}>
                <span>{post.frontmatter.date}</span><span style={{ color: 'grey' }}>{post.frontmatter.timeToRead} read</span> {post.frontmatter.isNote && <Tag color="rgba(96,74,204,0.6)" background="rgba(96,74,204,0.12)">Personal Note</Tag>}
            </SubHeading>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
                style={{
                    marginBottom: rhythm(1),
                }}
            />
        </Wrapper>
    )

};

export default BlogPost