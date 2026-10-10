// Portfolio Data for Abitha Arul Vijayalakshmi
export const personalInfo = {
  name: "Abitha Arul Vijayalakshmi",
  shortName: "Abitha",
  title: "Computer Science Engineer | Full-Stack & Software Developer",
  status: "Available for Internships & Projects",
  profileImage: "/profile.jpeg",
  resumeFile: "/resume.pdf",
  email: "abitha9128@gmail.com",
  phone: "+91 8807256714",
  rawPhone: "8807256714",
  whatsappUrl: "https://wa.me/918807256714?text=Hi%20Abitha,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect!",
  location: "No: 74(2), North Street, Kilkangeyankuppam, Cuddalore, TN",
  college: "K. Ramakrishnan College of Technology (Anna University)",
  degree: "B.E. Computer Science and Engineering",
  academicScore: "85% (Up to 3rd Sem)",
  objective: "To be a part of a reputed and pioneering organization in the Software and Hardware industry which provides a varied range of services and a platform for its employees to grow as successful professionals.",
  bio: "Pre-final B.E. Computer Science Engineering student at K. Ramakrishnan College of Technology (Anna University, 85%). Passionate about architecting modern React web systems, Python-powered automation, robust databases, and data-driven software solutions.",
  githubUrl: "https://github.com/Abitha9128/Project-Portfolio"
};

export const metricsData = [
  { value: "85%", label: "B.E. Academic Score" },
  { value: "3+", label: "Flagship Projects" },
  { value: "8+", label: "Core Technologies" },
  { value: "Captain", label: "College Cricket Team" }
];

export const skillsData = [
  { name: "React.js", category: "frontend", level: 88, icon: "⚡", desc: "SPA development, hooks, component state & modern UI rendering" },
  { name: "JavaScript (ES6+)", category: "frontend", level: 90, icon: "📜", desc: "Async/await, DOM APIs, event loop, functional programming" },
  { name: "HTML5 & CSS3", category: "frontend", level: 95, icon: "🎨", desc: "Semantic layouts, Flexbox, Grid, CSS animations & responsive design" },
  { name: "Python", category: "languages", level: 92, icon: "🐍", desc: "Core OOP, automation scripts, algorithms, data management" },
  { name: "C++", category: "languages", level: 85, icon: "⚙️", desc: "Object-oriented programming, data structures, algorithm problem solving" },
  { name: "Java", category: "languages", level: 84, icon: "☕", desc: "Object design, inheritance, interfaces, standard library" },
  { name: "SQL & DBMS", category: "backend", level: 86, icon: "🗄️", desc: "Relational database schema, indexing, joins, CRUD operations" },
  { name: "Git & GitHub", category: "tools", level: 85, icon: "🐙", desc: "Version control, repository management, collaborative workflows" }
];

export const projectsData = [
  {
    id: "collab-hub",
    title: "Student Collaboration Hub",
    badge: "Web Application",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Responsive UI"],
    shortDesc: "A unified interactive digital platform for college students to share academic resources, organize study groups, and collaborate on peer projects.",
    iconBg: "project-banner-bg-1",
    iconSymbol: "🤝",
    features: [
      "Dynamic subject-wise notes and question paper repository",
      "Interactive peer study group finder and team project boards",
      "Discussion board with real-time client-side filter and search",
      "Mobile-responsive layout optimized for campus student access"
    ],
    architecture: "Frontend client built using semantic HTML5, modern CSS3 animations, and vanilla JavaScript event delegation. Client-side state managed with persistent LocalStorage.",
    githubUrl: "https://github.com/Abitha9128/Project-Portfolio"
  },
  {
    id: "expense-system",
    title: "Expense Management System",
    badge: "Python & Data Analysis",
    tech: ["Python", "SQLite", "Data Analytics", "CLI / GUI", "File I/O"],
    shortDesc: "A comprehensive personal financial management system for logging expenditures, setting budget thresholds, and analyzing monthly spending patterns.",
    iconBg: "project-banner-bg-2",
    iconSymbol: "📊",
    features: [
      "Categorized expense tracking (Education, Sports, Travel, Tech)",
      "Automated monthly budget threshold alerts and variance reports",
      "SQL database backend ensuring transactional data integrity",
      "Data aggregation module producing spending trend summaries"
    ],
    architecture: "Modular Python application utilizing Object-Oriented principles, SQLite relational schema for transaction storage, and data categorization algorithms.",
    githubUrl: "https://github.com/Abitha9128/Project-Portfolio"
  },
  {
    id: "password-checker",
    title: "Password Strength & Security Checker",
    badge: "Cybersecurity & Python",
    tech: ["Python", "Regex", "Cryptography Concepts", "Security Scoring"],
    shortDesc: "An intelligent cybersecurity evaluation tool that assesses password robustness through entropy calculation, vulnerability pattern checks, and feedback.",
    iconBg: "project-banner-bg-3",
    iconSymbol: "🛡️",
    features: [
      "Mathematical entropy calculation based on character pool diversity",
      "Detection of common dictionary words, repeated characters & sequences",
      "Real-time security score grading (Weak, Moderate, Strong, Ironclad)",
      "Actionable security recommendations for strengthening credentials"
    ],
    architecture: "Pattern matching engine built using regular expressions and character frequency analysis, scoring passwords against known brute-force computational times.",
    githubUrl: "https://github.com/Abitha9128/Project-Portfolio"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.) - Computer Science",
    institution: "K. Ramakrishnan College of Technology (Anna University)",
    year: "2025 – 2029 (Expected)",
    score: "85% Upto 3rd Sem",
    scoreBadgeClass: "timeline-badge",
    description: "Pursuing undergraduate degree in Computer Science and Engineering. Rigorous coursework covering Data Structures, C++ Programming, Database Management Systems, Computer Networks, and Object-Oriented Software Design. Maintaining an exceptional 85% aggregate score."
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Vijay Vikas International School (CBSE)",
    year: "2025",
    score: "65.2%",
    scoreBadgeClass: "timeline-badge",
    description: "Completed secondary education with focused studies in Mathematics, Physics, Chemistry, and Computer Science fundamentals. Developed logical reasoning and scientific problem-solving methodology."
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC - 10th)",
    institution: "Vijay Vikas International School (CBSE)",
    year: "2023",
    score: "67.8%",
    scoreBadgeClass: "timeline-badge",
    description: "Solid foundational grounding across science, mathematics, language arts, and social sciences with active participation in inter-school competitions."
  }
];

export const leadershipData = [
  {
    role: "Captain of College Cricket Team",
    category: "Team Leadership",
    icon: "🏏",
    iconClass: "leadership-icon-cricket",
    desc: "Leading the college cricket squad through inter-collegiate tournament matches. Responsible for on-field tactical decision-making, field placements, motivating the bowling and batting lineups, and upholding team unity under high-pressure scenarios.",
    badge: "Strategic Planning & Composure"
  },
  {
    role: "Active Participant in Football",
    category: "Athletic Teamwork",
    icon: "⚽",
    iconClass: "leadership-icon-football",
    desc: "Active football player representing competitive collegiate fixtures. Developed quick reflexes, tactical spatial positioning, endurance, and seamless coordination with teammates in dynamic match conditions.",
    badge: "Agility & Team Synergy"
  },
  {
    role: "Active NSS Volunteer",
    category: "Community Service",
    icon: "🤝",
    iconClass: "leadership-icon-nss",
    desc: "Dedicated member of the National Service Scheme (NSS) unit at college. Organized community welfare camps, environmental sustainability awareness campaigns, blood donation drives, and public outreach initiatives.",
    badge: "Social Empathy & Organization"
  }
];
