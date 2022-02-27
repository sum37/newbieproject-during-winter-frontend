import React from "react";
import { Link } from "react-router-dom";
import './top.css';


const TopBanner=()=>{
    return(
        <div className="topbanner">
            <div className="topbanner_left">
                    <Link to="/write"><button className="topbanner_left-item">일기 쓰러 가기</button></Link>
                    <Link to="/list"><button className="topbanner_left-item">지난 일기 보기</button></Link>
            </div>
            <div className="topbanner_center">
                    <Link to="/main"><button className="topbanner_center-chinese">喜 路 哀 樂</button></Link>
                    <Link to="/main"><button className="topbanner_center-korean">희 노 애 락</button></Link>
            </div>
            <div className="topbanner_right">
                    <Link to='/custom'><button className="topbanner_right-item">테마 설정하기</button></Link>
            </div>
        </div>
    )
}

export default TopBanner;