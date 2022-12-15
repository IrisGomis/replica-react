import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Router from './aplication/Router';
import Home from './pages/Home';
import Discover from './pages/Discover';
import About from './pages/About';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
