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
     <div class="card">
       <img src="..." class="card-img-top" alt="image" />
       <div class="card-body">
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
       </div>
      </div>
      <div class="card">
        <img src="..." class="card-img-top" alt="image" />
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
        </div>
       </div>
       <div class="card">
         <img src="..." class="card-img-top" alt="image" />
         <div class="card-body">
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
         </div>
        </div>
        <div class="card">
          <img src="..." class="card-img-top" alt="image" />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
          </div>
         </div>
    </div>
   );
 }
}

export default Special;
