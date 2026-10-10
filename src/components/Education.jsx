import React from 'react';
import { educationData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Academic Milestones</div>
          <h2 className="section-title">Educational Journey</h2>
          <p className="section-subtitle">
            Academic qualifications demonstrating consistent distinction, technical foundation, and dedication.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {educationData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                {idx === 0 ? '🎓' : idx === 1 ? '📚' : '🏫'}
              </div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <div className="timeline-school">{item.institution}</div>
                  </div>
                  <span
                    className="timeline-badge"
                    style={idx > 0 ? { background: 'rgba(99, 102, 241, 0.15)', color: 'var(--primary)' } : {}}
                  >
                    {item.score}
                  </span>
                </div>
                <div className="timeline-meta">
                  <span><strong>Duration / Year:</strong> {item.year}</span>
                </div>
                <p className="timeline-desc">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
