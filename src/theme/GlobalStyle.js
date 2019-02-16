import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono|Fira+Sans|Fira+Sans+Extra+Condensed:900');

  body {
    --bg: #f8f8f2;
    --text: #282a36;   
    --primary: #ff5555;  
    --shadow: transparent;
    --navBg: #282a36;
    --navText: #f8f8f2;
    --semiDark: #44475a;
    --codeBg: #f8f8f2; 

    &.dark {
      --bg: #282a36;
      --text: #f8f8f2;
      --primary: #50fa7b;
      --shadow: #000000;
    }

    background-color: var(--bg);
    color: var(--text);

    font-family: 'Fira Sans', sans-serif;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Fira Mono', sans-serif;
    color: var(--primary);
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }
`

export default GlobalStyle
