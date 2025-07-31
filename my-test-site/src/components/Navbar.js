import React from "react";
import "./../App.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Car World</h1>
      <ul className="nav-links">
        <li><a href="#featured">Cars</a></li>
        <li><a href="#about">About</a></li>   
        <li><a href="#contact">Contact</a></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
