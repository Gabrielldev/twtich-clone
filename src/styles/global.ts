import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Roboto, sans-serif;
  }

  a { text-decoration: none; }

  input {
    outline: 0;
    border: 0;
  }

  button {
    border: 0;
    outline: 0;
    background: none;
  }

  #root, html, body {
    width: 100vw;
    height: 100vh;

    max-width: 100vw;
    max-height: 100vh;

    /* overflow-x: hidden; */
    /* overflow-y: auto; */

    color: var(--white);
    background: var(--background);
  }

  :root {
    --background: #0E0E10;
    --header: #151515;
    --purple: #772CE8;
    --white: #FFF;
    --black: #000;
    --violet: violet;
  }
`;