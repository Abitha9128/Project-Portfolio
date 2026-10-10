import React from 'react';
import { Icon } from './Icons';

export const Training = () => {
  return (
    <section id="training" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Skill Enrichment</div>
          <h2 className="section-title">Trainings & Certifications</h2>
          <p className="section-subtitle">
            Continuous professional development and applied technical workshops.
          </p>
        </div>

        <div className="about-grid">
          <div className="glass-card">
            <h3 className="card-title">
              <Icon name="terminal" size={22} className="card-title-icon" />
              Specialized Technical Trainings
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
              <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1rem' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Web Development Training</h4>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>HTML5 • CSS3 • JavaScript (DOM Architecture & Modern ES6)</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem' }}>
                  Undergone intensive practical training in creating responsive web interfaces, modern CSS styling systems, DOM manipulation, and cross-browser web components.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--accent-cyan)', paddingLeft: '1rem' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Python Programming & Database Management</h4>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Core Python • OOP • Relational SQL Databases • Data Flow</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem' }}>
                  Undergone structured training on Python Object-Oriented design patterns, exception handling, data structures, and relational database schema design with SQL queries.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="card-title">
              <Icon name="award" size={22} className="card-title-icon" />
              Workshops & Co-Curricular Contests
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
              <div style={{ borderLeft: '3px solid var(--secondary)', paddingLeft: '1rem' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>AI & Emerging Technologies Workshops</h4>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Artificial Intelligence • Modern Web Frameworks</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem' }}>
                  Attended interactive workshops focusing on Artificial Intelligence advancements, modern web system performance, and emerging tech stacks.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--accent-emerald)', paddingLeft: '1rem' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Department Hackathons & Coding Contests</h4>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Competitive Programming • Speed Debugging</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem' }}>
                  Actively participated in competitive coding contests, algorithmic problem-solving battles, and collaborative technical symposiums organized by the department.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
