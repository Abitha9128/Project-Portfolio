import React from 'react';
import { Icon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Background & Vision</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging disciplined computer science engineering with hands-on software development and dynamic team leadership.
          </p>
        </div>

        <div className="about-grid">
          <div className="glass-card">
            <h3 className="card-title">
              <Icon name="code" size={22} className="card-title-icon" />
              Career Objective
            </h3>
            <p className="about-text">
              "{personalInfo.objective}"
            </p>
            <p className="about-text">
              I am driven by turning abstract computational concepts into interactive, high-performance digital products. With strong foundations in C++, Java, Python, and modern Web Engineering (React, JavaScript, HTML5, CSS3), I thrive on solving real-world challenges.
            </p>
            <div className="quote-box">
              "Combining analytical engineering thinking with modern frontend aesthetics and resilient backend architecture."
            </div>
          </div>

          <div className="glass-card">
            <h3 className="card-title">
              <Icon name="layers" size={22} className="card-title-icon" />
              Personal & Contact Info
            </h3>
            <ul className="details-list">
              <li className="detail-item">
                <span className="detail-label">Full Name</span>
                <span className="detail-value">{personalInfo.name}</span>
              </li>
              <li className="detail-item">
                <span className="detail-label">Current Degree</span>
                <span className="detail-value">{personalInfo.degree}</span>
              </li>
              <li className="detail-item">
                <span className="detail-label">College</span>
                <span className="detail-value">{personalInfo.college}</span>
              </li>
              <li className="detail-item">
                <span className="detail-label">Academic Score</span>
                <span className="detail-value" style={{ color: 'var(--accent-emerald)' }}>{personalInfo.academicScore}</span>
              </li>
              <li className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{personalInfo.email}</span>
              </li>
              <li className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value">{personalInfo.phone}</span>
              </li>
              <li className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">{personalInfo.location}</span>
              </li>
              <li className="detail-item">
                <span className="detail-label">Languages</span>
                <span className="detail-value">English, Tamil</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
