import React from "react";
import './NavBar.css';
import logo from '../../../resources/img/logo_transilien.png';

function NavBar() {
  return (
    <header role="banner" className="navbar fixed-top">
      <nav className="bg-light d-flex justify-content-center justify-content-lg-start">
        <div className="mastheader-logo"><img alt='Logo SNCF Transilien' src={logo}/></div>
      </nav>
    </header>
  );
}

export default NavBar;
