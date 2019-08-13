import React, { Component } from "react";


class Search extends Component {

  constructor(props) {
  super();
  this.state = {
    query: ''
    };

}

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

 render() {
  return (
    <div className="App">
      <form>
        <input type="text"
         className="form-control"
         placeholder="Type a Supplier Name"
          autofocus="true"
          ref={input => this.search = input} onChange={this.handleInputChange}
           />
      </form>
      {this.state.query}
    </div>
  );
 }
}
export default Search;
