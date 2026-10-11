import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Download, ExternalLink, Copy, Check, Send, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenResumeModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !senderMessage) return;

    // Direct mailto fallback with prefilled content
    const subject = encodeURIComponent(`Inquiry from Portfolio: ${senderName || 'Recruiter / Engineer'}`);
    const body = encodeURIComponent(`From: ${senderName} (${senderEmail})\n\nMessage:\n${senderMessage}`);
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;

    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 5000);
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-gutter pt-16 pb-24">
      <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-surface-container via-surface-container-low to-surface-container-lowest border border-border-glass shadow-2xl overflow-hidden">
        {/* Ambient radial glow in corner */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-cyber-indigo/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-mono text-xs uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>COMMUNICATION_UPLINK // OPEN FOR 2026 ROLES</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
              Ready to build next-generation machine learning & backend infrastructure?
            </h2>

            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              Actively considering Full-time and Internship opportunities across AI/ML Engineering, FastAPI Microservice Architecture, and Data Science.
            </p>

            {/* Direct Contact Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs text-on-surface-variant">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-high/80 border border-border-glass">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="hover:text-secondary transition-colors"
                >
                  {portfolioData.personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="ml-1 p-1 hover:text-text-primary text-text-muted transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-secondary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-high/80 border border-border-glass">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="hover:text-secondary transition-colors"
                >
                  {portfolioData.personal.phone}
                </a>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-high/80 border border-border-glass">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-secondary to-primary-container text-surface-base font-bold text-sm hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume [PDF 240KB]</span>
              </button>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-border-glass hover:border-secondary/30 backdrop-blur-xl text-text-primary font-semibold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 text-secondary" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Interactive Dispatcher */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-base/80 border border-border-glass backdrop-blur-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border-glass">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping" />
                  <span className="font-mono text-xs text-secondary font-bold uppercase">
                    DIRECT MESSAGE TRANSMISSION
                  </span>
                </div>
                <span className="font-mono text-[10px] text-text-muted">ENCRYPTED // TLS</span>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-3">
                <div>
                  <label className="block font-mono text-[11px] text-text-muted mb-1 uppercase">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Talent Partner / Tech Lead"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-border-glass text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-secondary transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-text-muted mb-1 uppercase">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-border-glass text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-secondary transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-text-muted mb-1 uppercase">
                    Inquiry / Project Details *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Discuss opportunities, architecture, or interview scheduling..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-border-glass text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-secondary transition-colors font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyber-indigo to-secondary text-white font-mono text-xs font-bold uppercase tracking-wider hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Transmission [Send]</span>
                </button>

                {messageSent && (
                  <p className="font-mono text-xs text-secondary text-center pt-1 animate-pulse">
                    ✓ Email client initialized with message data.
                  </p>
                )}
              </form>
            </div>

            <div className="pt-4 mt-4 border-t border-border-glass text-center">
              <span className="font-mono text-[10px] text-text-muted">
                RESPONSE SLA: WITHIN 12 HOURS // HIGH PRIORITY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
