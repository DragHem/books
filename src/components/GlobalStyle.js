import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body {
    overflow-x: hidden;
    background-color: #ccc;
  }

  a {
    text-decoration: none;
    color: black;
  }

  li {
    list-style-type: none;
  }

`;
export default GlobalStyle;
