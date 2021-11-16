import React, { Component } from 'react';
 import logo  from "./logo_drive.jpeg"
class Navbar extends Component {
  render() {
    return (
      <div className="navbar1">
        
        <form action="/" method="get" className="form">
          <img src={logo} alt="img" className="img"/><label className="logo_txt">Drive</label>
          <table className="tab"> 
            <td>  <input className="textb" type="text"id="header-search"placeholder="Search in Drive"name="s"/></td>
           <td>   <button  className="text" type="submit" >Search</button></td></table> </form>
      </div>
    );
  }
}
 
export default Navbar