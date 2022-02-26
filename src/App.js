import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import WritePage from './pages/write';
import ListPage from './pages/list';
import TopBanner from './component/top';
import MainPage from './pages/main';



function App() {

  return (
    <div>
    <BrowserRouter>
      <TopBanner />
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/write' element={<WritePage />} />
        <Route path='/list' element={<ListPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

