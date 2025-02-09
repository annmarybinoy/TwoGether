import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faImages } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-item">
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
            </div>
            <div className="footer-item">
                <FontAwesomeIcon icon={faList} />
                <span>Bucketlist</span>
            </div>
            <div className="footer-item">
                <FontAwesomeIcon icon={faImages} />
                <span>Album</span>
            </div>
        </footer>
    );
};

export default Footer;
