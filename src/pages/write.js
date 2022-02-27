import React, { forwardRef, useEffect, useState } from "react";
import axios from 'axios';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TopBanner from "../component/top";
import styled from "styled-components";

const happys = ["0", "1", "2", "3", "4", "5"];
const angrys = ["0", "1", "2", "3", "4", "5"];
const sads = ["0", "1", "2", "3", "4", "5"];
const joys = ["0", "1", "2", "3", "4", "5"];

export default function WritePage(){

    const [input, setInput] = useState([]);

    const [date, setDate] = useState(new Date());
    const [happy, setHappy] = useState("0");
    const [angry, setAngry] = useState("0");
    const [sad, setSad] = useState("0");
    const [joy, setJoy] = useState("0");
    const [saveTitle, setSaveTitle] = useState("");
    const [saveBody, setSaveBody] = useState("");
    
    const CustomInput=forwardRef(({value, onClick}, ref)=>(
        <button
            className="custom-input"
            onClick={onClick}
            ref={ref}>
                {value}
            </button>
    ));

    const onSaveClick = () => {
        axios.post('/api/write', {
            happy: happy,
            angry: angry,
            sad: sad,
            joy: joy,
            date: date,
            title: saveTitle,
            body : saveBody
        })
        .then(() => axios.get('/api/write'))
        .then(response => {
            setInput(response.data);
            setHappy("0");
            setAngry("0");
            setSad("0");
            setJoy("0");
            setDate(new Date());
            setSaveTitle("");
            setSaveBody("");
            console.log(response.data)
         })
        alert('저장하시겠습니까?');
    };


    return (
        <div>
            <WriteStyled>
            <TopBanner />
            <div className="WritePage">
                
                <div className="intro">
                    <h1 className="intro-item1">오늘 하루는 어땠나요?</h1>
                    <h2 className="intro-item2">각각의 감정을 느낀 정도를 숫자를 통해 표현해보세요.</h2>
                </div>

                <div className="InputSection">
                    <div className="date">
                        <p className="date-text">날짜:</p>
                        <ReactDatePicker
                            showPopperArrow={false}
                            dateFormat={"yyyy년 MM월 dd일"}
                            maxDate={new Date()}
                            selected={date}
                            onChange={(date)=>setDate(date)}
                            customInput={<CustomInput />}
                       />
                    </div>
                    

                    <div className="emotion-item">
                        <label className="chinese"> 喜 </label>
                        <label className="korean"> (희) </label>
                        {happys.map(f => (
                        <>
                        <input

                            type="radio"
                            name="happy"
                            value={f}
                            checked={happy===f}
                            onChange={e=>setHappy(e.currentTarget.value)}
                        />{""}
                        {f}
                        </>    
                        ))}
                    </div>

                    <div className="emotion-item">
                        <label className="chinese"> 怒 </label>
                        <label className="korean"> (노) </label>
                        {angrys.map(f => (
                        <>
                            <input
                                className="radiobutton"
                                type="radio"
                                name="angry"
                                value={f}
                                checked={angry===f}
                                onChange={e=>setAngry(e.currentTarget.value)}
                            />{""}
                            {f}
                        </>    
                        ))}
                    </div>

                    <div className="emotion-item">
                        <label className="chinese"> 哀 </label>
                        <label className="korean"> (애) </label>
                        {sads.map(f => (
                        <>
                            <input
                                type="radio"
                                name="sad"
                                value={f}
                                checked={sad===f}
                                onChange={e=>setSad(e.currentTarget.value)}
                            />{""}
                            {f}
                        </>    
                        ))}
                    </div>

                    <div className="emotion-item">
                        <label className="chinese"> 樂 </label>
                        <label className="korean"> (락) </label>
                        {joys.map(f => (
                        <>
                            <input
                                type="radio"
                                name="joy"
                                value={f}
                                checked={joy===f}
                                onChange={e=>setJoy(e.currentTarget.value)}
                        />{""}
                        {f}
                        </>    
                        ))}
                    </div>
                </div>
                
                <textarea
                    className="Title"
                    placeholder="제목을 입력하세요."
                    value={saveTitle}
                    onChange={v=>setSaveTitle(v.target.value)}
                    required/>
                <textarea
                    className="Body"
                    placeholder="내용을 입력하세요."
                    value={saveBody}
                    onChange={v=>setSaveBody(v.target.value)}
                    required/>
                <div className="SaveButton-Section">
                    <button onClick={()=>onSaveClick()} className="SaveButton">저장</button>
            </div>
                
                
        </div>
        </WriteStyled>
        </div>
    );

}

const WriteStyled = styled.div`
    .WritePage{
        width: 100%;
        height: 1000px;
        align-items: center;
        justify-content:space-evenly;
        display: flex;
        flex-direction: column;

        .intro{
            width: 70%;
            margin-top: 50px;
            .intro-item1{
                font-family: 'Noto Serif Korean';
                margin-bottom: 10px;
                color: var(--text);
            }
            .intro-item2{
                font-family: 'Noto Serif Korean';
                margin-bottom: 50px;
                color: var(--text);
            }
        }

        .InputSection{
            width:70%;
            .date{
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-bottom: 0px;
                
                .date-text{
                    text-decoration: none;
                    font-family: 'Noto Serif Korean';
                    font-size: 20px;
                    width: 100px;
                    height: 100%;
                    margin-right: 20px;        
                    margin-bottom: 30px;
                    color: var(--text);
                }
            .custom-input{
                background-color: var(--sub1);
                width: 220px;
                border: none;
                border-radius: 10px;
                padding: 10px;
                font-family: 'Noto Serif Korean';
                font-size: 20px;
                margin-left: 40px;
                margin-bottom: 30px;
                cursor: pointer;     
                color: var(--text);       
            }
            }
        }
        .emotion-item{
            margin: auto;
            font-family: 'Noto Serif Korean';
            font-size: 20px;
            align-items: center;
            color: var(--text);

            .chinese{
                font-family: 'chinese';
                font-size: 20px;            
            }

            .korean{
                font-family: 'Noto Serif Korean';
                font-size: 20px;
                margin-right: 50px;            
            }
        }
        .emotion-item input{
            margin: 0px 30px;        
        }   
        .Title{
            width:70%;
            height: 60px;
            margin: 30px auto;
            resize: none;
            border-radius: 10px;
            font-size: 15px;
            line-height: 40px;
            text-indent: 20px;  
            background-color: var(--bg);  
            border: 2px solid var(--sub1);    
        }

        .Body{
            width: 70%;
            height: 500px;
            margin: 15px auto;
            resize: none;
            border-radius: 10px;
            font-size: 15px;
            line-height: 45px;
            text-indent: 20px;    
            background-color: var(--bg);      
            border: 2px solid var(--sub1);    
        }

        textarea::placeholder{
            line-height: 40px;
            text-indent: 20px;
        }
        textarea::focus{
            outline: border: 2px solid var(--sub2);  
        }

        .SaveButton-Section{
            width: 70%;
            display: flex;
            justify-content: flex-end;

            .SaveButton{
                width: 100px;
                border-radius: 10px; 
                border: none;
                color: var(--text);
                background-color: var(--sub2);
                text-decoration: none;
                font-family: 'Noto Serif Korean';
                font-size: 20px;
                margin-top: 20px;
                cursor: pointer;
                margin-bottom: 50px;
                padding: 5px 20px;
            }
            .SaveButton:hover{
                width: 100px;
                border-radius: 10px; 
                border: none;
                color: var(--sub2);
                background-color: var(--bg);
                text-decoration: none;
                font-family: 'Noto Serif Korean';
                font-size: 20px;
                margin-top: 20px;
                cursor: pointer;
                margin-bottom: 50px;
            }

        }
    }
`;