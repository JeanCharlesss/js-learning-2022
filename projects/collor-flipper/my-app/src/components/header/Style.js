import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 10%;
    width: 100%;
    box-shadow: 0px 5px 5px #00000042;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px 0 40px;
    position: relative;
    z-index: 2;
    background-color: #F3F3F3;

    .logo{
        text-decoration: none;
        color: #272727;
        font-weight: 900;
        cursor: pointer;

        span{
            color: #32BEFF;
        }
    }

    nav ul{
        list-style: none;
        display: flex;
        gap: 50px;
    }

    nav a{ 
        color: #272727;
        font-weight: 500;
        text-decoration: none;
        position: relative;
        transition: 0.2s;
    }

    nav a:hover{
        color: #32BEFF;
    }


`;