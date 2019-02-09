import React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/jhn5itl.css");

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    font-family: 'hack';
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  a {
    margin: 5px;
    padding: 5px;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LayoutContainer>
      <GlobalStyle />
      {children}
      <Nav>
        <h2>
          <Link to='/'>home</Link>
        </h2>

        <h2>
          <Link to='/about'>about</Link>
        </h2>

        <h2>
          <Link to='#'>design</Link>
        </h2>

        <h2>
          <a href='#'>develop</a>
        </h2>

        <h2>
          <a href='#'>contact</a>
        </h2>
      </Nav>
    </LayoutContainer>
  </ThemeProvider>
)

export default Layout
