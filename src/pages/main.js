import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import TopBanner from '../component/top';
import GoToWritePage from '../component/gotowrite';

export default function MainPage(){
    return(
        <div>
            <GoToWritePage />
        </div>
    );
}