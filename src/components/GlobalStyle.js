import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    a {
        all: unset;
        cursor: pointer;
    }
    body {
        background-color: #EFF3F7;
        font-family: 'Merriweather', serif;
    }
`;

export default GlobalStyle;
