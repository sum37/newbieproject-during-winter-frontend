import React from "react";
import './InputItem.css';

const InputItem=(props)=>{
    return(
        <div className="input-item">

            <div className="Date">날짜 : {props.date}</div>

            <div className="emotions">
                <span className="emotions-item">희 : {props.happy}</span>
                <span className="emotions-item">노 : {props.angry}</span>
                <span className="emotions-item">애 : {props.sad}</span>
                <span className="emotions-item">락 : {props.joy}</span>
            </div>

            <div className="text">
                <div className="title">제목: {props.title}</div>
                <div className="body">내용 : {props.body}</div>
            </div>
            <div className="DeleteSection">
                <button onClick={props.onDeleteClick} className="delete">삭제</button>
            </div>
        
        </div>
    )
}

export default InputItem;