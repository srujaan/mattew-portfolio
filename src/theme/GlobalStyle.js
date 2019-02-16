import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    --bg: #f8f8f2;
    --text: #282a36;   
    --primary: #ff5555;  
    --navBg: #282a36;
    --navText: #f8f8f2;
    --semiDark: #44475a;
    --codeBg: transparent;
    --shadow: transparent;

    &.dark {
      --bg: #282a36;
      --text: #f8f8f2;
      --primary: #50fa7b;
      --shadow: #000000;
      --codeBg: var(--semiDark)
    }

    background-color: var(--bg);
    color: var(--text);

    font-family: industry, sans-serif;
    font-weight: 400;
    font-style: normal;

    font-size: 20px;
    font-variant-ligatures: common-ligatures;
    font-variant-numeric: slashed-zero;

    text-rendering: optimizeLegibility;
    font-feature-settings: "liga" on, "salt" on, "ss01" on, "ss02" on;
    font-kerning: normal;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    font-family: factoria, serif;
    font-weight: 900;
    font-style: normal;
    font-feature-settings: "liga" on, "salt" on, "ss01" on, "ss02" on;
    color: var(--primary);
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }
`

export default GlobalStyle
