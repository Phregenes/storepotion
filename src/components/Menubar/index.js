import React from 'react';
import './styles.css';


const Menubar = () =>

  <div className="navbar">
    <a href="#home">Potions</a>
    <a href="#news">Ingredients</a>
    <a href="#news">Books</a>
    <a href="#news">Suplies</a>
    <a href="#news">Charms</a>
    <a href="#news">Clearance!</a>
    <div className="dropdown">
      <button className="dropbtn">Dropdown 
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div> 
  </div>

export default Menubar;