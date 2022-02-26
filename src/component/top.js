import React from "react";
import { Link } from "react-router-dom";
import './top.css';


const TopBanner=()=>{
    return(
        <div className="topnav">
            <div className="topbanner_left">
                <div classNAme="topbanner_left-item">
                    {/*여기는 일기쓰기*/}
                    write
                </div>
                <div classNAme="topbanner_left-item">
                    {/*여기는 지난 일기 보러가기*/}
                    list
                </div>
            </div>
            <div className="topbanner_center">
                <div className="topbanner_center-item">
                    {/*여기는 한자...*/}
                    희노애락
                </div>
                <div className="topbanner_center-item">
                    희노애락
                </div>
            </div>
            <div className="topbanner_right">
                <div className="topbanner_right-item">
                    Theme
                </div>
            </div>
        </div>
    )
}

export default TopBanner;