import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';
import Galeria from './Galeria';
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Cabecalho/>

        <div id='Conteudo'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/galeria" element={<Galeria/>}></Route>
          </Routes>
        </div>

        <Rodape/>

      </div>

    </Router>
  );
}

export default App;
