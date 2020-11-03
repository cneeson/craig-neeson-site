import React, { Fragment } from 'react'
import Link from '../Link'
import { PageWrapper, BodyWrapper, Nav, Title, TitleLink, LinkContainer, Footer } from './Styled'
import "./layout.css"
import Background from '../Background'

const links = (
  <LinkContainer>
    <Link to="/#about" fancyHover>About</Link>
    <Link to="/#contact" fancyHover>Contact</Link>
    <Link to="/blogs" fancyHover>Blog</Link>
    <Link to="/experience" fancyHover>Experience</Link>
  </LinkContainer>
)

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    const brand = (
      <Title>
        <TitleLink to={`/`}>{title} </TitleLink>
      </Title>
    )

    return (
      <Fragment>
        <PageWrapper>
          <Nav>
            <div>
              {brand}
              {links}
            </div>
          </Nav>
          <BodyWrapper>
            {children}
            <Footer>
              © {new Date().getFullYear()} Craig Neeson
          </Footer>
          </BodyWrapper>
        </PageWrapper>
      </Fragment>
    )
  }
}

export default Layout
