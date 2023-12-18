import React from 'react';
import "./Header.css";

import logo from "../../assets/logo.jpg";

const Header = () => {
  return <div className="Header">
    <img src={logo} alt="logo" className="logo"/>
  </div>
  
}

export default Header;