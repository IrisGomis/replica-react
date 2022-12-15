import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Discover from '../pages/Discover';
import About from '../pages/About';


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Discover" element={<Discover/>}></Route>
      <Route path="/About" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router