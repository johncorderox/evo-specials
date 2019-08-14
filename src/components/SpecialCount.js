import React, { Component } from "react";
class SpecialCount extends Component {

 render(count) {

   return (
     <div>
      <div className="count">
     <p>We have {this.props.count} Specials from Evolution!</p>
     </div>
    </div>
   );
 }
}

export default SpecialCount;
