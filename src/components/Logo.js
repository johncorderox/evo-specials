import React, { Component } from "react";
import logo from '../logo.png';

class Logo extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Logo;
