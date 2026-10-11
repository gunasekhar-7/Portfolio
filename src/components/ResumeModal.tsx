import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-surface-raised border border-border-glass-hover shadow-2xl p-6 sm:p-10 space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Actions */}
        <div className="flex items-center justify-between border-b border-border-glass pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-xs text-secondary font-bold uppercase">
              CURRICULUM VITAE // VERIFIED DOCUMENT
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-border-glass text-xs font-mono text-text-primary transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-secondary" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-border-glass text-text-secondary hover:text-text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Header */}
        <div className="space-y-3 border-b border-border-glass pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-text-primary">
                {portfolioData.personal.name}
              </h1>
              <p className="font-mono text-sm text-secondary font-semibold mt-1">
                AI & Machine Learning Engineer • Backend Systems Architect
              </p>
            </div>
            <div className="font-mono text-xs text-text-secondary space-y-1 sm:text-right">
              <div className="flex items-center gap-2 sm:justify-end">
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className="flex items-center gap-2 sm:justify-end">
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>{portfolioData.personal.phone}</span>
              </div>
              <div className="flex items-center gap-2 sm:justify-end">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed pt-2">
            {portfolioData.personal.bioShort}
          </p>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h2 className="font-mono text-xs text-secondary font-bold uppercase tracking-wider border-b border-border-glass pb-1">
            01 // EDUCATION
          </h2>
          <div className="space-y-4">
            {portfolioData.timeline
              .filter((item) => item.type !== 'PROFESSIONAL EXPERIENCE')
              .map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-display text-base font-bold text-text-primary">
                      {edu.role}
                    </h3>
                    <span className="font-mono text-xs text-text-muted">{edu.period}</span>
                  </div>
                  <p className="text-xs text-text-secondary">{edu.organization}</p>
                  {edu.metrics && (
                    <p className="font-mono text-xs text-secondary font-semibold">{edu.metrics}</p>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h2 className="font-mono text-xs text-secondary font-bold uppercase tracking-wider border-b border-border-glass pb-1">
            02 // PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-6">
            {portfolioData.timeline
              .filter((item) => item.type === 'PROFESSIONAL EXPERIENCE')
              .map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-display text-base font-bold text-text-primary">
                      {exp.role} — <span className="text-secondary font-semibold">{exp.organization}</span>
                    </h3>
                    <span className="font-mono text-xs text-text-muted">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 pl-1">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-on-surface-variant">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* Selected Architectural Projects */}
        <div className="space-y-4">
          <h2 className="font-mono text-xs text-secondary font-bold uppercase tracking-wider border-b border-border-glass pb-1">
            03 // KEY PROJECTS
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {portfolioData.projects.slice(0, 5).map((proj) => (
              <div key={proj.id} className="p-4 rounded-xl bg-surface-container-low border border-border-glass space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-display text-sm font-bold text-text-primary">
                    {proj.title}
                  </h3>
                  <span className="font-mono text-[11px] text-secondary font-semibold">{proj.metricBadge}</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {proj.summary}
                </p>
                <p className="font-mono text-[11px] text-text-muted pt-1">
                  Stack: {proj.tags.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-4">
          <h2 className="font-mono text-xs text-secondary font-bold uppercase tracking-wider border-b border-border-glass pb-1">
            04 // TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {portfolioData.skills.map((skillGroup, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-surface-container-low border border-border-glass">
                <p className="font-mono text-[11px] text-secondary font-bold mb-1">{skillGroup.title}</p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {skillGroup.skills.map(s => s.name).join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
