import { createGlobalStyle } from 'styled-components'

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
  }
`

export default GlobalStyle
