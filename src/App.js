import React, { useState } from 'react';
import './App.css';
import BlobField from 'src/BlobField';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BlobField />
      </header>
    </div>
  );
}

export default App;
