import React from 'react';
import './App.css';

import Logo from './components/Logo';
import Information from './components/Information';
import Special from './components/Special';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Information />
        <Special />
      </header>
    </div>
  );
}

export default App;
