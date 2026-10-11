import React from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle2, GitBranch, ExternalLink, Layers, ShieldCheck, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-raised border border-border-glass-hover shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border-glass pb-5">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary font-mono text-[11px] font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-mono text-[11px]">
                {project.year} // {project.status}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary pt-1">
              {project.title}
            </h2>
            <p className="font-mono text-xs text-secondary font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-text-secondary hover:text-text-primary border border-border-glass transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metric Highlight Callout */}
        <div className="p-4 rounded-xl bg-surface-container-low/90 border border-border-glass flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyber-indigo/20 text-secondary shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="font-mono text-[11px] text-text-muted uppercase">SYSTEM BENCHMARK // METRIC</p>
              <p className="font-mono text-sm text-secondary font-bold">{project.metricBadge}</p>
            </div>
          </div>
          {project.metricProgress && (
            <div className="sm:text-right">
              <span className="font-mono text-xs text-text-primary font-bold">{project.metricScore}</span>
              <div className="w-36 h-2 rounded-full bg-surface-container-high overflow-hidden mt-1">
                <div 
                  className="h-full bg-gradient-to-r from-cyber-indigo to-secondary rounded-full" 
                  style={{ width: `${project.metricProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Narrative Description */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-secondary" />
            <span>ARCHITECTURAL OVERVIEW & PROBLEM STATEMENT</span>
          </h3>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architecture Spec */}
        <div className="space-y-2">
          <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider">
            TECHNICAL ARCHITECTURE & INFRASTRUCTURE
          </h3>
          <div className="p-3.5 rounded-xl bg-surface-container-lowest border border-border-glass font-mono text-xs text-secondary leading-relaxed">
            {project.architecture}
          </div>
        </div>

        {/* Engineering Highlights */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
            <span>KEY ENGINEERING ACCOMPLISHMENTS</span>
          </h3>
          <ul className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-2 pt-1">
          <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider">
            ACTIVE STACK TOKENS
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-surface-container-high border border-border-glass text-secondary font-mono text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border-glass">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-border-glass text-text-primary font-mono text-xs transition-colors"
              >
                <GitBranch className="w-4 h-4 text-secondary" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyber-indigo to-secondary text-white font-mono text-xs font-bold transition-all shadow-glow-cyan"
              >
                <span>Live Deployment / Specs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-text-muted hover:text-text-primary"
          >
            [ Close Window ]
          </button>
        </div>
      </div>
    </div>
  );
};
