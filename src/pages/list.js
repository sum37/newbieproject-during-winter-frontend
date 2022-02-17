import React, { useEffect, useState } from "react";
import InputItem from "../component/InputItem";
import axios from 'axios';
import { Link } from 'react-router-dom';



function ListPage(){
    const [input, setInput] = useState([]);
    useEffect(() => {
        // 목록 조회 요청 전송
        axios.get(`/api/write`)
        // 응답이 돌아오면 응답 내용으로 목록을 변경
        .then(response => {
          setInput(response.data);
        });
      }, []);

    const onDeleteClick = (item) => {
        axios.delete(`api/write/${item._id}`)
        .then(()=>axios.get(`api/write`))
        .then(response => {
          setInput(response.data);
          console.log(response.data)
        })
        alert('삭제하시겠습니까?');
        
      };
    const ListUp = input.map(v=>(
        <InputItem
            key={v._id}
            happy={v.happy}
            angry={v.angry}
            sad={v.sad}
            joy={v.joy}
            title={v.title}
            body={v.body}
            onDeleteClick={()=>onDeleteClick(v)}
        />
    ));
    return(
        <div>
            <div className="Entire">
                <p className="notmain-sub-header">喜 怒 哀 樂</p>
                <h1 className="notmain-header">희 노 애 락</h1>
            </div>
            <h1>지난 기록을 살펴보세요.</h1>
            {ListUp}
            <div>
                <Link to="/write">
                    <button className="writebutton">일기 쓰러 가기</button>   
                </Link>
                </div>
        </div>
        
    );
}

export default ListPage;