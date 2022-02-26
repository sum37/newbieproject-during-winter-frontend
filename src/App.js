import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import WritePage from './pages/write';
import ListPage from './pages/list';
import MainPage from './pages/main';
import './switcher.scss';
import { useState } from 'react';


function App() {
  const [colorTheme, setColorTheme] = useState('theme-white');

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const handleClick=(theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme)
  }
  return (
    <div className={`App ${colorTheme}`}>

    <div className="theme-options">
      <div id='theme-white'
        onClick={()=>handleClick('theme-white')}
        className={`${colorTheme==='theme-white'? 'active':''}`}
        />
      <div id='theme-black'
        onClick={()=>handleClick('theme-black')}
        className={`${colorTheme==='theme-black'? 'active':''}`}
        />
      <div id='theme-chocotree'
        onClick={()=>handleClick('theme-chocotree')}
        className={`${colorTheme==='theme-chocotree'? 'active':''}`}
        />
      <div id='theme-cosmic'
        onClick={()=>handleClick('theme-cosmic')}
        className={`${colorTheme==='theme-cosmic'? 'active':''}`}
        />
      <div id='theme-cottoncandy'
        onClick={()=>handleClick('theme-cottoncandy')}
        className={`${colorTheme==='theme-cottoncandy'? 'active':''}`}
        />
    </div>

    <BrowserRouter>
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

