import './App.css';
import Counter from './component/Counter';
// import Forms from './component/Forms'; 
// import List from './component/List';
import Header from './component/Header/Header';
import About from './component/About/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'
import Hooks from './component/Hooks/Hooks';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/about" element={<About />} />
        <Route path='/hooks' element={<Hooks />} />
      </Routes>
    </Router>
  );
}

