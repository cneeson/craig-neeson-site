import React from 'react'
import { rhythm, scale } from '../../utils/typography'
import { Wrapper } from './Styled';

const BlogPost = (props) => {
    const { post } = props;
    console.log(props);
    return (
        <Wrapper>
            <h1>{post.frontmatter.title}</h1>
            <p
                style={{
                    ...scale(-1 / 5),
                    display: `block`,
                    marginBottom: rhythm(1),
                    marginTop: rhythm(-1),
                }}
            >
                {post.frontmatter.date}
            </p>
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