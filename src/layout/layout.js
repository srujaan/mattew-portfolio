import React from 'react'
import styled, { withTheme } from 'styled-components'

import { Composition } from 'atomic-layout'

import GlobalStyle from '../theme/GlobalStyle'
import Navigation from './Navigation'

import SocialMediaLinks from '../components/socialMediaLinks'

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
  padding: 2vw;
`

const ThemeToggle = styled.span`
  position: absolute;
  top: 10;
  left: 10;
  z-index: 99;
`
const Foot = styled.div`
  padding: 1em;
  font-size: 0.75em;
  text-align: center;
`

const Layout = ({ children, theme }) => {
  return (
    <Composition template={templateMobile} templateMd={template}>
      {({ Main, Nav, Footer }) => (
        <React.Fragment>
          <GlobalStyle />
          <ThemeToggle onClick={() => theme.toggleTheme()}>
            {theme.colors.name === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </ThemeToggle>
          <Main>
            <ContentContainer>{children}</ContentContainer>
          </Main>
          <Nav>
            <Navigation />
          </Nav>
          <Footer>
            <Foot>
              <SocialMediaLinks />
              Built with <a href='http://www.gatsbyjs.com'>Gatsby</a> and{' '}
              <a href='http://www.prismic.com'>Prismic</a>.
              <p>&copy; Copyright 2019, Matthew Secrist</p>
              <a href='https://github.com/matthewsecrist/v3'>Github</a>
            </Foot>
          </Footer>
        </React.Fragment>
      )}
    </Composition>
  )
}

export default withTheme(Layout)
