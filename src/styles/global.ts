import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Roboto, sans-serif;
  }

  #root, html, body {
    width: 100vw;
    height: 100vh;

    max-width: 100vw;
    max-height: 100vh;

    color: var(--white);
    background: var(--background);
  }

  :root {
    --background: #0E0E10;
    --purple: #772CE8;
    --white: #FFF;
    --black: #000;
  }
`;