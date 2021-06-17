import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing:border-box;
    box-sizing: border-box;
  }

  strong a, p a { 
    padding: 0 3px;
    text-decoration: none;
    color: white !important; 
    background-color: black;
    white-space: nowrap;
  }

  p a:visited { color: inherit; }

  p a:hover { 
    color: white; 
    background-color: black;
  } 

  p a:active { color: inherit; } 



  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin: 0;
  }

  h1 {
    font-size: 24px;
    line-height: 40px;
  }

  h2, h3, h4, h5, h6 {
      font-size: 18px;
      line-height: 20px;
  }

  hr {
    margin: 50px 0;
    border: 1px solid #ececec;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    line-height: 1.8;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
