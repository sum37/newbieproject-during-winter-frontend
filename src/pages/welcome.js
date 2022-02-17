import React from 'react';
import GoToWritePage from '../component/gotowrite';


function WelcomePage(){
    return(
        <>
            <h1>환영합니다!</h1>
            <h2>이곳에서 기록을 남겨보세요.</h2>
            <GoToWritePage />
        </>
    );
}

export default WelcomePage;