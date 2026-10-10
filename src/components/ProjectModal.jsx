import React from 'react';
import { Icon } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <Icon name="x" size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '2rem' }}>{project.iconSymbol}</span>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
            <span className="skill-badge">{project.badge}</span>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: '1rem 0' }}>
          {project.shortDesc}
        </p>

        <h4 style={{ fontSize: '1.05rem', marginTop: '1.25rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
          Key Capabilities & Features:
        </h4>
        <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.92rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {project.features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>

        <h4 style={{ fontSize: '1.05rem', marginTop: '1.25rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
          Technical Architecture:
        </h4>
        <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          {project.architecture}
        </div>

        <h4 style={{ fontSize: '1.05rem', marginTop: '1.25rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
          Technologies Used:
        </h4>
        <div className="project-tech-stack" style={{ marginBottom: '1.5rem' }}>
          {project.tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a
            href="#demos"
            className="btn btn-primary"
            style={{ flex: 1 }}
            onClick={onClose}
          >
            <Icon name="zap" size={16} />
            <span>Try In Live Playground</span>
          </a>
          <button
            className="btn btn-secondary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
