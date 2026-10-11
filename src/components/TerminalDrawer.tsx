import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'sys.init',
      output: (
        <div className="text-xs space-y-1">
          <p className="text-secondary font-bold">
            GUNASEKHAR.D ARCHITECTURAL OS // KERNEL v2.5.0 INITIALIZED
          </p>
          <p className="text-text-muted">
            Type <span className="text-primary font-bold">"help"</span> for available commands, or <span className="text-primary font-bold">"projects"</span> to view architectures.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-text-secondary">
            <p className="text-secondary font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-primary font-semibold">whoami</span> — Display engineer biographical telemetry</p>
            <p><span className="text-primary font-semibold">projects</span> — List production repositories & architectures</p>
            <p><span className="text-primary font-semibold">skills</span> — Display engineering capabilities & stack</p>
            <p><span className="text-primary font-semibold">metrics</span> — View high-throughput benchmarks & statistics</p>
            <p><span className="text-primary font-semibold">contact</span> — Get communication channels</p>
            <p><span className="text-primary font-semibold">clear</span> — Purge console buffer</p>
            <p><span className="text-primary font-semibold">exit</span> — Close terminal uplink</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="space-y-1 text-xs text-text-secondary">
            <p className="text-text-primary font-bold">{portfolioData.personal.name} ({portfolioData.personal.handle})</p>
            <p className="text-secondary">{portfolioData.personal.roles.join(' • ')}</p>
            <p>{portfolioData.personal.bioShort}</p>
            <p className="text-text-muted">Location: {portfolioData.personal.location} ({portfolioData.personal.coordinates})</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs text-text-secondary">
            <p className="text-secondary font-bold">CURATED ARCHITECTURAL REPOSITORIES ({portfolioData.projects.length}):</p>
            {portfolioData.projects.map((p, i) => (
              <div key={p.id} className="pl-2 border-l border-border-glass">
                <span className="text-text-primary font-semibold">[{i + 1}] {p.title}</span>
                <span className="text-secondary ml-2">({p.metricBadge})</span>
                <p className="text-text-muted text-[11px]">{p.summary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs text-text-secondary">
            {portfolioData.skills.map((s, idx) => (
              <div key={idx}>
                <span className="text-secondary font-bold uppercase">{s.title}:</span>{' '}
                <span className="text-text-primary">{s.skills.map(x => x.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'metrics':
        output = (
          <div className="space-y-1 text-xs text-text-secondary">
            <p className="text-secondary font-bold">SYSTEM TELEMETRY BENCHMARKS:</p>
            {portfolioData.heroMetrics.map(m => (
              <p key={m.id}>
                <span className="text-primary font-semibold">{m.label}:</span>{' '}
                <span className="text-text-primary font-bold">{m.value}</span> — {m.subtitle}
              </p>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-text-secondary">
            <p className="text-secondary font-bold">COMMUNICATION VECTOR:</p>
            <p>Email: <a href={`mailto:${portfolioData.personal.email}`} className="text-primary underline">{portfolioData.personal.email}</a></p>
            <p>Phone: <span className="text-text-primary">{portfolioData.personal.phone}</span></p>
            <p>Location: <span className="text-text-primary">{portfolioData.personal.location}</span></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        output = (
          <p className="text-xs text-red-400">
            command not recognized: "{cmd}". Type <span className="text-primary font-bold">"help"</span> for instructions.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-2 sm:p-4 max-w-4xl mx-auto animate-slideUp">
      <div className="rounded-2xl bg-surface-raised/95 border border-border-glass-hover shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col h-[400px]">
        {/* Top bar */}
        <div className="px-4 py-2.5 bg-surface-container-high/90 border-b border-border-glass flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-secondary" />
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-wider">
              TELEMETRY_SHELL // GUNASAI_CLI
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              className="text-[11px] font-mono text-text-muted hover:text-text-primary px-2 py-0.5 rounded"
            >
              clear
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-text-muted hover:text-text-primary"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Console stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs">
          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-text-muted">
                <span className="text-secondary">guest@gunas-core:~$</span>
                <span className="text-text-primary font-bold">{h.command}</span>
              </div>
              <div className="pl-4">{h.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input prompt */}
        <form onSubmit={handleCommand} className="p-3 bg-surface-container-lowest border-t border-border-glass flex items-center gap-2 font-mono text-xs">
          <span className="text-secondary font-bold">guest@gunas-core:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'projects', 'skills'..."
            className="flex-1 bg-transparent text-text-primary focus:outline-none placeholder:text-text-muted font-mono text-xs"
          />
        </form>
      </div>
    </div>
  );
};
