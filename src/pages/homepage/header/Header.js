import React from 'react';
import { Link } from 'react-router-dom';
import './header-style.css';

function Header() {
    
  return (
    <nav className="navbar navbar-expand-md fixed-top">
        <Link className="navbar-brand" to="/">
            <h5>Apt HR</h5>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#skills">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#projects">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Header;