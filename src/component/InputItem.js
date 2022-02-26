import React from "react";
import './InputItem.css';

const InputItem=(props)=>{
    return(
        <div className="input-item">
            <span className="Happy">희 : {props.happy}</span>
            <span className="Angry">노 : {props.angry}</span>
            <span className="Sad">애 : {props.sad}</span>
            <span className="Joy">락 : {props.joy}</span>
            <div className="Date">날짜 : {props.date}</div>
            <div className="title">제목: {props.title}</div>
            <div className="body">내용 : {props.body}</div>
            <button onClick={props.onDeleteClick}>삭제</button>
        </div>
    )
}

export default InputItem;