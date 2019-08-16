import React, { Component } from "react";


class Search extends Component {

  constructor(props) {
  super();
  this.state = {
    query: '',
    suppliers: ["Regent Seven Seas Cruises", "Oceania Cruises", "Norwegian Cruise Line", "Azamara", "Seabourn", "Celebrity Cruises",
     "Holland America Line", "MSC Cruises", "Silversea", "Carnival", "Royal Caribbean International", "Princess", "Disney Cruise Lines", "American Steamboats", "AMA Waterways"]
    };
}

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }


 render() {


  return (
    <div>
      <form>
        <input type="text"
         className="form-control"
         placeholder="Type a Supplier Name"
          autoFocus={true}
          onChange={e => this.handleOnChange(e)}
          value={this.state.query}
           />
      </form>
      <div className="search-results">
      {this.state.suppliers.map(function(obj, idx){
        return (<p key={idx}>{obj}</p>)
        })}
      </div>
    </div>
  );
 }
}
export default Search;
