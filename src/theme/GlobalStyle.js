import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  body {
    --bg: #f8f8f2;
    --text: #282a36;   
    --primary: #ff4444;  
    --navBg: #282a36;
    --navText: #f8f8f2;
    --semiDark: #44475a;
    --codeBg: transparent;
    --shadow: transparent;
    --white: #f8f8f2;

    &.dark {
      --bg: #282a36;
      --text: #f8f8f2;
      --primary: #50fa7b;
      --shadow: #000000;
      --codeBg: var(--semiDark)
    }

    background-color: var(--bg);
    transition: background-color .3s ease-in-out;
    color: var(--text);

    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    font-style: normal;

    font-size: 1.2rem;

    text-rendering: optimizeLegibility;
    font-kerning: normal;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700;
    font-style: normal;
    color: var(--primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  h1 {
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }
`

export default GlobalStyle
