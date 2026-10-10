import React, { useState } from 'react';
import { Icon } from './Icons';

export const Navbar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#hero" className="brand-logo">
          <div className="brand-symbol">AV</div>
          <div className="brand-name">
            Abitha<span className="brand-dot">.dev</span>
          </div>
        </a>

        <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#demos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Live Demos</a></li>
          <li><a href="#education" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Education</a></li>
          <li><a href="#leadership" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Leadership</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle theme"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>

          <a href="/resume.pdf" download="Abitha_Arul_Vijayalakshmi_Resume.pdf" className="btn btn-primary btn-sm">
            <Icon name="download" size={15} />
            <span>Resume</span>
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};
