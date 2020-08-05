import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    font-family: Lato, "Lucida Grande", "Lucida Sans Unicode", Tahoma, sans-serif;
    line-height: 1.5;
    font-size: 14px;
  }
  body{
      margin: 0;
      padding: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  h1 {
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }
  ul, p {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  .ReactModal__Content {
    margin: auto;
    width: 60%;
    @media (max-width: 576px) {
      width: 100%;
      right: 0 !important;
      left: 0 !important;
    }
  }
`;
