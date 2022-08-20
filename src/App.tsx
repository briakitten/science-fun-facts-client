import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import RequestFact from './pages/RequestFact';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="app-header">
          <div className='tabs'>
            <Link className="tab" to="/">Home</Link>
            <Link className="tab" to="/requestfact">Request Fact</Link>
          </div>
          <h1>Science Fun Facts API</h1>
          <br />
        </header>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requestfact" element={<RequestFact />} />
          </Routes>
        </div>
        <footer className="app-footer">
          <p>- - - - - - - - -</p>
          <a href="https://github.com/briakitten/science-fun-facts-client"><p>GitHub Source</p></a>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
