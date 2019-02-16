import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://use.typekit.net/jhn5itl.css');

  body {
    --bg: #f8f8f2;
    --text: #282a36;   
    --primary: #ff5555;  
    --shadow: transparent;
    --navBg: #282a36;
    --navText: #f8f8f2;
    --semiDark: #44475a;
    --codeBg: transparent;

    &.dark {
      --bg: #282a36;
      --text: #f8f8f2;
      --primary: #50fa7b;
      --shadow: #000000;
      --codeBg: var(--semiDark)
    }

    background-color: var(--bg);
    color: var(--text);

    font-family: 'fira-sans-2', sans-serif;
    font-size: 20px;
    font-variant-ligatures: common-ligatures;
    font-variant-numeric: slashed-zero;

    text-rendering: optimizeLegibility;
    font-feature-settings: "kern", "ss01";
    font-kerning: normal;

    line-height: 1.1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'fira-sans-compressed', sans-serif;
    color: var(--primary);
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }
`

export default GlobalStyle
