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
      <div className="footer">
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <i class="fas fa-list"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-id-card"></i></a>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default App;
