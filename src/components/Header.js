import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });

    setActiveLink(current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="header">
      <div className="nav-logo">
        <h1 data-text="Jeevan">
          Jeevan<span className="ck">CK</span>
        </h1>
      </div>
      <div className={`nav-menu ${menuOpen ? 'responsive' : ''}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list home-link">
            <a href="#home" className={`nav-link ${activeLink === 'home' ? 'active-link' : ''}`}>Home</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className={`nav-link ${activeLink === 'about' ? 'active-link' : ''}`}>About</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className={`nav-link ${activeLink === 'projects' ? 'active-link' : ''}`}>Projects</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#contact" className={`nav-link ${activeLink === 'contact' ? 'active-link' : ''}`}>Contact</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href={`${process.env.PUBLIC_URL}/Jeevan_Resume.pdf`} className="nav-button" download>
              <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
};

export default Header;
