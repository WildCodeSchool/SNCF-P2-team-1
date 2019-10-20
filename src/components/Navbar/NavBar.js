import React from "react";
import './NavBar.css';
import logo from '@sncf/bootstrap-sncf.metier/src/assets/img/brand/logo_transilien.png';

function NavBar() {
  return (
    <header role="banner" className="navbar">
      <nav className="container-fluid bg-light d-flex justify-content-center justify-content-lg-start">
        <div className="mastheader-logo"><img alt='Logo SNCF Transilien' src={logo}/></div>
      </nav>
    </header>
  );
}

export default NavBar;
