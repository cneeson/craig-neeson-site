import React from 'react'
import Link from '../Link'
import { PageWrapper, BodyWrapper, Nav, Title, TitleLink, LinkContainer, Footer } from './Styled'
import "./layout.css"

const links = (
  <LinkContainer>
    <Link to="/#about" fancyHover>About</Link>
    <Link to="/#contact" fancyHover>Contact</Link>
    <Link to="/blogs" fancyHover>Blog</Link>
    <Link to="/experience" fancyHover>Experience</Link>
  </LinkContainer>
)

const footer = (
  <Footer>
    © {new Date().getFullYear()} Craig Neeson
  </Footer>
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
      <PageWrapper>
        <Nav>
          <div>
            {brand}
            {links}
          </div>
        </Nav>
        <BodyWrapper>
          {children}
          {footer}
        </BodyWrapper>
      </PageWrapper>
    )
  }
}

export default Layout
