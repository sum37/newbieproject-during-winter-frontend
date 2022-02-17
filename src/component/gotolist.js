import React from "react";
import { Link } from 'react-router-dom';

function ListButton(){
    return (
        <div>
            <Link to="/list">
                <button>내가 쓴 일기 목록</button>
            </Link>
        </div>
    
    );
}

export default ListButton;