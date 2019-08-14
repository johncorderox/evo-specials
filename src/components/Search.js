import React, { Component } from "react";


class Search extends Component {

  constructor(props) {
  super();
  this.state = {
    query: '',
    suppliers: ["Regent", "Oceania", "Norwegian", "Azamara", "Seabourn", "Celebrity",
     "Holland America", "MSC", "Silversea", "Carnival", "Royal Caribbean"]
    };


}

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

 render() {


  return (
    <div>
      <form>
        <input type="text"
         className="form-control"
         placeholder="Type a Supplier Name"
          autofocus="true"
          ref={input => this.search = input} onChange={this.handleInputChange}
           />
      </form>
      {this.state.suppliers.map(obj => <p key={obj.id}>{obj}</p> )}

    </div>
  );
 }
}
export default Search;
