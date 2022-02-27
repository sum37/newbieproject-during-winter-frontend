import React from 'react';
import './main.css';
import StartButton from '../component/startbutton';

export default function MainPage(){
    return(
        <div className='Entire'>
            <div className='sub-header'>喜 路 哀 樂</div>
            <div className='header'>희 노 애 락</div>
            <StartButton />
        </div>
    );
}