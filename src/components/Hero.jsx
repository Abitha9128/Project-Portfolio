import React from 'react';
import { Icon } from './Icons';
import { personalInfo, metricsData } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <div className="hero-greeting">Hi there, Welcome to my portfolio!</div>

          <h1 className="hero-name">
            I'm <span className="gradient-text">Abitha Arul</span>
            <br />Vijayalakshmi
          </h1>

          <div className="hero-title">
            <span>Aspiring</span>
            <span className="hero-title-highlight">Software Engineer</span>
            <span>& Full-Stack Developer</span>
          </div>

          <p className="hero-description">
            {personalInfo.bio}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <Icon name="code" size={18} />
              <span>Explore Projects</span>
            </a>
            <a href={personalInfo.resumeFile} download="Abitha_Resume.pdf" className="btn btn-secondary">
              <Icon name="download" size={18} />
              <span>Download CV</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Icon name="mail" size={18} />
              <span>Get In Touch</span>
            </a>
          </div>

          <div className="hero-metrics">
            {metricsData.map((m, idx) => (
              <div key={idx} className="metric-card">
                <div className="metric-number">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Right Visual Column with User's Photo */}
        <div className="hero-visual">
          <div className="profile-card-wrapper">
            <div className="profile-card-inner">
              <img
                src={personalInfo.profileImage}
                alt="Abitha Arul Vijayalakshmi Profile Photo"
                className="profile-img"
              />
              <div className="profile-overlay">
                <div className="profile-overlay-title">{personalInfo.name}</div>
                <div className="profile-overlay-subtitle">{personalInfo.college}</div>
              </div>
            </div>
          </div>

          {/* Floating Highlights Badges */}
          <div className="floating-badge badge-1">
            <span className="badge-icon">⚛️</span>
            <div>
              <div className="badge-text-title">React Developer</div>
              <div className="badge-text-sub">Modern UI & State</div>
            </div>
          </div>

          <div className="floating-badge badge-2">
            <span className="badge-icon">🐍</span>
            <div>
              <div className="badge-text-title">Python & SQL</div>
              <div className="badge-text-sub">Systems & Data</div>
            </div>
          </div>

          <div className="floating-badge badge-3">
            <span className="badge-icon">🏏</span>
            <div>
              <div className="badge-text-title">Cricket Team Captain</div>
              <div className="badge-text-sub">Leadership & Sports</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
