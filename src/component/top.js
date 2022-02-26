import React from "react";
import { Link } from "react-router-dom";
import './top.css';


const TopBanner=()=>{
    return(
        <div class="container">
            <header>
            <nav>
            <ul>
                <li><Link to='/write'>일기 쓰러 가기</Link></li>
                <li><Link to='/list'>지난 일기 보기</Link></li>
            </ul>
            </nav>
            <Link to='/main'>
                <p>喜 怒 哀 樂</p>
                <h1>희 노 애 락</h1>
            </Link>
            
            
            </header>
        </div>
    )
}

export default TopBanner;