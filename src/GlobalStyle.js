import { createGlobalStyle } from "styled-components";

const GlobalStyle= createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }
    :root{
        --bg: #E9E5D6;
        --main: #464E2E;
        --sub1: #ACB992;
        --sub2: #ACB992;
        --text: #362706;
        --happy0: red;
        --happy2: blue;
    }
    .light{
        --bg: #FFF8F3;
        --main: #74D6C8;
        --sub1: #FEB0E4;
        --sub2: #FFAFAF;
        --text: #1C6DD0;
        --happy0: red;
        --happy2: blue;
    }
    .cosmic{
        --bg: #1A1A40;
        --main: #EF2F88;
        --sub1: #F9D371;
        --sub2: #F47340;
        --text: #FFF8F3;
    }
    .cottoncandy{
        --bg: #FFEBCC;
        --main: #FFAFAF;
        --sub1: #FFBD87;
        --sub2: #FFCCAA;
        --text: #744500;
    }
    .chocotree{
        --bg: #E9E5D6;
        --main: #464E2E;
        --sub1: #ACB992;
        --sub2: #8C9F69;
        --text: #362706;
    }
    .ocean{
        --bg: #FFF8F3;
        --main: #5C7AEA;
        --sub1: #96BAFF;
        --sub2: #3D56B2;
        --text: #10207E;
    }
    body{
        background-color: var(--bg);
    }
`;

export default GlobalStyle;