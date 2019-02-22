import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  body {
    --bg: hsl(60, 30%, 96%);
    --text: hsl(231, 15%, 18%);   
    --primary: hsl(0, 100%, 63%);  
    --navBg: hsl(231, 15%, 18%);
    --navText: hsl(60, 30%, 96%);
    --semiDark: hsl(232, 14%, 31%);
    --codeBg: transparent;
    --shadow: hsla(231, 15%, 8%, .8);
    --white: hsl(60, 30%, 96%);

    &.dark {
      --bg: hsl(231, 15%, 18%);
      --text: hsl(60, 30%, 96%);
      --primary: hsl(135, 94%, 65%);
      --navBg: hsl(231, 15%, 15%);
      --shadow: transparent
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
    font-weight: bold;
    text-decoration: none;
    color: var(--primary);
  }
`

export default GlobalStyle
