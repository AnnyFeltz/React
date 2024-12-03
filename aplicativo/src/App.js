import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Menu from './Menu';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Menu />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>

      </div>

    </Router>
  );
}

export default App;
