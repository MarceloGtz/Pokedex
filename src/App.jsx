import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './components/Login';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokemonDetail />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
