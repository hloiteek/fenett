import React from 'react';
import { useState } from 'react';
import './Header.scss';
import logoIcon from '../icons/logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <div className="nav-bar">
        <a href="/" className="nav-logo">
          <img src={logoIcon} alt="" />
        </a>

        <nav className={`nav-links ${open ? 'show' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#pricing">Features</a>
          <a href="#features">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-btns">
          <button type="button" className="log-btn">Log In</button>
          <button type="button" className="reg-btn">Try for Free</button>
        </div>

        <button
          type="button"
          className="burger"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;