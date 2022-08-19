import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

import Fact from './components/Fact';
import FactList from './components/FactList';

const URL = "https://science-fun-facts-api.herokuapp.com/api";

function Home() {
  const [currentState, setCurrentState] = useState(0);

  const [data, setData] = useState<Array<FactData>>();
  const [randomFact, setRandomFact] = useState<FactData>();

  useEffect(() => {
    axios({
      method: 'get',
      url: URL
    }).then(function(response) {
      const data = response.data;
      const index = Math.floor(Math.random() * data.data.length);
      const randomFact:  FactData = data.data[index];
      // console.log(JSON.stringify(data.data));
      // console.log("FactData: " + JSON.stringify(randomFact));
      setRandomFact(randomFact);
      setData(data.data);
    });
  }, []);

  const clickRandomFact = () => {
    const _data: Array<FactData> = data || [];
    const index = Math.floor(Math.random() * _data.length);
    const _randomFact:  FactData = _data[index];

    setRandomFact(_randomFact);

    setCurrentState(1);
  }

  const clickAllFacts = () => {

    setCurrentState(2);
  }

  return (
    <div>
      <p>
        (This is the official version of this application. <a href="https://github.com/briakitten/ScienceFunFactsV1">V1 can be found here.</a>) <br/>
        Made with Node.js, React, and PostgreSQL. <a href={URL}>Here is the backend</a>!
      </p>
      <div>
        <button className="button1" onClick={clickRandomFact} style={{margin: 30, fontSize: 22}}>Query Random Fact</button>
        <button className="button1" onClick={clickAllFacts} style={{margin: 30, fontSize: 22}}>Query All Facts</button>
      </div>
      {currentState === 1 && <Fact factData={randomFact}></Fact>}
      {currentState === 2 && <FactList facts={data}></FactList>}
    </div>
  )
}

function RequestFact() {
  return (
    <div>Fact Page</div>
  )
}

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
