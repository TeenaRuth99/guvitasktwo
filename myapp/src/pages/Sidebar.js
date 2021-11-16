import React, { Component } from 'react';
import add from "./logo_plus.jpg";
 
 import FileDialogue from './file';
class Sidebar extends Component {
  render() {
    return (
      <>
        
       <div className="navbar" >
        
       <FileDialogue />
        <a href="#">My Drive</a>
        <a href="#">Computers</a>
        <a href="#">Shared with me</a>
        <a href="#">Recent</a>
        <a href="#">Starred</a>
        <a href="#">Bin</a>
        <a href="#">Storage</a>
        
         </div>
</>
    );
  }
}

 
export default Sidebar