import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navi from './components/Navi';
import Anasayfa from './components/Anasayfa';
import Hakkimizda from './components/Hakkimizda';
import Iletisim from './components/Iletisim';
import './App.scss'
import { DataProvider } from './context/DataContext';

const App = () => {



  return (
    <Router>
      <div>
        <Navi/>
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
