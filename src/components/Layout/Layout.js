import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
        <Link to="/#about">About</Link>
        <Link to="/#contact">Contact</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/">CV</Link>
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
