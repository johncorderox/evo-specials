import React, { Component } from "react";

import Logo from '../components/Logo';
import Special from '../components/Special';
import Search from '../components/Search';
import Contact from '../components/Contact';

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

contact = (e) => {
  e.preventDefault();
  this.setState({
      home: false,
      search: false,
      contact: true
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
      {this.state.contact &&
        <Contact />
      }
      </div>
      <div className="footer">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <button
          className={this.state.home ? ' evo-btn active' : ' evo-btn'}
          onClick={this.home}>
            <i className="fas fa-list"></i>
            </button>
        </li>
        <li className="nav-item">
          <button
          className={this.state.search ? ' evo-btn active' : ' evo-btn'}
           onClick={this.startSearch}><i className="fas fa-search"></i></button>
        </li>
        <li className="nav-item">
          <button className={this.state.contact ? ' evo-btn active' : ' evo-btn'}
          onClick={this.contact}>
           <i className="fas fa-id-card"></i></button>
        </li>
      </ul>
      </div>
    </div>
  );
 }
}
export default Container;
