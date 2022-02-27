import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "../ThemeMenu";

const TopBanner=()=>{

    return(
        <BannerStyled>
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
                    <Menu />
                </div>
            </div>
        </BannerStyled>
        
    )
}

const BannerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .topbanner{
        width: 100%;
        height: 100px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--bg);

        .topbanner_left{
            width: 33%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--bg);

            .topbanner_left-item{
                width: 100%;
                height: 100%;
                font-family: 'Noto Serif Korean';
                text-align: center;
                border: none;
                color: var(--main);
                background-color: transparent;
                font-size: 20px;
                padding: 0px 30px;
                cursor: pointer;
            }
            .topbanner_left-item:hover{
                width: 100%;
                height: 100%;
                font-family: 'Noto Serif Korean';
                text-align: center;
                border: none;
                color: var(--sub1);
                background-color: transparent;
                font-size: 20px;
                padding: 0px 30px;
                cursor: pointer;
            }
        }
        
        .topbanner_center{
            width: 33%;
            align-items: center;

            .topbanner_center-chinese{
                width: 100%;
                text-align: center;
                border: none;
                color: var(--sub1);
                background-color: transparent;
                font-family: 'chinese';
                font-size: 20px;
                cursor: pointer;            
                
            }
            .topbanner_center-korean{
                width: 100%;
                text-align: center;
                border: none;
                color:var(--main);
                background-color: transparent;
                text-decoration: none;
                font-family: 'Noto Serif Korean';
                font-size: 35px;
                cursor: pointer;  
                text-shadow: 1.5px 1.5px var(--sub1);          
            }
        }

        .topbanner_right{
            width: 33%;
            display: flex;
            justify-content: center;
            text-align: end;
            padding: 0px 0px;
        }
    }
`;
export default TopBanner;