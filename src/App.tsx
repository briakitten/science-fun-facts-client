import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

import Fact from './components/Fact';
import FactList from './components/FactList';

const URL = "https://science-fun-facts-api.herokuapp.com/api";

function App() {
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
    <div className="App">
      <header className="App-header">
        <h1>Science Fun Facts API</h1>
        <p>
          (This is the official version of this application. <a href="https://github.com/briakitten/ScienceFunFactsV1">V1 can be found here.</a>) <br/>
          Made with Node.js, React, and PostgreSQL. <a href={URL}>Here is the backend</a>!
        </p>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          <button className="button1" onClick={clickRandomFact} style={{margin: 30, fontSize: 22}}>Query Random Fact</button>
          <button className="button1" onClick={clickAllFacts} style={{margin: 30, fontSize: 22}}>Query All Facts</button>
        </div>
        {currentState === 1 && <Fact factData={randomFact}></Fact>}
        {currentState === 2 && <FactList facts={data}></FactList>}
        <a href="https://github.com/briakitten/science-fun-facts-client"><p>GitHub Source</p></a>
      </header>
    </div>
  );
}

export default App;
