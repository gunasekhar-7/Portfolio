import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Cpu, Brain, Terminal, Server, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-secondary" />;
      case 'hub':
        return <Server className="w-5 h-5 text-primary" />;
      case 'psychology':
        return <Brain className="w-5 h-5 text-secondary" />;
      case 'deployed_code':
      default:
        return <Terminal className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="stack" className="w-full max-w-7xl mx-auto px-gutter py-24">
      {/* SECTION HEADER */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-secondary"></span>
          <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold">
            04 // TECH STACK & ARCHITECTURAL TOOLING
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
          Engineering Capabilities & Tooling
        </h2>
      </div>

      {/* MATRIX GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.skills.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-2xl bg-surface-container-low/80 hover:bg-surface-container/95 border border-border-glass hover:border-border-glass-hover backdrop-blur-xl shadow-lg flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-lg bg-surface-container-high/80 group-hover:bg-surface-container-highest transition-colors">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                      skill.highlight
                        ? 'bg-secondary/10 border border-secondary/30 text-secondary font-semibold shadow-sm'
                        : 'bg-surface-container-high border border-border-glass text-text-primary hover:border-border-glass-hover'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border-glass">
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block">
                {cat.tagline}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
