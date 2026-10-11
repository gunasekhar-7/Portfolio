import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Activity, Zap, Terminal, Server } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'analytics':
        return <Activity className="w-5 h-5 text-secondary" />;
      case 'bolt':
        return <Zap className="w-5 h-5 text-secondary" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-primary" />;
      case 'dns':
      default:
        return <Server className="w-5 h-5 text-secondary" />;
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-gutter -mt-8 relative z-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioData.heroMetrics.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-surface-container-low/95 border border-border-glass backdrop-blur-xl shadow-xl hover:bg-surface-container transition-all duration-300 group hover:-translate-y-1 hover:border-border-glass-hover"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                {item.label}
              </span>
              <div className="p-2 rounded-lg bg-surface-container-high/60 group-hover:bg-surface-container-highest transition-colors">
                {getIcon(item.icon)}
              </div>
            </div>
            <div className="font-display text-4xl leading-tight text-text-primary font-extrabold group-hover:text-secondary transition-colors">
              {item.value}
            </div>
            <p className="text-xs text-on-surface-variant mt-2 font-medium">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
