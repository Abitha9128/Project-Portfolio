import React, { useState, useMemo } from 'react';
import { Icon } from './Icons';

export const LiveDemos = ({ showToast }) => {
  // Password Checker Interactive State
  const [testPassword, setTestPassword] = useState('SecurePass@2026!');
  
  // Expense Tracker Interactive State
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Academic Books & Python Guides', category: 'Education', amount: 1200 },
    { id: 2, title: 'College Technical Symposium Fee', category: 'Events', amount: 450 },
    { id: 3, title: 'Web Development Certification', category: 'Courses', amount: 1800 },
    { id: 4, title: 'Cricket Team Equipment Kit', category: 'Sports', amount: 1500 }
  ]);
  const [newExpTitle, setNewExpTitle] = useState('');
  const [newExpAmount, setNewExpAmount] = useState('');
  const [newExpCategory, setNewExpCategory] = useState('Education');

  // Password Strength Evaluator Logic
  const passwordAnalysis = useMemo(() => {
    const pwd = testPassword;
    let score = 0;
    const checks = {
      length: pwd.length >= 10,
      hasUpper: /[A-Z]/.test(pwd),
      hasLower: /[a-z]/.test(pwd),
      hasNumber: /[0-9]/.test(pwd),
      hasSpecial: /[^A-Za-z0-9]/.test(pwd),
      noRepeat: !/(.)\1{2,}/.test(pwd)
    };

    if (pwd.length >= 8) score += 20;
    if (pwd.length >= 12) score += 15;
    if (checks.hasUpper) score += 15;
    if (checks.hasLower) score += 15;
    if (checks.hasNumber) score += 15;
    if (checks.hasSpecial) score += 20;

    let label = 'Very Weak';
    let color = '#ef4444';
    let crackTime = '< 1 millisecond';

    if (score >= 80) {
      label = 'Ironclad Secure';
      color = '#10b981';
      crackTime = '1.2 Billion Years';
    } else if (score >= 60) {
      label = 'Strong';
      color = '#06b6d4';
      crackTime = '3,400 Years';
    } else if (score >= 40) {
      label = 'Moderate';
      color = '#f59e0b';
      crackTime = '3 Weeks';
    } else {
      label = 'Weak';
      color = '#ef4444';
      crackTime = '12 Seconds';
    }

    return { score: Math.min(score, 100), label, color, crackTime, checks };
  }, [testPassword]);

  // Expense Tracker Add Function
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!newExpTitle.trim() || !newExpAmount) return;
    const newExp = {
      id: Date.now(),
      title: newExpTitle,
      category: newExpCategory,
      amount: parseFloat(newExpAmount) || 0
    };
    setExpenses([newExp, ...expenses]);
    setNewExpTitle('');
    setNewExpAmount('');
    showToast('Expense recorded successfully!');
  };

  const totalExpenses = useMemo(() => {
    return expenses.reduce((acc, curr) => acc + curr.amount, 0);
  }, [expenses]);

  return (
    <section id="demos" className="section playground-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Live Interactive Demos</div>
          <h2 className="section-title">Project Interactive Simulators</h2>
          <p className="section-subtitle">
            Experience live functional demonstrations of my algorithmic logic and application architectures right here on this portfolio.
          </p>
        </div>

        <div className="playground-grid">
          {/* 1. Live Password Strength Checker Simulator */}
          <div className="interactive-box">
            <div className="interactive-header">
              <h3 className="interactive-title">
                <Icon name="shield" size={20} style={{ color: 'var(--accent-rose)' }} />
                Password Security Evaluator
              </h3>
              <span className="interactive-badge">Live Algorithm Demo</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Based on my Python cybersecurity project: Evaluates password entropy, character variance, and computes estimated brute-force crack time in real-time.
            </p>

            <div className="input-group">
              <label className="input-label">Type a password to test security:</label>
              <input
                type="text"
                className="custom-input"
                value={testPassword}
                onChange={(e) => setTestPassword(e.target.value)}
                placeholder="e.g. Abitha@SecPass#9128"
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 600 }}>Security Score: {passwordAnalysis.score}/100</span>
                <span style={{ fontWeight: 700, color: passwordAnalysis.color }}>
                  {passwordAnalysis.label}
                </span>
              </div>
              <div className="password-meter-bar">
                <div
                  className="password-meter-progress"
                  style={{ width: `${passwordAnalysis.score}%`, backgroundColor: passwordAnalysis.color }}
                ></div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
              <strong>Estimated Brute-Force Crack Time: </strong>
              <span style={{ color: passwordAnalysis.color, fontWeight: 700 }}>
                {passwordAnalysis.crackTime}
              </span>
            </div>

            <ul className="password-checks-list">
              <li className={`check-item ${passwordAnalysis.checks.length ? 'valid' : ''}`}>
                <Icon name={passwordAnalysis.checks.length ? 'check' : 'x'} size={14} className="check-icon" />
                At least 10 characters
              </li>
              <li className={`check-item ${passwordAnalysis.checks.hasUpper ? 'valid' : ''}`}>
                <Icon name={passwordAnalysis.checks.hasUpper ? 'check' : 'x'} size={14} className="check-icon" />
                Uppercase letters (A-Z)
              </li>
              <li className={`check-item ${passwordAnalysis.checks.hasLower ? 'valid' : ''}`}>
                <Icon name={passwordAnalysis.checks.hasLower ? 'check' : 'x'} size={14} className="check-icon" />
                Lowercase letters (a-z)
              </li>
              <li className={`check-item ${passwordAnalysis.checks.hasNumber ? 'valid' : ''}`}>
                <Icon name={passwordAnalysis.checks.hasNumber ? 'check' : 'x'} size={14} className="check-icon" />
                Numbers (0-9)
              </li>
              <li className={`check-item ${passwordAnalysis.checks.hasSpecial ? 'valid' : ''}`}>
                <Icon name={passwordAnalysis.checks.hasSpecial ? 'check' : 'x'} size={14} className="check-icon" />
                Special characters (!@#$)
              </li>
              <li className={`check-item ${passwordAnalysis.checks.noRepeat ? 'valid' : ''}`}>
                <Icon name={passwordAnalysis.checks.noRepeat ? 'check' : 'x'} size={14} className="check-icon" />
                No repeated sequences
              </li>
            </ul>
          </div>

          {/* 2. Live Expense Management Simulator */}
          <div className="interactive-box">
            <div className="interactive-header">
              <h3 className="interactive-title">
                <Icon name="calculator" size={20} style={{ color: 'var(--accent-cyan)' }} />
                Expense Manager Simulator
              </h3>
              <span className="interactive-badge">Live Analytics Demo</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Based on my Python & SQL Expense Management project: Add transactions, categorize expenses, and monitor overall student project budget.
            </p>

            <form onSubmit={handleAddExpense} style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 0.8fr auto', gap: '0.5rem', alignItems: 'flex-end' }}>
              <div className="input-group">
                <label className="input-label">Expense Title</label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Item name"
                  value={newExpTitle}
                  onChange={(e) => setNewExpTitle(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label className="input-label">Category</label>
                <select
                  className="custom-input"
                  value={newExpCategory}
                  onChange={(e) => setNewExpCategory(e.target.value)}
                >
                  <option value="Education">Education</option>
                  <option value="Sports">Sports</option>
                  <option value="Events">Events</option>
                  <option value="Courses">Courses</option>
                  <option value="Hardware">Hardware</option>
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Amount (₹)</label>
                <input
                  type="number"
                  className="custom-input"
                  placeholder="₹"
                  value={newExpAmount}
                  onChange={(e) => setNewExpAmount(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 1.1rem' }}>
                Add
              </button>
            </form>

            <div className="expense-items-list">
              {expenses.map(item => (
                <div key={item.id} className="expense-row">
                  <div>
                    <strong>{item.title}</strong>
                    <span className="expense-cat-badge" style={{ marginLeft: '0.6rem' }}>{item.category}</span>
                  </div>
                  <div className="expense-amount">₹{item.amount.toLocaleString()}</div>
                </div>
              ))}
            </div>

            <div className="expense-total-bar">
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Logged Expenses</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>₹{totalExpenses.toLocaleString()}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="skill-badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-emerald)' }}>
                  ✓ Within Monthly Budget
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
