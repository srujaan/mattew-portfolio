import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:900|Fira+Sans');

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Fira Sans', sans-serif;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Fira Sans Condensed', sans-serif;
    color: ${props => props.theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }

  .text-block span {
    padding: 2px 5px;
    font-size: 14px;
    font-family: 'source-code-pro', monospace;
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    border-radius: 5px;
  }

  .code-block {
    width: 100%;
    background: ${props =>
    props.theme.colors.name === 'dark'
      ? props.theme.colors.text
      : 'transparent'};
    box-shadow: ${props =>
    props.theme.colors.name === 'dark' ? 'inset 0 0 10px #000000;' : 'none'};
  }
`

export default GlobalStyle
