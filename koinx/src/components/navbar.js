import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">Koin</span><span className="big-x">x</span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Crypto Types</a></li>
        <li><a href="#">Free Tools</a></li>
        <li><a href="#">Resource Center</a></li>
      </ul>
      <button className="get-started-btn">Get Started</button>
    </nav>
  );
};

export default Navbar;
