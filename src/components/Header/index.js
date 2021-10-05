import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="index.html" className="logo">
                <h4>
                  Access<span>Advanced</span>
                </h4>
              </Link>
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link to="#top" className="active">
                    Home
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#about">About Us</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#services">Services</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#portfolio">Showcase</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#blog">Blog</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#contact">Message Us</Link>
                </li>
                <li className="scroll-to-section">
                  <div className="main-red-button">
                    <Link to="#contact">Contact Now</Link>
                  </div>
                </li>
              </ul>
              <Link className="menu-trigger">
                <span>Menu</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
