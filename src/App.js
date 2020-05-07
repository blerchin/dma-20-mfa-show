import React, { useState, useEffect } from 'react';
import './App.css';
import BlobField from 'src/BlobField';
import config from './config';

function App() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const resize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });
  return (
    <div className="App" style={{ backgroundColor: config.style.background }}>
      <header className="App-header">
        <BlobField height={size[1]} width={size[0]} />
      </header>
    </div>
  );
}

export default App;
