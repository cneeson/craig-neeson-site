import React from 'react'
import Link from '../Link'
import Orbs from '../Orbs';
import { PageWrapper, Nav, Title, TitleLink, LinkContainer, Footer } from './Styled'
import "./layout.css"

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

const orbs = (
  <Orbs />
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
      <div className="body-wrapper">
        <Nav>
          <div>
            {brand}
            {links}
          </div>
        </Nav>
        {orbs}
        <PageWrapper>
          {children}
          {footer}
        </PageWrapper>
      </div>
    )
  }
}

export default Layout
