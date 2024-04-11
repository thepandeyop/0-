import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo">
                        <h2>Zero Factorial</h2>
                    </div>
                    <div className="footer__links">
                        <ul className="footer__menu">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#community">Community</a></li>
                            <li><a href="#group">Group</a></li>
                            <li><a href="#Roadmap">Roadmap</a></li>
                        </ul>
                    </div>
                    <div className="footer__social">
                        <a href="#facebook"><i className="ri-facebook-fill"></i></a>
                        <a href="#twitter"><i className="ri-twitter-fill"></i></a>
                        <a href="#instagram"><i className="ri-instagram-fill"></i></a>
                        <a href="#linkedin"><i className="ri-linkedin-fill"></i></a>
                    </div>
                </div>
                <div className="footer__copyright">
                    <p>&copy; 2024 Zero Factorial. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
