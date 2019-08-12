import React from 'react';
import './App.css';

import Logo from './components/Logo';
import Special from './components/Special';

function App() {
  return (
    <div className="App">
      <header className="App-specials">
        <Logo />
      </header>
      <div className="specials">
      <Special />
      </div>
    </div>
  );
}

export default App;
