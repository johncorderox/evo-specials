import React, { Component } from "react";

class Contact extends Component {


 render() {
  return (
        <div className="contact">
          <div className="row">
            <div className="col-2 offset-1">
            <i className="fas fa-phone"></i>
            </div>
            <div className="col-7">
             1 (818) 248-1511 <br />
            </div>
          </div> <br />
          <div className="row">
            <div className="col-2 offset-1">
            <i className="fas fa-envelope-open-text"></i>
            </div>
            <div className="col-7">
             info@archertravel.com <br />
            </div>
          </div> <br /><br />
            <a href="https://www.cs4000.net/ET/enroll/country.asp?sponsorid=2">Join Evolution</a>
        </div>
  );
 }
}
export default Contact;
