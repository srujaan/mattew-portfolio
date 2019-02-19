import React from 'react'
import styled from 'styled-components'

import useTheme from '../hooks/useTheme'

import GlobalStyle from '../theme/GlobalStyle'
import Navigation from './Navigation'
import { md } from 'styled-bootstrap-responsive-breakpoints'

import SocialMediaLinks from '../components/socialMediaLinks'

const ContentContainer = styled.div`
  padding: 2vw;
  padding-right: 250px;

  @media screen and (max-width: ${md}px) {
    padding-right: 0;
  }
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

const Layout = ({ children }) => {
  const [toggleTheme] = useTheme()

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeToggle onClick={() => toggleTheme()}>Change Theme</ThemeToggle>

      <ContentContainer>{children}</ContentContainer>

      <Navigation />

      <Foot>
        <SocialMediaLinks />
        Built with <a href='http://www.gatsbyjs.com'>Gatsby</a> and{' '}
        <a href='http://www.prismic.com'>Prismic</a>.
        <p>&copy; Copyright 2019, Matthew Secrist</p>
        <a href='https://github.com/matthewsecrist/v3'>Github</a>
      </Foot>
    </React.Fragment>
  )
}

export default Layout
