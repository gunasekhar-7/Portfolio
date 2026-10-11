import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Download, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'experience', 'stack', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 // About', href: '#about', id: 'about' },
    { label: '02 // Projects', href: '#projects', id: 'projects' },
    { label: '03 // Experience', href: '#experience', id: 'experience' },
    { label: '04 // Stack', href: '#stack', id: 'stack' },
    { label: '05 // Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/85 backdrop-blur-xl border-b border-border-glass shadow-lg shadow-black/20'
          : 'bg-surface/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* Brand Logo & Telemetry */}
        <a href="#about" className="flex items-center gap-space-md group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-indigo via-secondary-container to-secondary flex items-center justify-center font-mono font-bold text-surface-base text-lg shadow-glow-primary transition-transform group-hover:scale-105">
            GD
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary group-hover:text-secondary transition-colors">
                {portfolioData.personal.monogram}
              </span>
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            </div>
            <span className="font-mono text-[11px] text-secondary uppercase tracking-tight hidden sm:inline-block">
              {portfolioData.personal.status}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-xl bg-surface-container-low/80 border border-border-glass backdrop-blur-lg">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wide rounded-lg transition-all ${
                  isActive
                    ? 'bg-cyber-indigo text-white font-semibold shadow-glow-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-container'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions Cluster */}
        <div className="flex items-center gap-3">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              title="Open Terminal Console"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high/80 hover:bg-surface-container-highest border border-border-glass text-secondary font-mono text-xs transition-all hover:border-secondary/40"
            >
              <Terminal className="w-3.5 h-3.5 text-secondary" />
              <span>TERMINAL</span>
            </button>
          )}

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-secondary hover:text-text-primary font-mono text-xs transition-all border border-border-glass hover:border-secondary/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume.pdf</span>
          </a>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-border-glass flex items-center justify-center text-text-secondary hover:text-text-primary transition-all"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-lg bg-surface-container-high text-text-primary hover:bg-surface-container-highest border border-border-glass"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-base/95 backdrop-blur-2xl border-b border-border-glass px-gutter py-5 space-y-3">
          <div className="flex items-center gap-2 pb-3 border-b border-border-glass">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span className="font-mono text-xs text-secondary">{portfolioData.personal.status}</span>
          </div>
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl font-mono text-sm uppercase transition-colors ${
                  activeSection === item.id
                    ? 'bg-cyber-indigo text-white font-bold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-container'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-cyber-indigo to-cyber-cyan text-white font-mono text-xs uppercase font-bold"
            >
              Get in Touch // Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
