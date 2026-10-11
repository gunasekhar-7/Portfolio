import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Award } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-gutter py-24">
      {/* SECTION HEADER */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-semibold">
            03 // PROFESSIONAL TIMELINE & ACADEMICS
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
          Experience & Academic Foundation
        </h2>
      </div>

      {/* LUMINOUS TIMELINE SPINE */}
      <div className="relative pl-6 sm:pl-10 space-y-12">
        {/* Vertical glowing laser spine */}
        <div className="absolute top-3 bottom-3 left-[11px] sm:left-[19px] w-[2px] bg-gradient-to-b from-secondary via-cyber-indigo to-surface-container-highest shadow-[0_0_8px_rgba(56,189,248,0.3)]"></div>

        {portfolioData.timeline.map((item) => (
          <div key={item.id} className="relative group">
            {/* Concentric Ring Node Marker */}
            <div className="absolute -left-[30px] sm:-left-[38px] top-2 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-surface-base border border-secondary/40 flex items-center justify-center ring-4 ring-secondary/20 group-hover:ring-secondary/40 transition-all">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary group-hover:scale-125 transition-transform"></span>
              </div>
            </div>

            {/* Content Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-low/75 hover:bg-surface-container/90 border border-border-glass hover:border-border-glass-hover backdrop-blur-xl shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <span className="font-mono text-[11px] text-secondary uppercase font-semibold tracking-wider">
                    {item.type}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-text-primary font-bold mt-0.5">
                    {item.role}
                  </h3>
                  <p className="text-sm sm:text-base text-on-surface-variant font-medium">
                    {item.organization}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high border border-border-glass text-primary font-mono text-xs self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-secondary" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Metric Pill if present */}
              {item.metrics && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-container-high border border-border-glass my-3">
                  <span className="font-mono text-[11px] text-text-muted uppercase">ACADEMIC / INTERNSHIP METRIC:</span>
                  <span className="font-mono text-xs text-secondary font-bold">{item.metrics}</span>
                </div>
              )}

              {/* Achievements */}
              <ul className="space-y-2.5 my-4">
                {item.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-on-surface-variant text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Tool / Subject Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border-glass">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-surface-container border border-border-glass text-xs font-mono text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
