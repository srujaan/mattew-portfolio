import React from 'react'
import styled, { withTheme, createGlobalStyle } from 'styled-components'

import { Composition } from 'atomic-layout'
import {
  mediaBreakpointUpSm,
  md
} from 'styled-bootstrap-responsive-breakpoints'

import useWindowWidth from '../hooks/useWindowWidth'

import Navigation from './Navigation'

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/jhn5itl.css");

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'hack';
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    color: ${props => props.theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};

    &:hover {
      color: ${props => props.theme.colors.background};
      background: ${props => props.theme.colors.primary};
    }
  }
`

const template = `
  main nav
  footer footer
`

const templateMobile = `
  nav
  main
  footer
`

const ContentContainer = styled.div`
  ${mediaBreakpointUpSm`
    padding: 10vw;
  `}
`

const ThemeToggle = styled.span`
  position: absolute;
  top: 10;
  left: 10;
  z-index: 99;
`

const Layout = ({ children, theme }) => {
  const width = useWindowWidth()
  return (
    <Composition template={templateMobile} templateMd={template}>
      {({ Main, Nav, Footer }) => (
        <React.Fragment>
          <GlobalStyle />
          <ThemeToggle onClick={() => theme.toggleTheme()}>
            Toggle Theme
          </ThemeToggle>
          <Main>
            <ContentContainer>{children}</ContentContainer>
          </Main>
          <Nav>
            <Navigation isMobile={width <= md} />
          </Nav>
          <Footer>Width: {width}</Footer>
        </React.Fragment>
      )}
    </Composition>
  )
}

export default withTheme(Layout)
