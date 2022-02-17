import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';

export default function MainPage(){
    return(
        <div className="Entire">
            <p className="sub-header">喜 怒 哀 樂</p>
            <h1 className="header">희 노 애 락</h1>
            <div>
                <Link to="/sign">
                    <button className="login-button">시작하기</button>
                </Link>
            </div>
        </div>
    );
}