import styled from "styled-components";

export const BoxContainer = styled.article`
    transform: translateY(-20px);
    margin: 0 auto;
    background-color: #202020;
    height: auto;
    width: 520px;
    padding: 30px 40px 50px 40px;
    text-align: center;
    box-shadow: 8px 8px 0 black;
    position: relative;
    z-index: 2;

    h1{
        color: #32BEFF;
        font-size: 30px;
    }
    h1 span{
        color: white;
    }

    button{
        height: 50px;
        width: 100px;
        background-color: transparent;
        color: white;
        border: 3px solid white;
        cursor: pointer;
        margin-top: 20px;
        font-weight: 500;
        transition: 0.3s;

        :hover{
            filter: brightness(70%);
        }
    }
`