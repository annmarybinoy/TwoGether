import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBell, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div class="icon">
                <FontAwesomeIcon icon={faCog} /></div>
            </div>
            <div className="navbar-center">
                <h1 className="navbar-title">TwoGether</h1>
            </div>
            <div className="navbar-right">
                <div class="icon">
                <FontAwesomeIcon icon={faBell} /></div>
                <div class="icon">
                <FontAwesomeIcon icon={faCalendarAlt} /></div>
            </div>
        </nav>
    );
};

export default Navbar;