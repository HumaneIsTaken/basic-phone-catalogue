import React from 'react';
import Catalogue from './components/Catalogue';
import './css/App.css';

export function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Phone Catalogue</h1>
      </header>
      <Catalogue />
    </div>
  );
}

export default App;
