export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & ML' | 'Enterprise Systems' | 'Full-Stack & Cloud' | 'Autonomous Agents';
  status: string;
  year: string;
  metricBadge: string;
  metricLabel?: string;
  metricScore?: string;
  metricProgress?: number; // 0 to 100
  summary: string;
  description: string;
  highlights: string[];
  architecture: string;
  tags: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudyAvailable?: boolean;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'PROFESSIONAL EXPERIENCE' | 'UNDERGRADUATE STUDIES' | 'SECONDARY EDUCATION';
  metrics?: string;
  achievements: string[];
  technologies: string[];
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  tagline: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    handle: string;
    status: string;
    roles: string[];
    bioShort: string;
    bioLong: string;
    location: string;
    coordinates: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    resumePdfUrl: string;
  };
  telemetry: {
    latency: string;
    stackRuntime: string;
    version: string;
    productionState: string;
  };
  heroMetrics: {
    id: string;
    label: string;
    value: string;
    subtitle: string;
    icon: string;
    color: string;
  }[];
  projects: Project[];
  timeline: ExperienceItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Gunasekhar Donkana",
    monogram: "GUNASEKHAR.D",
    handle: "@gunasai",
    status: "SYS.ONLINE // AVAILABLE FOR ROLES",
    roles: [
      "AI & ML ARCHITECT",
      "BACKEND SYSTEMS ENGINEER",
      "FASTAPI & MCP SPECIALIST"
    ],
    bioShort: "Computer Science undergraduate specializing in Artificial Intelligence & Data Science. Handcrafted predictive models with 0.91 R² variance & accelerated data pipeline throughput by 20% in production workflows.",
    bioLong: "Focused on building resilient computational infrastructure, production-grade Retrieval-Augmented Generation (RAG) engines, autonomous tool-calling agents, and high-concurrency microservices. Passionate about marrying algorithmic rigor with clean systems design.",
    location: "Tekkali, Andhra Pradesh, India",
    coordinates: "18.61° N, 84.23° E // ASIA_SOUTH",
    email: "gunasai2635@gmail.com",
    phone: "+91-7093609126",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumePdfUrl: "#resume"
  },

  telemetry: {
    latency: "<120ms",
    stackRuntime: "PYTHON 3.12 / FASTAPI / TYPESCRIPT",
    version: "PROD_READY // V2.5",
    productionState: "AUTONOMOUS_INFERENCE"
  },

  heroMetrics: [
    {
      id: "metric-1",
      label: "REGRESSION FIT",
      value: "0.91 R²",
      subtitle: "Diamond Price Predictive Model",
      icon: "analytics",
      color: "cyan"
    },
    {
      id: "metric-2",
      label: "THROUGHPUT GAIN",
      value: "+20%",
      subtitle: "Pipeline Latency Optimization",
      icon: "bolt",
      color: "cyan"
    },
    {
      id: "metric-3",
      label: "ALGORITHMIC LOGIC",
      value: "136+",
      subtitle: "LeetCode Algorithmic Problems Solved",
      icon: "terminal",
      color: "indigo"
    },
    {
      id: "metric-4",
      label: "ASYNC CAPACITY",
      value: "100+ req/s",
      subtitle: "FastAPI Microservices Throughput",
      icon: "dns",
      color: "cyan"
    }
  ],

  projects: [
    {
      id: "rag-assistant",
      title: "RAG Enterprise Knowledge Assistant",
      subtitle: "Multi-Tenant Hybrid Retrieval & Cross-Encoder Architecture",
      category: "AI & ML",
      status: "PRODUCTION_READY",
      year: "2026",
      metricBadge: "Hybrid BM25 + Dense RRF",
      metricLabel: "RETRIEVAL RELEVANCE PRECISION",
      metricScore: "96.4%",
      metricProgress: 96,
      summary: "Enterprise-grade, multi-tenant RAG system engineered with Dense + Sparse vector retrieval, Reciprocal Rank Fusion, and Cross-Encoder reranking.",
      description: "Solves enterprise proprietary document hallucination through a multi-tenant hybrid retrieval pipeline. Ingests PDFs, contracts, and unstructured text with document-level security filtering enforced directly at the vector database layer.",
      highlights: [
        "Implemented Hybrid Search combining Dense embeddings with BM25 sparse vectors and Reciprocal Rank Fusion (RRF).",
        "Cross-Encoder reranking pipeline maximizing precision on technical keywords, IDs, and complex clauses.",
        "Query rewriting engine using conversational history to disambiguate chained multi-turn questions.",
        "Stateless JWT authorization with tenant-isolated metadata filters preventing prompt-injection document leakage.",
        "Containerized Docker setup with automated CI/CD and AWS Terraform infrastructure modules."
      ],
      architecture: "Python 3.12 • FastAPI • Qdrant / Vector DB • BM25 • Cross-Encoder • LangChain • Docker • Terraform",
      tags: ["Python 3.12", "FastAPI", "Hybrid RAG", "Qdrant", "BM25", "Cross-Encoder", "Docker"],
      githubUrl: "https://github.com",
      liveDemoUrl: "#demo",
      caseStudyAvailable: true,
      featured: true
    },
    {
      id: "hrms-platform",
      title: "HRMS Enterprise Platform",
      subtitle: "Production-Grade Modular Monolith for Indian Labor Compliance",
      category: "Enterprise Systems",
      status: "PRODUCTION_READY",
      year: "2026",
      metricBadge: "141 Automated Tests // AES-256-GCM",
      metricLabel: "STATUTORY COMPLIANCE COVERAGE",
      metricScore: "100%",
      metricProgress: 100,
      summary: "High-throughput multi-tenant Human Resource Management and Payroll SaaS platform scaling from 50 to 50,000+ employees.",
      description: "Engineered strict statutory compliance for Indian labor law mandates (EPF, ESI, state-wise PT, and dual-regime Income Tax TDS). Enforces financial Maker-Checker segregation of duties with banking batch exports (NEFT/RTGS).",
      highlights: [
        "Architected enterprise Modular Monolith handling payroll calculation pipelines with high accuracy.",
        "Integrated mathematical geofencing with anti-spoofing biometric check-in verification.",
        "End-to-end data security utilizing AES-256-GCM encryption for bank account and tax identity persistence.",
        "Asynchronous task execution using Celery & Redis for scheduled monthly salary generation.",
        "141 comprehensive automated test suites across domain models, service layers, and statutory rules."
      ],
      architecture: "FastAPI 0.115+ • React 19 • TypeScript • PostgreSQL 16 • pgvector • Redis • Celery • Docker",
      tags: ["FastAPI", "React 19", "TypeScript", "PostgreSQL", "Redis", "Celery", "AES-256"],
      githubUrl: "https://github.com",
      liveDemoUrl: "#hrms-demo",
      caseStudyAvailable: true,
      featured: true
    },
    {
      id: "voice-mcp-assistant",
      title: "Voice-Based Intelligent Assistant using MCP",
      subtitle: "Real-Time Voice AI Agent with Model Context Protocol",
      category: "Autonomous Agents",
      status: "ACTIVE",
      year: "2025 - 2026",
      metricBadge: "120ms Latency // 15+ Voice Tools",
      metricLabel: "AUDIO BUFFER & PIPELINE ROUTING",
      metricScore: "120ms",
      metricProgress: 88,
      summary: "Ultra-low-latency desktop voice assistant and operating system agent powered by LiveKit Agents and Model Context Protocol.",
      description: "Engineered desktop workflow automation with context-aware tool routing. Users speak naturally to trigger local machine actions, query live tools, fetch data, and interact with complex developer tasks with negligible audio lag.",
      highlights: [
        "Average response latency of 120ms utilizing streaming audio chunk pipelines and WebRTC / LiveKit.",
        "Implemented standardized Model Context Protocol (MCP) clients to interact with external tools and OS services.",
        "Dynamic tool routing and fallback strategies preventing voice command hallucination.",
        "Integrated natural language parsing with real-time feedback loops and safety confirmations."
      ],
      architecture: "Python • LiveKit Agents • Model Context Protocol (MCP) • FastAPI • WebRTC • Whisper",
      tags: ["Python", "FastAPI", "MCP", "LiveKit Agents", "Voice AI", "LLM APIs"],
      githubUrl: "https://github.com",
      liveDemoUrl: "#voice-demo",
      caseStudyAvailable: true,
      featured: true
    },
    {
      id: "insightpulse",
      title: "InsightPulse: Real-Time Sentiment Platform",
      subtitle: "Cloud-Native NLP Classification Microservice & PWA",
      category: "AI & ML",
      status: "PRODUCTION_READY",
      year: "2025",
      metricBadge: "100+ Req/s // Dockerized PWA",
      metricLabel: "ASYMMETRIC THROUGHPUT (BENCHMARK)",
      metricScore: "124 req/s",
      metricProgress: 94,
      summary: "Production-ready sentiment analysis pipeline with FastAPI, Redis caching, MongoDB persistence, and an installable PWA frontend.",
      description: "Containerized real-time NLP classification microservice serving 100+ requests/second. Automated asynchronous data ingestion and preprocessing saving 30+ engineering hours/week.",
      highlights: [
        "High-performance FastAPI REST API with structured logging, JWT authentication, and strict rate-limiting.",
        "Redis-backed caching layer eliminating repeated model inference latency for frequent queries.",
        "Installable offline-capable Progressive Web App (PWA) with dark/light themes and real-time visualization charts.",
        "Complete ML Ops pipeline for training, versioning, and deploying model checkpoints with metrics tracking."
      ],
      architecture: "Python • FastAPI • Redis • MongoDB • Scikit-learn / Transformers • Docker • PWA",
      tags: ["Python", "FastAPI", "Redis", "Docker", "NLP Pipeline", "MongoDB", "PWA"],
      githubUrl: "https://github.com",
      liveDemoUrl: "#insightpulse-demo",
      caseStudyAvailable: true,
      featured: true
    },
    {
      id: "investiq-ai",
      title: "InvestIQ AI: Financial Portfolio Intelligence",
      subtitle: "Generative AI Portfolio Analyzer powered by Gemini",
      category: "Full-Stack & Cloud",
      status: "STABLE",
      year: "2026",
      metricBadge: "Gemini 2.5 Flash // Real-Time Analysis",
      metricLabel: "INSIGHT GENERATION CONFIDENCE",
      metricScore: "95%",
      metricProgress: 95,
      summary: "Financial intelligence application analyzing investment portfolios, sentiment trends, and market metrics using Google Gemini models.",
      description: "Combines an interactive modern interface with server-side rate-limited endpoints to give users deep qualitative analysis of securities, risk diversification scores, and predictive portfolio alerts.",
      highlights: [
        "Built responsive client interface with React 19, Tailwind CSS, and smooth Motion animation physics.",
        "Secure backend with Express, helmet hardening, and Gemini API streaming token generation.",
        "Contextual prompt engineering delivering structured JSON portfolio health metrics."
      ],
      architecture: "React 19 • TypeScript • Express.js • Google GenAI SDK • Motion • Tailwind CSS",
      tags: ["React 19", "TypeScript", "Gemini API", "Express", "Tailwind CSS", "Motion"],
      githubUrl: "https://github.com",
      liveDemoUrl: "#investiq-demo",
      caseStudyAvailable: false,
      featured: false
    },
    {
      id: "sri-tirumala-pos",
      title: "Sri Tirumala Dry Fruits: POS & E-Commerce",
      subtitle: "Enterprise Hybrid Retail Platform & WhatsApp Automation",
      category: "Enterprise Systems",
      status: "PRODUCTION_READY",
      year: "2026",
      metricBadge: "248 Tests Passing // Cryptographic Audit",
      metricLabel: "TEST SUITE RELIABILITY",
      metricScore: "100%",
      metricProgress: 100,
      summary: "Enterprise retail system harmonizing zero-latency physical POS counter terminals with digital e-commerce and WhatsApp alerts.",
      description: "Engineered for Sri Tirumala Dry Fruits & Millets (Tekkali, AP). Includes offline-resilient POS billing, centralized inventory reconciliation, automated WhatsApp order notifications, and a cryptographically chained immutable audit log.",
      highlights: [
        "Zero-latency physical checkout terminal with thermal receipt printing and barcode scanning.",
        "SQLite in WAL mode delivering rapid concurrent transactions without locking overhead.",
        "Automated WhatsApp notification pipeline using official business webhooks.",
        "248 automated Vitest unit, integration, and security test gates.",
        "OpenTelemetry tracing and containerized production deployment."
      ],
      architecture: "Node.js 20 LTS • TypeScript 5 • Express • SQLite (WAL) • Docker • Vitest • OpenTelemetry",
      tags: ["Node.js", "TypeScript", "SQLite WAL", "Docker", "Vitest", "WhatsApp API"],
      githubUrl: "https://github.com",
      liveDemoUrl: "#retail-demo",
      caseStudyAvailable: true,
      featured: false
    },
    {
      id: "shipment-sure",
      title: "Shipment Sure: On-Time Delivery Prediction",
      subtitle: "Logistics Machine Learning Pipeline on 100K+ Shipments",
      category: "AI & ML",
      status: "STABLE",
      year: "2025",
      metricBadge: "88% Accuracy // ROC-AUC 0.92",
      metricLabel: "ROC-AUC CLASSIFICATION SCORE",
      metricScore: "0.92",
      metricProgress: 88,
      summary: "Predictive logistics classification pipeline trained on 100,000+ shipment records forecasting delivery risk across 40+ daily transit routes.",
      description: "Combines feature engineering on historical delivery routes, carrier reliability indexes, weather anomalies, and dispatch timestamps to identify delayed shipments prior to transit departure.",
      highlights: [
        "Trained ensemble models (XGBoost, Random Forest, LightGBM) achieving 88% overall accuracy and 0.92 ROC-AUC.",
        "Processed 100,000+ logistical datasets with robust imputation and categorical encoding.",
        "Engineered real-time evaluation dashboard highlighting highest-risk delivery corridors."
      ],
      architecture: "Python • Scikit-learn • XGBoost • Pandas • NumPy • Matplotlib • Streamlit",
      tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Logistics ML"],
      githubUrl: "https://github.com",
      liveDemoUrl: "#shipment-demo",
      caseStudyAvailable: false,
      featured: false
    },
    {
      id: "resume-screening-agent",
      title: "AI Resume Screening & Ranking Agent",
      subtitle: "Semantic HR Candidate Evaluation & Automated Reporting",
      category: "Autonomous Agents",
      status: "STABLE",
      year: "2025",
      metricBadge: "Transformer Embeddings // Voice JD Input",
      metricLabel: "MATCHING ACCURACY & SPEED",
      metricScore: "92%",
      metricProgress: 92,
      summary: "Intelligent HR-tech platform automating batch resume parsing, semantic embedding matching against job descriptions, and PDF reporting.",
      description: "Accelerates recruitment triage by extracting candidate skills, experience, and certifications from heterogeneous resume formats (PDF/DOCX/TXT) and ranking them against job descriptions via embedding vector similarity.",
      highlights: [
        "Batch resume processing pipeline with robust text extraction and entity normalization.",
        "Voice input option allowing recruiters to dictate job descriptions directly through microphone audio.",
        "Automated summary report generator compiling stylized PDF scorecards for hiring managers."
      ],
      architecture: "Python • Sentence-Transformers • Streamlit • SQLite • ReportLab • Whisper Speech API",
      tags: ["Python", "NLP", "Transformers", "Streamlit", "Resume Parsing", "SQLite"],
      githubUrl: "https://github.com",
      liveDemoUrl: "#resume-demo",
      caseStudyAvailable: false,
      featured: false
    },
    {
      id: "diamond-price-model",
      title: "Diamond Price Predictive Modeling",
      subtitle: "Machine Learning Regression Internship at Blackbuck (IIDT)",
      category: "AI & ML",
      status: "COMPLETED",
      year: "2024",
      metricBadge: "0.91 R² Variance // 50K+ Records",
      metricLabel: "REGRESSION FIT COEFFICIENT",
      metricScore: "0.91 R²",
      metricProgress: 91,
      summary: "High-variance diamond valuation model trained on 50,000+ records achieving 0.91 R² and reducing preprocessing latency by 20%.",
      description: "Developed during the Machine Learning Internship at Blackbuck (IIDT). Included comprehensive exploratory data analysis, outlier pruning, multi-collinearity checks, and fine-tuned regression architectures.",
      highlights: [
        "Trained Random Forest and Gradient Boosted regressors on 50,000+ multidimensional diamond specimens.",
        "Achieved exceptional 0.91 R² predictive correlation on unseen evaluation holdouts.",
        "Optimized feature engineering pipeline, reducing end-to-end data transformation latency by 20%."
      ],
      architecture: "Python • Scikit-learn • Pandas • NumPy • Seaborn • Matplotlib",
      tags: ["Python", "Scikit-learn", "Random Forest", "Pandas", "NumPy", "EDA"],
      githubUrl: "https://github.com",
      liveDemoUrl: "#diamond-demo",
      caseStudyAvailable: true,
      featured: false
    }
  ],

  timeline: [
    {
      id: "exp-1",
      role: "Machine Learning Intern",
      organization: "Blackbuck (IIDT)",
      period: "May 2024 – Jul 2024",
      type: "PROFESSIONAL EXPERIENCE",
      metrics: "R² = 0.91 // -20% Pipeline Latency",
      achievements: [
        "Trained Random Forest regression model on 50,000+ records achieving R² = 0.91 for high-variance valuation accuracy.",
        "Re-engineered data preprocessing and feature transformation pipelines, reducing latency by 20% across live production workflows.",
        "Conducted multi-variable correlation analysis, principal component diagnostics, and model checkpointing."
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Git", "EDA"],
      icon: "work"
    },
    {
      id: "exp-2",
      role: "B.Tech in Artificial Intelligence & Data Science",
      organization: "Sagi Ramakrishnam Raju Engineering College (SRKR), Bhimavaram",
      period: "Nov 2022 – May 2026",
      type: "UNDERGRADUATE STUDIES",
      metrics: "CGPA: 7.75 / 10.0",
      achievements: [
        "Specializing in Advanced Machine Learning, Natural Language Processing, Distributed Systems, and Database Architectures.",
        "Active member of Technical Coding Clubs; solved 136+ algorithmic problems across dynamic programming, graphs, and greedy paradigms.",
        "Lead architect on multiple end-to-end applied engineering projects including Enterprise RAG and Compliant HRMS SaaS."
      ],
      technologies: ["AI & Data Science", "DSA", "Distributed Systems", "FastAPI", "Database Design"],
      icon: "school"
    },
    {
      id: "exp-3",
      role: "Intermediate (MPC)",
      organization: "Viswa Jyothi Junior College, Tekkali",
      period: "Aug 2020 – May 2022",
      type: "SECONDARY EDUCATION",
      metrics: "CGPA: 7.5 / 10.0",
      achievements: [
        "Strong foundation in Mathematics, Physics, and Chemistry.",
        "Developed analytical problem-solving skills and algorithmic thinking early in academic trajectory."
      ],
      technologies: ["Calculus", "Linear Algebra", "Physics", "Analytical Problem Solving"],
      icon: "school"
    }
  ],

  skills: [
    {
      title: "Core Languages",
      icon: "code",
      color: "cyan",
      tagline: "CORE_RUNTIME // 5 ENGINES",
      skills: [
        { name: "Python", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Java", highlight: false },
        { name: "SQL", highlight: true },
        { name: "JavaScript", highlight: false },
        { name: "C", highlight: false },
        { name: "C++", highlight: false }
      ]
    },
    {
      title: "Backend & Systems",
      icon: "hub",
      color: "indigo",
      tagline: "HIGH-CONCURRENCY ARCH",
      skills: [
        { name: "FastAPI", highlight: true },
        { name: "Node.js / Express", highlight: true },
        { name: "Model Context Protocol (MCP)", highlight: true },
        { name: "REST & WebSockets", highlight: false },
        { name: "Microservice Design", highlight: true },
        { name: "Statutory Payroll Engines", highlight: false },
        { name: "Celery & Task Queues", highlight: false }
      ]
    },
    {
      title: "AI, ML & NLP",
      icon: "psychology",
      color: "cyan",
      tagline: "INFERENCE & VECTOR OPT",
      skills: [
        { name: "Hybrid RAG (Dense + BM25)", highlight: true },
        { name: "Cross-Encoder Reranking", highlight: true },
        { name: "Sentence Transformers", highlight: true },
        { name: "Scikit-learn", highlight: true },
        { name: "Pandas & NumPy", highlight: false },
        { name: "XGBoost", highlight: false },
        { name: "Vector DBs (Qdrant, pgvector)", highlight: true }
      ]
    },
    {
      title: "Databases & DevOps",
      icon: "deployed_code",
      color: "indigo",
      tagline: "CONTAINERS & CI/CD",
      skills: [
        { name: "Docker & Containerization", highlight: true },
        { name: "PostgreSQL & pgvector", highlight: true },
        { name: "Redis Caching", highlight: true },
        { name: "SQLite (WAL Mode)", highlight: false },
        { name: "MongoDB", highlight: false },
        { name: "Git & GitHub Actions CI/CD", highlight: true },
        { name: "Terraform (IaC)", highlight: false }
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "136+ Algorithmic Challenges",
      issuer: "LeetCode Platform",
      description: "Solved comprehensive problem sets across arrays, dynamic programming, two pointers, and graph traversals.",
      icon: "terminal",
      badge: "DSA // VERIFIED"
    },
    {
      id: "cert-2",
      title: "Deloitte Data Analytics Simulation",
      issuer: "Forage / Deloitte",
      description: "Virtual simulation focused on forensic data analysis, business metric telemetry, and predictive modeling.",
      icon: "insights",
      badge: "ANALYTICS // ACCREDITED"
    },
    {
      id: "cert-3",
      title: "AI Fundamentals Certification",
      issuer: "Infosys Springboard",
      description: "Comprehensive multi-modular accreditation covering deep learning principles, neural networks, and AI ethics.",
      icon: "verified",
      badge: "AI/ML // CERTIFIED"
    }
  ]
};
