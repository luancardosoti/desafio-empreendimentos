import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    background: #F5F4F0;
    display:block;
    height: 100%;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body{
    background-color:#fafafa;
    min-height:100vh;
  }
`;