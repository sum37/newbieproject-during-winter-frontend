import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import WritePage from './pages/write';
import ListPage from './pages/list';
import MainPage from './pages/main';
import CustomPage from './pages/custom';


function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/write' element={<WritePage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/custom' element={<CustomPage />} />
      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;

