import React from "react";
import { Link } from 'react-router-dom';

function GoToWritePage(){
    return (
        <div>
            <Link to="/write">
                <button>일기 쓰러 가기</button>
            </Link>

        </div>
    
    );
}

export default GoToWritePage;