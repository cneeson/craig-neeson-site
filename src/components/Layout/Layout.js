import React from 'react'
import Link from '../Link'
import { PageWrapper, Nav, Title, TitleLink, LinkContainer, Footer } from './Styled'
import "./layout.css"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    const brand = (
      <Title>
        <TitleLink to={`/`}>{title} </TitleLink>
      </Title>
    )

    const links = (
      <LinkContainer>
        <Link to="/#about" fancyHover>About</Link>
        <Link to="/#contact" fancyHover>Contact</Link>
        <Link to="/blogs" fancyHover>Blog</Link>
        <Link href="/Craig-Neeson-CV.pdf" fancyHover>CV</Link>
      </LinkContainer>
    )

    const footer = (
      <Footer>
        © {new Date().getFullYear()} Craig Neeson
      </Footer>
    )

    return (
      <div className="body-wrapper">
        <Nav>
          <div>
            {brand}
            {links}
          </div>
        </Nav>
        <PageWrapper>
          {children}
          {footer}
        </PageWrapper>
      </div>
    )
  }
}

export default Layout
