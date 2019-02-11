import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle, withTheme } from 'styled-components'

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

const LayoutContainer = styled.div`
  position: fixed;
  width: 100vw;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 200px;
`

const ContentContainer = styled.div`
  padding: 10vw;
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

const ThemeToggle = styled.span`
  position: absolute;
  top: 10;
  left: 10;
`

const Layout = ({ children, theme }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />

      <ThemeToggle onClick={theme.toggleTheme}>Toggle Theme</ThemeToggle>
      <ContentContainer>{children}</ContentContainer>
      <Nav>
        <h2>
          <Link to='/'>home</Link>
        </h2>

        <h2>
          <Link to='/blog'>blog</Link>
        </h2>

        <h2>
          <Link to='#'>portfolio</Link>
        </h2>

        <h2>
          <a href='#'>contact</a>
        </h2>
      </Nav>
    </LayoutContainer>
  )
}

export default withTheme(Layout)
