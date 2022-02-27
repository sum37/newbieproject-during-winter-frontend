import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import WritePage from './pages/write';
import ListPage from './pages/list';
import MainPage from './pages/main';
import CustomPage from './pages/custom';
import styled from 'styled-components';
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className='App'>     
      <AppStyled>
      <BrowserRouter>
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/write' element={<WritePage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/custom' element={<CustomPage />} />
      </Routes>
    </BrowserRouter>   
      </AppStyled> 
       
    </div>
  );
}

const AppStyled = styled.div`
  width: 100%;
  background-color: var(--bg);
`;
export default App;

