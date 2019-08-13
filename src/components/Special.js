import React, { Component } from "react";
import axios from 'axios'

class Special extends Component {

 constructor(props) {
 super();
 this.state = {
   api: []
   };

 }
 componentDidMount() {
    axios.get('http://localhost:3000/passport_online/api/v1/specials')
    .then(response => {
        this.setState({
            api: response.data
        })
    })
    .catch(error => console.log(error))
}

 render() {

   return (
     <div>
     {this.state.api.map(obj =>
     <div class="card">
       <div class="card-body">
         <p class="card-text">
         <img src={"http://www.latesttraveloffers.com"+obj.supplier_logo} />
         <br />
         {obj.title}</p>
         <p class="card-text">${obj.price_per_night} USD/Night</p>
       </div>
      </div>
          )}
    </div>
   );
 }
}

export default Special;
