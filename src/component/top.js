import React from "react";
import { Link } from "react-router-dom";
import './top.css';
import styled from "styled-components";
import Menu from "../ThemeMenu";
import { useEffect, useState } from "react";


const TopBanner=()=>{
    const [theme, setTheme] = useState('light');
    useEffect(()=> {
        document.documentElement.className = theme;
    }, [theme])
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
                    <Menu setTheme={setTheme}/>
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
                display: flex;
                width: 100%;
                height: 100%;
                font-family: 'Noto Serif Korean';
                text-align: center;
                border: none;
                color: var(--text1);
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
                color: var(--text1);
                background-color: transparent;
                font-family: 'chinese';
                font-size: 20px;
                cursor: pointer;            
            }
            .topbanner_center-korean{
                width: 100%;
                text-align: center;
                border: none;
                color:var(--text1);
                background-color: transparent;
                text-decoration: none;
                font-family: 'Noto Serif Korean';
                font-size: 35px;
                cursor: pointer;            
            }
        }

        .topbanner_right{

        }

    }
`;
export default TopBanner;