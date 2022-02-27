import React from "react";
import { Link } from "react-router-dom";
import './top.css';


const StartButton=()=>{
    return(
        <div className="StartButton">
            <Link to="/custom">시작하기</Link>
        </div>
    )
}

export default StartButton;