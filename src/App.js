import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import WritePage from './pages/write';
import ListPage from './pages/list';
import MainPage from './pages/main';
import styled from 'styled-components';
import React from "react";
function App() {
  return (
    <AppStyled>
    <div className='App'> 

      <BrowserRouter>
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/write' element={<WritePage />} />
        <Route path='/list' element={<ListPage />} />
      </Routes>
    </BrowserRouter>   
    </div>
     </AppStyled> 
  );
}

const AppStyled = styled.div`
  width: 100%;
  background-color: var(--bg);
`;
export default App;

