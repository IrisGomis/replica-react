import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import Router from './aplication/Router';
import Home from './pages/Home';
import Discover from './pages/Discover';
import About from './pages/About';
//import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Discover" element={<Discover/>}></Route>
      <Route path="/Join" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
