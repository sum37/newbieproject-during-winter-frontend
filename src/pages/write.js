import React, { useState } from "react";
import axios from 'axios';
import InputItem from "../component/InputItem";
import './write.css';
import { Link } from 'react-router-dom';

const happys = ["0", "1", "2", "3", "4", "5"];
const angrys = ["0", "1", "2", "3", "4", "5"];
const sads = ["0", "1", "2", "3", "4", "5"];
const joys = ["0", "1", "2", "3", "4", "5"];

export default function WritePage(){

    const [input, setInput] = useState([]);
    const [saveTitle, setSaveTitle] = useState("");
    const [saveBody, setSaveBody] = useState("");

    const [happy, setHappy] = useState("0");
    const [angry, setAngry] = useState("0");
    const [sad, setSad] = useState("0");
    const [joy, setJoy] = useState("0");
    

    
    const onSaveClick = () => {
        axios.post('/api/write', {
            happy: happy,
            angry: angry,
            sad: sad,
            joy: joy,
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
            setSaveTitle("");
            setSaveBody("");
            console.log(response.data)
         })
        alert('저장하시겠습니까?');
    };


    return (
        <div>
            <div className="Entire">
                <p className="notmain-sub-header">喜 怒 哀 樂</p>
                <h1 className="notmain-header">희 노 애 락</h1>
            </div>
            <div>
                <h1 className="intro1">오늘 하루는 어땠나요?</h1>
                <h2 className="intro2">각각의 감정을 느낀 정도를 숫자를 통해 표현해보세요.</h2>
            </div>
            <div className="Entire">
                <span className="happy">
                    <label className="chinese1"> 喜 </label>
                    <label className="korean"> (희) </label>
                    {happys.map(f => (
                    <>
                        <input
                            type="radio"
                            name="happy"
                            value={f}
                            checked={happy===f}
                            onChange={e=>setHappy(e.currentTarget.value)}
                        />{" "}
                        {f}
                    </>    
                    ))}
                </span>
                <span className="angry">
                    <label className="chinese"> 怒 </label>
                    <label className="korean"> (노) </label>
                    {angrys.map(f => (
                    <>
                        <input
                            type="radio"
                            name="angry"
                            value={f}
                            checked={angry===f}
                            onChange={e=>setAngry(e.currentTarget.value)}
                        />{" "}
                        {f}
                    </>    
                    ))}
                </span>
                <span className="sad">
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
                        />{" "}
                        {f}
                    </>    
                    ))}
                </span>
                <span className="joy">
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
                        />{" "}
                        {f}
                    </>    
                    ))}
                </span>
        </div>
                <br />
                <textarea
                    className="Title"
                    placeholder="제목을 입력하세요."
                    value={saveTitle}
                    onChange={v=>setSaveTitle(v.target.value)}
                    required/>
                <br />
                <textarea
                    className="Body"
                    placeholder="내용을 입력하세요."
                    value={saveBody}
                    onChange={v=>setSaveBody(v.target.value)}
                    required/>
                <br />
                <button
                    className="SaveButton"
                    onClick={()=>onSaveClick()}>저장</button>
                <div>
                <Link to="/list">
                    <button className="listbutton">지난 일기 보기</button>   
                </Link>
                </div>
        </div>
    );
}