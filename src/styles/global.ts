import { createGlobalStyle } from "styled-components";
import UnboundedRegular from "../assets/fonts/Unbounded-Regular.ttf";
import PublicSansRegular from "../assets/fonts/PublicSans-Regular.ttf";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'UnboundedRegular';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${UnboundedRegular}') format('truetype')
  }

  @font-face {
    font-family: 'PublicSansRegular';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${PublicSansRegular}') format('truetype')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    background: ${(props) => props.theme.purple};
  }

  body, input, textarea, button {
    font-family: 'PublicSansRegular', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.black}
  }

  h1, h2, h3 {
    font-family: 'UnboundedRegular', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
