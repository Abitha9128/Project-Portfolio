import React from 'react';
import { leadershipData } from '../data/portfolioData';

export const Leadership = () => {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Leadership & Teamwork</div>
          <h2 className="section-title">Sports & Extra-Curriculars</h2>
          <p className="section-subtitle">
            Demonstrating leadership, strategic decision-making under pressure, and active social responsibility.
          </p>
        </div>

        <div className="leadership-grid">
          {leadershipData.map((item, idx) => (
            <div key={idx} className="leadership-card">
              <div className={`leadership-icon-box ${item.iconClass}`}>
                {item.icon}
              </div>
              <div>
                <span className="leadership-role-tag">{item.category}</span>
                <h3 className="leadership-title">{item.role}</h3>
              </div>
              <p className="leadership-desc">
                {item.desc}
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-glass)' }}>
                <span className="skill-badge">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
