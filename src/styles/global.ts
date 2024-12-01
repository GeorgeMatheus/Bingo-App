import { createGlobalStyle } from "styled-components";
import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import RalewayRegular from "../assets/fonts/Raleway-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'RalewayRegular';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${RalewayRegular}') format('truetype')
  }

  @font-face {
    font-family: 'MontserratRegular';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${MontserratRegular}') format('truetype')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body, input, textarea, button {
    font-family: 'MontserratRegular', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.black}
  }

  h1, h2, h3 {
    font-family: 'MontserratRegular', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
