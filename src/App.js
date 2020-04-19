import React from 'react';
import './App.css';
import config from 'src/config';

function App() {
  console.log(config);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { config.artists.map(({ name }) =>
            <li key={name}>{name}</li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
