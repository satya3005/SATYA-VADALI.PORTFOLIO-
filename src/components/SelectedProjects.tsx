import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS, CONTACT_INFO } from '../data/portfolioData';
import { ArrowRight, ArrowUpRight, FolderOpen, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SelectedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

type ProjectCategory = 'all' | 'branding' | 'marketing' | 'genai';

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  // Filter projects by category
  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const filterTabs: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Works', count: PROJECTS.length },
    { id: 'branding', label: 'Brand & Visual Identity', count: PROJECTS.filter(p => p.category === 'branding').length },
    { id: 'marketing', label: 'Performance Ads & Campaigns', count: PROJECTS.filter(p => p.category === 'marketing').length },
    { id: 'genai', label: 'Generative AI & Visuals', count: PROJECTS.filter(p => p.category === 'genai').length },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/[0.08] bg-[#08080a] relative overflow-hidden">
      
      {/* Subtle atmospheric red backlight */}
      <div 
        className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#d90429]/10 rounded-full blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header: Title, Editorial Index & Drive Repo Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]"
        >
          <div className="space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#d90429] flex items-center gap-2">
              <span>Selected Works</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60">2023 — 2026 Archive</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
              Expanded Portfolio Showcase
            </h2>
            <p className="text-xs sm:text-sm text-[#8e939d] max-w-xl font-normal leading-relaxed">
              Curated commercial design systems, international admissions campaigns, high-converting social collateral, and generative AI media pipelines.
            </p>
          </div>

          <a
            href={CONTACT_INFO.driveFolderUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8e939d] hover:text-[#d90429] transition-colors cursor-pointer self-start md:self-end pt-2 md:pt-0"
          >
            <span>Master Assets (Drive)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </motion.div>

        {/* Interactive Category Filter Tabs (Segmented Button Controls) */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#d90429] text-white border-[#d90429] shadow-[0_0_20px_rgba(217,4,41,0.35)]'
                    : 'bg-white/[0.03] text-[#8e939d] border-white/[0.08] hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] tabular-nums font-bold ${isActive ? 'text-white/90' : 'text-[#8e939d]'}`}>
                  ({tab.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Expanded 3-Column Responsive Bento Grid (Displaying All Curated Works) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const formattedNumber = String(idx + 1).padStart(2, '0');
              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.08, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -6 }}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer flex flex-col justify-between rounded-xl bg-[#0e0f14] border border-white/[0.08] hover:border-[#d90429]/60 transition-all duration-300 p-4 sm:p-5 shadow-lg hover:shadow-[0_16px_36px_rgba(217,4,41,0.18)]"
                >
                  <div className="space-y-4">
                    {/* Media Mockup Container with Cinematic Aspect Ratio */}
                    <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#15161c] border border-white/[0.06]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />

                      {/* Vignette Overlay for Depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

                      {/* Top Badging: Category & Quick Look Affordance */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/90 bg-[#08080a]/80 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                          {project.categoryLabel}
                        </span>
                        <span className="p-1.5 rounded-full bg-[#08080a]/80 backdrop-blur-md text-[#d90429] border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Bottom Key Metric Stamp on Image */}
                      {project.metrics && (
                        <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-mono text-white/90 truncate drop-shadow">
                          <span className="text-[#d90429] font-bold">✦ </span>
                          <span>{project.metrics}</span>
                        </div>
                      )}
                    </div>

                    {/* Numbered Indicator & Project Title */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-['Bebas_Neue'] text-3xl sm:text-4xl font-black text-[#d90429] leading-none shrink-0 tracking-wider group-hover:scale-105 transition-transform origin-left">
                          {formattedNumber}
                        </span>
                        <div className="space-y-0.5">
                          <h3 className="font-['Space_Grotesk'] text-sm sm:text-base font-bold uppercase tracking-tight text-white group-hover:text-[#ef233c] transition-colors line-clamp-1 leading-snug">
                            {project.title}
                          </h3>
                          <div className="text-[11px] font-mono text-[#8e939d] uppercase tracking-wider">
                            {project.categoryLabel}
                          </div>
                        </div>
                      </div>

                      {/* Brief Description */}
                      <p className="text-xs text-[#8e939d] line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Deliverables & Interactive View Action */}
                  <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/60 truncate max-w-[200px]">
                      <Layers className="w-3 h-3 text-[#d90429] shrink-0" />
                      <span className="truncate">{project.deliverables?.[0] || 'Design System'}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-[#d90429] group-hover:translate-x-1 transition-transform shrink-0 font-bold">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Drive Repository Banner & Secondary Action */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-xs hover:border-[#d90429]/30 transition-all duration-300 shadow-md"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#d90429]/15 border border-[#d90429]/30 flex items-center justify-center text-[#d90429] shrink-0">
              <FolderOpen className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <span className="font-bold text-white uppercase tracking-wider text-sm flex items-center gap-2">
                <span>Looking for Full Raw Assets & Vector Source Files?</span>
                <Sparkles className="w-3.5 h-3.5 text-[#d90429]" />
              </span>
              <p className="text-[#8e939d] text-xs leading-relaxed max-w-xl">
                Access the complete Google Drive repository containing uncompressed campaign video renders, print packaging dielines, and Midjourney prompt tokens.
              </p>
            </div>
          </div>

          <a
            href={CONTACT_INFO.driveFolderUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded bg-[#d90429] hover:bg-[#ef233c] text-white transition-all font-mono text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer shadow-[0_0_20px_rgba(217,4,41,0.4)] hover:shadow-[0_0_28px_rgba(217,4,41,0.65)] shrink-0 self-stretch sm:self-auto text-center"
          >
            Access Google Drive →
          </a>
        </motion.div>

      </div>
    </section>
  );
};
