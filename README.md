# Gunasekhar Donkana — 3D Cybernetic AI Engineer Portfolio

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite 6](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-0.170-black?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org)

An ultra-modern, high-performance developer portfolio built with **React 19**, **Vite 6**, **TypeScript**, **Tailwind CSS**, and an interactive **Three.js WebGL 3D neural core**. Designed directly from the **Stitch Obsidian Cybernetic Design System** (Project ID `13424564278140931304`).

---

## ⚡ Core Features & Architecture

- **Interactive 3D WebGL Hero Stage:** Built with Three.js featuring an illuminated faceted icosahedron core, dual orbital rings, and a 420-particle constellation reacting smoothly to cursor movement and page scroll.
- **Single Source of Truth (`src/data/portfolioData.ts`):** All projects, skills, metrics, experience, education, and personal links are isolated into a strongly-typed data file. Anyone can update or add items in seconds without touching JSX.
- **Curated Production Repositories:**
  - **RAG Enterprise Knowledge Assistant:** Multi-tenant Hybrid RAG (Dense + BM25 + Reciprocal Rank Fusion + Cross-Encoder Reranker).
  - **HRMS Enterprise Platform:** Modular Monolith for Indian Labor Compliance (FastAPI, React 19, PostgreSQL, pgvector, AES-256-GCM, 141+ automated tests).
  - **Voice-Based Intelligent Assistant using MCP:** Low-latency LiveKit agent with context-aware tool routing.
  - **InsightPulse:** Real-time sentiment analysis microservice with FastAPI, Redis, MongoDB, and PWA.
  - **InvestIQ AI:** Gemini 2.5 Flash financial portfolio intelligence.
  - **Sri Tirumala Dry Fruits:** Enterprise POS terminal & E-commerce with SQLite WAL and WhatsApp automation.
  - **Shipment Sure:** Logistics prediction ML pipeline on 100K+ records (88% accuracy, 0.92 ROC-AUC).
  - **AI Resume Screening & Ranking Agent:** Transformer embeddings & voice JD input.
  - **Diamond Price Predictive Modeling:** Blackbuck (IIDT) ML internship (0.91 R² variance, -20% latency).
- **Interactive Project Architecture Modal:** Detailed modal deep-dive for every project showing problem statements, technical architecture, and key engineering achievements.
- **Interactive Developer CLI (`TerminalDrawer`):** A working cybernetic console supporting commands like `help`, `projects`, `skills`, `metrics`, `whoami`, `contact`, `clear`, and `exit`.
- **Integrated CV Resume Viewer (`ResumeModal`):** Printable and exportable curriculum vitae with browser printing support (`Ctrl+P` / `Print to PDF`).
- **Luminous Timeline Spine:** Concentric glowing milestone rings for professional experience and academic trajectory.

---

## 🛠️ How to Customize Your Portfolio

All data is decoupled into `src/data/portfolioData.ts`. You can change anything at any time:

### 1. Adding or Editing a Project
Open `src/data/portfolioData.ts` and edit or append an entry in `projects`:
```typescript
{
  id: "your-project-id",
  title: "Your Project Title",
  subtitle: "Brief Technical Subtitle",
  category: "AI & ML", // 'AI & ML' | 'Enterprise Systems' | 'Full-Stack & Cloud' | 'Autonomous Agents'
  status: "PRODUCTION_READY",
  year: "2026",
  metricBadge: "99.9% Uptime",
  metricLabel: "BENCHMARK METRIC",
  metricScore: "150 req/s",
  metricProgress: 95,
  summary: "Short one-sentence summary for the card...",
  description: "Detailed problem statement and architectural solution...",
  highlights: [
    "Key achievement 1...",
    "Key achievement 2..."
  ],
  architecture: "FastAPI • Docker • PostgreSQL • React",
  tags: ["Python", "FastAPI", "Docker"],
  githubUrl: "https://github.com/...",
  liveDemoUrl: "https://...",
  caseStudyAvailable: true,
  featured: true
}
```

### 2. Updating Personal Telemetry, Bio, or Contact
In `src/data/portfolioData.ts`, update `personal`:
- `email`: Change your contact email
- `phone`: Change phone number
- `location` & `coordinates`: Update your location
- `github` & `linkedin`: Update your profile links
- `bioShort` & `bioLong`: Update your headline summary

### 3. Updating Skills or Tech Stack
In `src/data/portfolioData.ts`, edit the `skills` array. Set `highlight: true` on any skill to give it a luminous cyan accent badge!

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18+ or v22+)
- npm or pnpm

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```
Creates an optimized static bundle in `/dist` ready for deployment to **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**.

---

## 🎨 Design Tokens (Obsidian Cybernetic)
- **Canvas Base:** `#0a0a0f`
- **Surface Elevation:** `#131318` / `#1f1f25` / `#2a292f`
- **Accent Cyan:** `#38bdf8`
- **Primary Indigo:** `#6366f1` / `#c0c1ff`
- **Glass Tint:** `rgba(13, 14, 21, 0.72)` with `backdrop-filter: blur(16px)`
- **Typography:** Inter (Display & Body) & Space Mono (Technical Telemetry)
