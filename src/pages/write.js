import React, { forwardRef, useState } from "react";
import axios from 'axios';
import './write.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TopBanner from "../component/top";

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
                        />{" "}
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
                            type="radio"
                            name="angry"
                            value={f}
                            checked={angry===f}
                            onChange={e=>setAngry(e.currentTarget.value)}
                        />{" "}
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
                        />{" "}
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
                        />{" "}
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
        </div>
    );

                    }