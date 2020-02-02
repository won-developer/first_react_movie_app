import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // css reset
import "./font.css";

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #EFF3F7;
        font-family: 'Merriweather', serif;
    }
`;

export default GlobalStyle;