# ✨ Abitha Arul Vijayalakshmi — React Portfolio Project

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Modern_Design_System-1572B6?style=for-the-badge&logo=css3)](src/styles/index.css)
[![Status](https://img.shields.io/badge/Status-Available_for_Opportunities-10b981?style=for-the-badge)](mailto:abitha9128@gmail.com)

A modern, responsive React portfolio web application for **Abitha Arul Vijayalakshmi**, built with **React 18** and **Vite**. Features interactive project simulators, an animated skills matrix, education timeline, leadership highlights, and personal contact integrations.

---

## 📁 React Project Structure

```
Project-Portfolio/
├── public/                      # Static public assets
│   ├── profile.jpeg             # Profile photograph
│   ├── resume.pdf               # Downloadable CV
│   └── favicon.svg              # Custom brand favicon
├── src/
│   ├── components/              # Modular React UI components
│   │   ├── Navbar.jsx           # Glassmorphism navigation with theme toggle
│   │   ├── Hero.jsx             # Hero section with profile photo & floating badges
│   │   ├── About.jsx            # Career objective & background
│   │   ├── Skills.jsx           # Filterable technical skills matrix
│   │   ├── Projects.jsx         # Flagship project cards & modal triggers
│   │   ├── LiveDemos.jsx        # Password security evaluator & expense simulator
│   │   ├── Education.jsx        # Academic timeline (B.E. 85%, HSC, SSLC)
│   │   ├── Training.jsx         # Web development & Python trainings
│   │   ├── Leadership.jsx       # Cricket captaincy, football & NSS activities
│   │   ├── Contact.jsx          # One-click email, call, WhatsApp & contact form
│   │   ├── Footer.jsx           # Footer with links & back-to-top button
│   │   ├── ProjectModal.jsx     # System architecture dialog
│   │   └── Icons.jsx            # Zero-dependency SVG icons
│   ├── data/
│   │   └── portfolioData.js     # Centralized resume & portfolio content
│   ├── styles/
│   │   └── index.css            # Glassmorphism, CSS variables & animations
│   ├── App.jsx                  # Root application component
│   └── main.jsx                 # React 18 DOM entry point
├── .gitignore                   # Standard gitignore (node_modules, dist, etc.)
├── index.html                   # Vite HTML entry template
├── package.json                 # Scripts and dependencies
├── vite.config.js               # Vite configuration
└── README.md                    # Documentation
```

---

## ⚡ Getting Started (Once Node.js is Installed)

When you download and install [Node.js](https://nodejs.org/) (recommended LTS version):

### 1. Install Dependencies
Open your terminal (PowerShell or Command Prompt) in this project folder and run:
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
The site will spin up at **`http://localhost:3000`** (or `http://localhost:5173`) with Hot Module Replacement (HMR).

### 3. Build for Production
When you're ready to deploy to production:
```bash
npm run build
```
This generates an optimized, minified bundle inside the `dist/` folder ready for deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🌟 Key Application Features

- **⚛️ Pure Modular React 18 Architecture**: Clean separation of components, state, hooks (`useState`, `useEffect`, `useMemo`), and data models.
- **📸 High-Resolution Profile Showcase**: Profile photo framed with glowing neon ambient effects and floating tech badges.
- **🛡️ Interactive Password Security Evaluator**: Type in passwords to calculate entropy score, detect vulnerabilities, and estimate brute-force cracking time.
- **📊 Interactive Expense Management Simulator**: Add expense items, select categories, and track monthly totals against budget.
- **🎨 Glassmorphism & Theme Switching**: Custom CSS design system with dark/light mode toggle.
- **📱 Full Mobile Responsiveness**: Works seamlessly across smartphones, tablets, and desktop displays.

---

## 👤 Author

**Abitha Arul Vijayalakshmi**
- 🎓 B.E. Computer Science and Engineering — K. Ramakrishnan College of Technology (Anna University)
- 📧 Email: [abitha9128@gmail.com](mailto:abitha9128@gmail.com)
- 📱 Phone: +91 8807256714
- 📍 Location: Cuddalore / Trichy, Tamil Nadu, India