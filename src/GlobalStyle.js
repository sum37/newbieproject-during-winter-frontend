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
        --bg-body: #FFF8F3;
        --bg-menu: #F56692;
        --text1: #BDBDBD;
        --text2: #828282;
        --border: gray;
        --btn-color: #F2F6FF;
        --theme-color: #FFF8F3;
    }
    .cosmic{
        --bg: #1A1A40;
        --text1: #EF2F88;
        --text2: #828282;
        --border: #F9D371;
        --theme-color: 
    }
    .cottoncandy{
        --bg: #FFEBCC;
        --text1: #FFAFAF;
        --text2: #FF9999;
        --border: #FFC700;
        --btn-color: #F2F6FF;
        --theme-color: #FFAFAF;
    }
    .chocotree{
        --bg: #E9E5D6;
        --text1: #464E2E;
        --text2: #828282;
        --border: #FFC700;
        --btn-color: #ACB992;
        --theme-color: #464E2E;
    }
    .ocean{
        --bg: #E6E6E6;
        --text1: #5C7AEA;
        --text2: #14279B;
        --border: #FFC700;
        --btn-color: #F2F6FF;
        --theme-color: #5C7AEA;

    }
    body{
        background-color: var(--bg-body);
    }
    

`;

export default GlobalStyle;