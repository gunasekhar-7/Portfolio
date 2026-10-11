import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalDrawer } from './components/TerminalDrawer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-surface-base text-on-surface selection:bg-secondary/20 selection:text-secondary">
      {/* AMBIENT VOLUMETRIC BACKDROPS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-glow-violet/30 via-glow-cyan/15 to-transparent blur-[140px]"></div>
        <div className="absolute top-[900px] -left-48 w-96 h-96 bg-secondary/10 blur-[130px]"></div>
        <div className="absolute top-[1800px] -right-48 w-96 h-96 bg-cyber-indigo/15 blur-[140px]"></div>
        <div className="absolute top-[2800px] left-1/4 w-80 h-80 bg-cyber-cyan/10 blur-[130px]"></div>
      </div>

      {/* Navigation Header */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Page Layout */}
      <main className="w-full pt-20">
        {/* 1. Hero Stage & 3D Interactive WebGL Viewport */}
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* Floating KPI Metrics Strip */}
        <MetricsStrip />

        {/* 2. Curated Architectural Projects Bento Grid */}
        <ProjectsSection />

        {/* 3. Experience & Academic Timeline */}
        <TimelineSection />

        {/* 4. Engineering Capabilities & Tooling Matrix */}
        <SkillsSection />

        {/* 5. Accredited Certifications & Problem Solving */}
        <CertificationsSection />

        {/* 6. Communication Uplink & Contact Form */}
        <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>

      {/* Telemetry Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive Developer Terminal Shell */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Detailed CV Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
