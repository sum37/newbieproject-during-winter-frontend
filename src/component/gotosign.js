import React from "react";
import { Link } from 'react-router-dom';

function GoToSignPage(){
    return (
        <div>
            <Link to="/sign">
                <button>시작하기</button>
            </Link>

        </div>
    
    );
}

export default GoToSignPage;