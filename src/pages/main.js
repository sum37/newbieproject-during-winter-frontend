import React from 'react';
import StartButton from '../component/startbutton';
import styled from 'styled-components';

export default function MainPage(){
    return(
        <MainStyled>
            <div className='Entire'> 
                <div className='sub-header'>喜 路 哀 樂</div>
                <div className='header'>희 노 애 락</div>
                <StartButton />
            </div>
        </MainStyled>
    );
}

const MainStyled=styled.div`
    .Entire{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 15%;
        align-items: center;
        vertical-align: middle;
        
        .sub-header{
            font-family: 'chinese';
            color: var(--sub1);
            font-size: 40px;
            text-align: center;
            margin-bottom: -20px;
        }

        .header{
            color: var(--main); 
            font-size: 150px;
            font-family: 'Noto Serif Korean';
            text-shadow: 5px 5px 0px var(--sub1);
            text-align: center;        
        }
    }
`;