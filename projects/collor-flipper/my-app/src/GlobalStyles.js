import styled, {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    html, body, #root, .App {
        height: 100%;
    }
`