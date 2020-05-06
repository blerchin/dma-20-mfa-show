import React, { useState } from 'react';
import './App.css';
import BlobField from 'src/BlobField';
import config from './config';

function App() {
  return (
    <div className="App" style={{ backgroundColor: config.style.background }}>
      <header className="App-header">
        <BlobField />
      </header>
    </div>
  );
}

export default App;
