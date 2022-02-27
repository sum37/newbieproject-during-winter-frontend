import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StartButton=()=>{
    return(
        <StartButtonStyled>
        <div className="StartButton">
            <Link to="/write"><button className="StartButton">시작하기</button></Link>
        </div>
        </StartButtonStyled>
    )
}

const StartButtonStyled=styled.div`
.StartButton {
    border: none;
    border-radius: 35px;
    color: var(--text);
    background-color: var(--sub1);
    font-size: 35px;
    width: 200px;
    height: 60px;
    font-family: 'Noto Serif Korean';
    cursor: pointer;
}
.StartButton:hover{
    border: none;
    border-radius: 35px;
    color: var(--sub2);;
    background-color: transparent;
    font-size: 35px;
    width: 200px;
    height: 60px;
    font-family: 'Noto Serif Korean';
}
`;
export default StartButton;