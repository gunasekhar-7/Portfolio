import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-border-glass mt-20">
      <div className="max-w-7xl mx-auto px-gutter py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-secondary animate-ping"></span>
              <span className="font-mono text-xs uppercase text-secondary font-bold">
                NODE_TELEMETRY // ACTIVE
              </span>
            </div>
            <p className="font-mono text-xs text-text-muted">
              {portfolioData.personal.location} ({portfolioData.personal.coordinates})
            </p>
            <p className="text-xs text-on-surface-variant pt-1">
              © {new Date().getFullYear()} {portfolioData.personal.name}. Architectural Synthesis & Computational Systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-surface-container-low text-text-secondary hover:bg-surface-container hover:text-text-primary border border-border-glass font-mono text-xs transition-colors"
            >
              [ GITHUB ]
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-surface-container-low text-text-secondary hover:bg-surface-container hover:text-text-primary border border-border-glass font-mono text-xs transition-colors"
            >
              [ LINKEDIN ]
            </a>
            {onOpenTerminal ? (
              <button
                onClick={onOpenTerminal}
                className="px-4 py-2 rounded-lg bg-surface-container-low text-secondary hover:bg-surface-container hover:text-white border border-border-glass font-mono text-xs transition-colors"
              >
                [ TERMINAL_PING ]
              </button>
            ) : (
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="px-4 py-2 rounded-lg bg-surface-container-low text-secondary hover:bg-surface-container hover:text-white border border-border-glass font-mono text-xs transition-colors"
              >
                [ TERMINAL_PING ]
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
