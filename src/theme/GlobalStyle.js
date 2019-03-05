import { createGlobalStyle } from 'styled-components'

const foregroundColor = '#89DDFF'
const backgroundColor = '#01013b'
const selectionColor = 'hsl(240, 97%, 11%)'
const black = '#222222'
const red = '#E80082'
const green = '#b2ffaf'
const yellow = '#ffbb00'
const blue = '#B2CCD6'
const magenta = '#C792EA'
const cyan = '#B2CCD6'
const white = '#DFEEFF'
const lightBlack = 'rgba(255, 255, 255, 0.2)'
const lightWhite = '#FFFFFF'
const darkBlue = 'hsl(240, 90%, 11%)'
const lightBlue = '#B2CCD6'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  body {
    --bg: ${lightWhite};
    --text: ${backgroundColor};   
    --primary: ${yellow};  
    --navBg: ${selectionColor};
    --navText: ${blue};
    --semiDark: ${black};
    --codeBg: transparent;
    --shadow: ${black};
    --white: ${lightWhite};

    &.dark {
      --bg: ${backgroundColor};
      --text: ${white};
      --primary: ${green};
      --shadow: transparent;
      --codeBg: ${darkBlue};
    }

    background-color: var(--bg);

    color: var(--text);

    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 400;
    transition: background-color 0.3s ease-in-out;
    font-size: 1.2rem;

    text-rendering: optimizeLegibility;
    font-kerning: normal;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 700;
    color: var(--primary);
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
