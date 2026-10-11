import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ThreeScene } from './ThreeScene';
import { ArrowDown, Download, Terminal, Cpu, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenTerminal?: () => void;
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResumeModal }) => {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-gutter pt-8 pb-16">
      {/* SYSTEM TELEMETRY STRIP */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/80 border border-border-glass backdrop-blur-xl shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <span className="font-mono text-[11px] text-secondary uppercase tracking-wider font-semibold">
            {portfolioData.personal.roles.join(' // ')}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 font-mono text-xs text-text-muted">
          <span>LATENCY: {portfolioData.telemetry.latency}</span>
          <span>•</span>
          <span>STACK: {portfolioData.telemetry.stackRuntime.split('/')[0]}</span>
          <span>•</span>
          <span className="text-secondary">{portfolioData.telemetry.version}</span>
        </div>
      </div>

      {/* MAIN HEADLINE & SUBTITLE */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyber-indigo/10 border border-cyber-indigo/30 text-cyber-cyan font-mono text-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GUNASEKHAR DONKANA — PORTFOLIO 2026</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-text-primary leading-[1.08]">
          ENGINEERING{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-secondary to-primary-container">
            INTELLIGENCE
          </span>{' '}
          INTO SCALABLE SYSTEMS
        </h1>

        <p className="text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {portfolioData.personal.bioShort}
        </p>

        {/* CTA CLUSTER */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-inverse-primary via-cyber-indigo to-secondary text-white font-semibold text-sm hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Projects ({portfolioData.projects.length})</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest border border-border-glass hover:border-secondary/40 backdrop-blur-xl text-text-primary font-semibold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-secondary" />
            <span>Download Full CV (PDF)</span>
          </button>

          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-border-glass text-secondary font-mono text-xs transition-all hover:border-secondary/40"
            >
              <Terminal className="w-4 h-4" />
              <span>Interactive CLI</span>
            </button>
          )}
        </div>
      </div>

      {/* 3D INTERACTIVE HERO STAGE WITH LAYERED TELEMETRY */}
      <div className="relative w-full mt-10 rounded-2xl bg-surface-raised/70 border border-border-glass backdrop-blur-2xl shadow-2xl overflow-hidden group">
        {/* Background ambient radial gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-indigo/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

        {/* 3D Scene Viewport */}
        <div className="w-full h-[420px] sm:h-[520px] bg-transparent mx-auto relative z-10">
          <ThreeScene className="w-full h-full" />
        </div>

        {/* OVERLAID ARCHITECTURAL METADATA HUD */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none hidden sm:block">
          <div className="px-3.5 py-2 rounded-lg bg-surface-base/85 border border-border-glass backdrop-blur-md shadow-md">
            <div className="flex items-center gap-1.5 text-text-muted font-mono text-[10px] uppercase">
              <Cpu className="w-3 h-3 text-secondary" />
              <span>NEURAL_TOPOLOGY_VIEWER</span>
            </div>
            <p className="font-mono text-xs text-secondary font-bold tracking-tight">
              STATE: {portfolioData.telemetry.productionState}
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-20 pointer-events-none hidden sm:block">
          <div className="px-3.5 py-2 rounded-lg bg-surface-base/85 border border-border-glass backdrop-blur-md text-right shadow-md">
            <p className="font-mono text-[10px] text-text-muted uppercase">SPATIAL_COORDINATES</p>
            <p className="font-mono text-xs text-primary font-semibold tracking-tight">
              {portfolioData.personal.coordinates}
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-surface-base/85 border border-border-glass backdrop-blur-md font-mono text-[11px] text-text-secondary">
            <span className="text-secondary font-bold">DRAG & SCROLL</span> to rotate 3D neural core
          </div>
        </div>
      </div>
    </section>
  );
};
