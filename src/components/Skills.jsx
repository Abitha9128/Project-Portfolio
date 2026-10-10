import React, { useState, useMemo } from 'react';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = useMemo(() => {
    if (activeTab === 'all') return skillsData;
    return skillsData.filter(s => s.category === activeTab);
  }, [activeTab]);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Capabilities</div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            A balanced toolkit covering modern frontend development, programming fundamentals, relational databases, and collaborative workflows.
          </p>
        </div>

        {/* Skills Category Filter Tabs */}
        <div className="skills-filter-tabs">
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'frontend', label: 'Web & Frontend' },
            { id: 'languages', label: 'Core Languages' },
            { id: 'backend', label: 'Databases & Systems' },
            { id: 'tools', label: 'Tools & Version Control' }
          ].map(tab => (
            <button
              key={tab.id}
              className={`filter-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap">{skill.icon}</div>
                <span className="skill-badge">{skill.level}% Proficiency</span>
              </div>
              <div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-desc">{skill.desc}</p>
              </div>
              <div className="skill-meter-wrap">
                <div className="skill-meter-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
