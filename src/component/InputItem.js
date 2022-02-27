import React from "react";
import styled from "styled-components";

const InputItem=(props)=>{
    return(
        <div>
        <InputItemStyled>
        <div className="input-item">

            <div className="Date">날짜 : {props.date}</div>

            <div className="emotions">
                <span className="emotions-item">
                    <div className="happycircle" />
                    희 : {props.happy}</span>
                <span className="emotions-item">
                    노 : {props.angry}</span>
                <span className="emotions-item">
                    애 : {props.sad}</span>
                <span className="emotions-item">
                    락 : {props.joy}</span>
            </div>

            <div className="text">
                <div className="title">제목: {props.title}</div>
                <div className="body">내용 : {props.body}</div>
            </div>

            <div className="DeleteSection">
                <button onClick={props.onDeleteClick} className="delete">삭제</button>
            </div>

            <hr className="hr"/>
        </div>
            </InputItemStyled>
        </div>
    )
}

const InputItemStyled=styled.div`
    .input-item{
        width: 100%;
        justify-content: center;
        margin: 20px auto;
        padding: 50px;
        border-radius: 30px;
        font-family: 'Noto Serif Korean';
        font-size: 20px;
        color: var(--text);

        .Date{
            display: flex;
            margin: 20px auto;        
        }

        .emotions{
            display: flex;
            width: 100%;
            justify-content: flex-start;
            
            .emotions-item{
                width: 20%;
                display: flex;
                margin-right: 20px;
                text-align: center;     
            }
        }

        .text{
            display: flex;
            flex-direction: column;
            margin: 20px auto;
            color: var(--text);
            .title {
                display: flex;
                margin: 20px 0px;
            }
            .body {
                display: flex;
            }
            
        }

        .DeleteSection{
            width:100%;
            display: flex;
            justify-content: flex-end;

            .delete{
                background-color: var(--sub2);
                border: none;
                border-radius: 10px;
                font-family: 'Noto Serif Korean';
                font-size: 20px;
                padding: 5px 20px;
                margin-bottom: 30px;
                color: var(--text);
                cursor: pointer;
            }
            .delete:hover{
                background-color: var(--bg);
                border: none;
                border-radius: 10px;
                font-family: 'Noto Serif Korean';
                font-size: 20px;
                padding: 5px 20px;
                margin-bottom: 30px;
                color: var(--sub2);
            }
        }
        
        .hr{
            border-top: 3px double var(--sub2);
        }
    }
`;

export default InputItem;