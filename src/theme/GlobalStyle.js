import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono|Fira+Sans|Fira+Sans+Extra+Condensed:900');

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Fira Sans', sans-serif;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Fira Mono', sans-serif;
    color: ${props => props.theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }



  
`

export default GlobalStyle
