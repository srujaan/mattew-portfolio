import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/jhn5itl.css");

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    font-family: 'hack';
    font-weight: 400;
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

const LayoutContainer = styled.div`
  position: fixed;
  width: 100vw;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 200px;
`

const Nav = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 0;
  height: 100vh;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LayoutContainer>
      <GlobalStyle />
      {children}
      <Nav>
        <h1>
          <a href='#'>design</a>
        </h1>

        <h1>
          <a href='#'>develop</a>
        </h1>

        <h1>
          <a href='#'>about</a>
        </h1>

        <h1>
          <a href='#'>contact</a>
        </h1>
      </Nav>
    </LayoutContainer>
  </ThemeProvider>
)

export default Layout
