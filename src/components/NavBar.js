import React from 'react';
import { Link } from 'react-router-dom';
import "../NavBar.css"


const NavBar = () => {
    const navigateTo = (path) => {
        window.location.href = path;
      };




  return (
    <>
         <nav className="navbar">
      <ul className="nav-buttons">
        <li className="nav-item">
          <button className="nav-button" onClick={() => navigateTo('/')}>
            Home
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => navigateTo('/wallet')}>
            Wallet
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => navigateTo('/about')}>
            About
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => navigateTo('/bookings')}>
            Bookings
          </button>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default NavBar;
