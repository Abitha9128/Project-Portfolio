import React, { useState } from 'react';
import { Icon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact = ({ showToast }) => {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      showToast('Thank you! Your message was received.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Interested in offering an internship, collaborating on a project, or discussing engineering roles? Feel free to reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Direct Info Cards */}
          <div className="contact-info-card">
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Contact Information
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                Always eager to discuss technology, software engineering challenges, and new career opportunities.
              </p>

              <div className="contact-channel-list">
                {/* Email */}
                <div className="contact-channel-item">
                  <div className="channel-left">
                    <div className="channel-icon">
                      <Icon name="mail" size={20} />
                    </div>
                    <div>
                      <div className="channel-title">Email Address</div>
                      <a href={`mailto:${personalInfo.email}`} className="channel-val" style={{ textDecoration: 'none', color: 'inherit' }}>
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    className="channel-action-btn"
                    onClick={() => copyToClipboard(personalInfo.email, 'Email')}
                    title="Copy Email"
                  >
                    <Icon name="copy" size={18} />
                  </button>
                </div>

                {/* Phone */}
                <div className="contact-channel-item">
                  <div className="channel-left">
                    <div className="channel-icon">
                      <Icon name="phone" size={20} />
                    </div>
                    <div>
                      <div className="channel-title">Phone Number</div>
                      <a href={`tel:${personalInfo.rawPhone}`} className="channel-val" style={{ textDecoration: 'none', color: 'inherit' }}>
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    className="channel-action-btn"
                    onClick={() => copyToClipboard(personalInfo.rawPhone, 'Phone Number')}
                    title="Copy Phone"
                  >
                    <Icon name="copy" size={18} />
                  </button>
                </div>

                {/* WhatsApp Direct */}
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-left">
                    <div className="channel-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-emerald)' }}>
                      <Icon name="whatsapp" size={20} />
                    </div>
                    <div>
                      <div className="channel-title">WhatsApp Chat</div>
                      <div className="channel-val">{personalInfo.phone}</div>
                    </div>
                  </div>
                  <span style={{ color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: 600 }}>Message ↗</span>
                </a>

                {/* Location */}
                <div className="contact-channel-item">
                  <div className="channel-left">
                    <div className="channel-icon">
                      <Icon name="location" size={20} />
                    </div>
                    <div>
                      <div className="channel-title">Location</div>
                      <div className="channel-val">{personalInfo.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              Send a Direct Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              Fill out the form below to initiate a conversation directly.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <label className="input-label">Your Name</label>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="e.g. Recruiter / Collaborator"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Your Email</label>
                  <input
                    type="email"
                    className="custom-input"
                    placeholder="name@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="input-group">
                <label className="input-label">Subject</label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Internship / Project Opportunity"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="input-group">
                <label className="input-label">Your Message</label>
                <textarea
                  className="custom-input"
                  placeholder="Hello Abitha, I came across your portfolio and wanted to reach out regarding..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={formStatus === 'sending'}
                style={{ width: '100%' }}
              >
                <Icon name="mail" size={18} />
                <span>{formStatus === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
              </button>

              {formStatus === 'success' && (
                <div className="form-alert form-alert-success">
                  <Icon name="check" size={18} />
                  <span>Message sent successfully! You can also click the email above to mail directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
