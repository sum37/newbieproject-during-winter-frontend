import React from "react";
import { Link } from "react-router-dom";
import './startbutton.css';


const StartButton=()=>{
    return(
        <div className="StartButton">
            <Link to="/write"><button className="StartButton">시작하기</button></Link>
        </div>
    )
}

export default StartButton;