import React, { Component } from "react";

import Logo from '../components/Logo';
import Special from '../components/Special';
import Search from '../components/Search';

class Container extends Component {

  constructor(props) {
  super();
  this.state = {
    home: true,
    search: false,
    contact: false
    };

}

home = (e) => {
  e.preventDefault();
  this.setState({
      home: true,
      search: false,
      contact: false
  })
};

startSearch = (e) => {
  e.preventDefault();
  this.setState({
      home: false,
      search: true
  })
};

 render() {
  return (
    <div className="App">
      <header className="App-specials">
        <Logo />
      </header>
      <div className="content">
      {this.state.home &&
        <Special />
      }
      {this.state.search &&
        <Search />
      }
      </div>
      <div className="footer">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active" href="#" onClick={this.home}>
            <i className="fas fa-list"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={this.startSearch}><i className="fas fa-search"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fas fa-id-card"></i></a>
        </li>
      </ul>
      </div>
    </div>
  );
 }
}
export default Container;
