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
        console.log(response.data);
    })
    .catch(error => console.log(error))
}

 render() {

   return (
     <div>
          {this.state.api.map(obj =>

            <div class="card">
            <div class="card-header">
              Featured
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
              <img src={"http://www.latesttraveloffers.com"+obj.supplier_logo} alt="logo"/> <br />
              {obj.title}<br />
              {obj.start_date} - {obj.end_date}<br />
               </li>
                ${obj.price_per_night} USD/Night
            </ul>
          </div>

        )}
     </div>
   );
 }
}

export default Special;
