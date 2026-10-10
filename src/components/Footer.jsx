import React from 'react';
import { Icon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="brand-logo" style={{ marginBottom: '0.5rem' }}>
              <div className="brand-symbol">AV</div>
              <div className="brand-name">{personalInfo.name}</div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '450px' }}>
              Computer Science Engineer passionate about building modern web experiences, robust Python software, and collaborative systems.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href={personalInfo.resumeFile} download="Abitha_Resume.pdf" className="btn btn-secondary btn-sm">
              <Icon name="download" size={15} />
              <span>Download CV</span>
            </a>
            <button
              className="scroll-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Back to top"
            >
              <Icon name="arrowUp" size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Engineered with React 18, Vite & Modern CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};
