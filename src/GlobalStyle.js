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
        --bg-body: #fff;
        --bg-menu: #F56692;
        --text1: #BDBDBD;
        --text2: #828282;
        --border: #FFC700;
        --btn-color: #F2F6FF;
        --theme-color: #464E2E;
    }
    .light{
        --bg: #FFF8F3;
        --text1: #BDBDBD;
        --text2: #828282;
        --border: gray;
        --btn-color: #F2F6FF;
        --theme-color: #FFF8F3;
    }
    .cosmic{
        --bg: #1A1A40;
        --text1: #EF2F88;
        --text2: #F9D371;
        --border: #F9D371;
        --bodytext: #FBF3E4;
        --theme-color: #8843F2;
        --btn-color: #F47340;
    }
    .cottoncandy{
        --bg: #FBFFE2;
        --text1: #FFAFAF;
        --text2: #FF9999;
        --border: #FF9999;
        --btn-color: #FFEBCC;
        --theme-color: #FFEBCC;
        --bodytext: #744500;
    }
    .chocotree{
        --bg: #E9E5D6;
        --text1: #464E2E;
        --text2: #828282;
        --border: #828282;
        --btn-color: #ACB992;
        --theme-color: #464E2E;
    }
    .ocean{
        --bg: #E6E6E6;
        --text1: #5C7AEA;
        --text2: #14279B;
        --border: #14279B;
        --btn-color: #3D56B2;
        --theme-color: #5C7AEA;

    }
    body{
        background-color: var(--bg);
    }
`;

export default GlobalStyle;