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
    --primary: #0f4880;  
    --navBg: #282a36;
    --navText: #f8f8f2;
    --semiDark: #44475a;
    --codeBg: transparent;
    --shadow: transparent;

    &.dark {
      --bg: #282a36;
      --text: #f8f8f2;
      --primary: #ff5555;
      --shadow: #000000;
      --codeBg: var(--semiDark)
    }

    background-color: var(--bg);
    color: var(--text);

    transition: color 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;

    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    font-style: normal;

    font-size: 20px;

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
    transition: color 0.3s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }
`

export default GlobalStyle
