import React from 'react';
import { Icon } from './Icons';
import { projectsData } from '../data/portfolioData';

export const Projects = ({ onSelectProject }) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Portfolio Works</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Key software solutions developed using modern web stacks and Python programming.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map(proj => (
            <div key={proj.id} className="project-card">
              <div className={`project-banner ${proj.iconBg}`}>
                <span className="project-icon-large">{proj.iconSymbol}</span>
                <span className="project-tag-floating">{proj.badge}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-description">{proj.shortDesc}</p>
                
                <div className="project-tech-stack">
                  {proj.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                    onClick={() => onSelectProject(proj)}
                  >
                    <span>System Architecture</span>
                    <Icon name="external" size={14} />
                  </button>
                  <a
                    href="#demos"
                    className="btn btn-secondary btn-sm"
                    title="Try Live Interactive Demo"
                  >
                    <Icon name="zap" size={14} />
                    <span>Try Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
