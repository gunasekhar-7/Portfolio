import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Code2, ExternalLink, ArrowRight, Sparkles, Filter } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'AI & ML',
    'Enterprise Systems',
    'Autonomous Agents',
    'Full-Stack & Cloud'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-gutter py-24">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            <span className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold">
              02 // CURATED WORK & PRODUCTION REPOSITORIES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Selected Architectural Projects & AI Systems
          </h2>
        </div>
        <p className="text-on-surface-variant text-sm sm:text-base max-w-md">
          Autonomous agents, deep predictive networks, and high-concurrency microservice architectures built for production environments.
        </p>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border-glass">
        <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>FILTER:</span>
        </div>
        {categories.map((cat) => {
          const count = cat === 'All'
            ? portfolioData.projects.length
            : portfolioData.projects.filter((p) => p.category === cat).length;
          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wide transition-all ${
                isActive
                  ? 'bg-cyber-indigo text-white font-bold shadow-glow-primary border border-cyber-indigo'
                  : 'bg-surface-container-low/80 text-text-secondary hover:text-text-primary hover:bg-surface-container border border-border-glass'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* ASYMMETRIC BENTO PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface-container-low/75 hover:bg-surface-container/90 border border-border-glass hover:border-border-glass-hover backdrop-blur-xl shadow-xl transition-all duration-300 group hover:-translate-y-1.5"
          >
            <div className="space-y-4">
              {/* Card Meta Header */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-mono text-[11px] uppercase font-semibold">
                  {project.metricBadge}
                </span>
                <span className="font-mono text-[11px] text-text-muted">
                  {project.year} // {project.status}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary group-hover:text-secondary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="font-mono text-[11px] text-primary/80 mt-1">
                  {project.subtitle}
                </p>
                <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Tech Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-surface-container-high border border-border-glass text-secondary font-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-1 rounded-md bg-surface-container text-text-muted font-mono text-xs">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              {/* Inline Telemetry Visual */}
              {project.metricProgress && (
                <div className="p-3.5 rounded-xl bg-surface-container-lowest/80 border border-border-glass mt-3">
                  <div className="flex justify-between items-center text-xs font-mono text-text-muted mb-1.5">
                    <span className="uppercase">{project.metricLabel || 'SYSTEM BENCHMARK'}</span>
                    <span className="text-secondary font-bold">{project.metricScore}</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyber-indigo via-secondary to-cyber-cyan h-full rounded-full transition-all duration-500"
                      style={{ width: `${project.metricProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Action Vectors */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-border-glass">
              <button
                onClick={() => setActiveProject(project)}
                className="inline-flex items-center gap-1 font-mono text-xs text-secondary hover:text-white font-semibold transition-colors group-hover:translate-x-0.5"
              >
                <span>[ View Architecture ]</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </button>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>[ Repo ]</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
