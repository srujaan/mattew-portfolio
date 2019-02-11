import React from 'react'
import styled, { withTheme } from 'styled-components'
import GlobalStyle from '../theme/GlobalStyle'

import { Composition } from 'atomic-layout'
import {
  mediaBreakpointUpSm,
  md
} from 'styled-bootstrap-responsive-breakpoints'

import useWindowWidth from '../hooks/useWindowWidth'

import Navigation from './Navigation'

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
          <ThemeToggle onClick={theme.toggleTheme}>Toggle Theme</ThemeToggle>
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
