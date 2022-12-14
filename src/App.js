// import ReactDom from 'react-dom'
// import React from 'react'

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Compte from './views/compte';
import Movies from './views/movies';
function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/compte" element={<Compte />} />
      <Route path="/movies" element={<Movies />} />
      <Route></Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
