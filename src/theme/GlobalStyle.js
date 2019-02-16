import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/jhn5itl.css");

  body {
    --bg: #f8f8f2;
    --text: #282a36;   
    --primary: #ff5555;  
    --shadow: transparent;
    --navBg: #282a36;
    --navText: #f8f8f2;
    --semiDark: #44475a;
    --codeBg: #f8f8f2; 

    --header-font: fira-sans-compressed;
    --body-font: fira-sans-2;
    --code-font: source-code-pro;

    &.dark {
      --bg: #282a36;
      --text: #f8f8f2;
      --primary: #50fa7b;
      --shadow: #000000;
    }

    background-color: var(--bg);
    color: var(--text);

    font-family: var(--body-font), sans-serif;
    font-size: 1.25em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--header-font), sans-serif;
    color: var(--primary);
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }
`

export default GlobalStyle
