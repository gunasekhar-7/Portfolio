import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, LineChart, Award } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-6 h-6 text-secondary" />;
      case 'insights':
        return <LineChart className="w-6 h-6 text-primary" />;
      case 'verified':
      default:
        return <Award className="w-6 h-6 text-secondary" />;
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-gutter py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioData.certifications.map((cert) => (
          <div
            key={cert.id}
            className="p-6 sm:p-7 rounded-2xl bg-surface-container-low/75 hover:bg-surface-container/90 border border-border-glass hover:border-border-glass-hover backdrop-blur-xl shadow-lg flex items-start gap-4 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              {getCertIcon(cert.icon)}
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-wider">
                  {cert.badge}
                </span>
              </div>
              <h4 className="font-display text-base font-bold text-text-primary group-hover:text-secondary transition-colors">
                {cert.title}
              </h4>
              <p className="font-mono text-xs text-text-muted">
                {cert.issuer}
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed pt-1">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
