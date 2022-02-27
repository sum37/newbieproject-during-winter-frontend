import styled from "styled-components";
import { useEffect, useState } from "react";


function Menu() {
    const [theme, setTheme] = useState('light');

    useEffect(()=> {
        document.documentElement.className = localStorage.getItem('theme');
        if (document.documentElement.className) {
            setTheme(document.documentElement.className);
        }
    },[theme]);

    const handleClick = (theme) =>{
        setTheme(theme);
        localStorage.setItem('theme', theme)
    }
    return(
        <MenuStyled>
            <div className="buttons">
                <div className="button" onClick={()=>handleClick('light')}>
                    <div className="circlelight"/>
                </div>
                <div className="button" onClick={()=>handleClick('cosmic')}>
                    <div className="circlecosmic"/>
                </div>
                <div className="button" onClick={()=>handleClick('cottoncandy')}>
                    <div className="circlecottoncandy"/>
                </div>
                <div className="button" onClick={()=>handleClick('chocotree')}>
                    <div className="circlechocotree"/>
                </div>
                <div className="button" onClick={()=>handleClick('ocean')}>
                    <div className="circleocean"/>
                </div>

            </div>
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .buttons{
        padding: 10px 2rem;
        display: flex;
        align-items: center;
        background-color: var(--text1);
        border-radius: 10px;
        .button{
            display: flex;
            align-items: center;
            cursor: pointer;
            &:not(:last-child){
                margin-right: 2rem;
            }
            .circlelight{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #FFF8F3;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
            }
            .circlelight:hover{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #FFF8F3;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
                border: 2px solid var(--border);
            }
            .circlecosmic{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #1A1A40;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
            }
            .circlecosmic:hover{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #1A1A40;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
                border: 2px solid var(--border);

            }
            .circlecottoncandy{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #FFAFAF;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
            }
            .circlecottoncandy:hover{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #FFAFAF;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
                border: 2px solid var(--border);
            }
            .circlechocotree{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #464E2E;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
            }
            .circlechocotree:hover{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #464E2E;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
                border: 2px solid var(--border);

            }
            .circleocean{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #7C83FD;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
            }
            .circleocean:hover{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #7C83FD;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
                border: 2px solid var(--border);
            }

        }
    }
`;

export default Menu;