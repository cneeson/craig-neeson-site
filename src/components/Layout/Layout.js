import React from 'react'
import Link from '../Link'
import { PageWrapper, Nav, Title, TitleLink, LinkContainer } from './Styled'
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
        <Link to="/" fancyHover>CV</Link>
      </LinkContainer>
    )

    const footer = (
      <footer>
        © {new Date().getFullYear()} Craig Neeson
      </footer>
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
