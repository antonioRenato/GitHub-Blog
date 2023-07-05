import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
      outline: 0;
      background-color: ${props => props.theme["base-input"]};
    }

    body, input, textarea, button {
      font: 400 1rem Nunito, sans-serif;
    }
`;