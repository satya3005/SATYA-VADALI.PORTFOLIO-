import React, { useState } from 'react';
import { ProjectItem, WorkCategory } from '../types';
import { PROJECTS, CONTACT_INFO } from '../data/portfolioData';
import { ExternalLink, Eye, FolderOpen, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WorksSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('all');

  const categories: { id: WorkCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'genai', label: 'Generative AI Visuals' },
    { id: 'branding', label: 'Brand Identity & Systems' },
    { id: 'marketing', label: 'Performance Ad Creatives' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="py-16 md:py-24 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header & Category Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#00f2fe] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio & Works</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Commercial Creations & GenAI Assets
            </h2>
            <p className="text-sm text-[#9ba1b0] mt-2 max-w-xl">
              High-converting visual brand identities, synthetic AI imagery, prompt architectures, and performance marketing collateral.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#12141c] border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 ${
                  activeCategory === cat.id
                    ? 'bg-[#00f2fe] text-[#0a0b10] font-semibold shadow-[0_0_14px_rgba(0,242,254,0.35)]'
                    : 'text-[#9ba1b0] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Drive Access Banner with ambient hover effects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="card-shine p-6 rounded-2xl bg-gradient-to-r from-[#12141c] via-[#161924] to-[#12141c] border border-[#00f2fe]/20 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#00f2fe]/40 transition-colors"
        >
          <div className="relative z-10 space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00f2fe]">
              <FolderOpen className="w-4 h-4 animate-pulse" />
              <span>Full High-Resolution Asset Repository</span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-white">
              Google Drive Portfolio & Video Deliverables
            </h3>
            <p className="text-xs sm:text-sm text-[#9ba1b0] leading-relaxed">
              Explore the raw, uncompressed master deliverables, client motion graphics, brand identity packages, and prompt experiment files directly inside Satya Vadali's official Google Drive folder.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href={CONTACT_INFO.driveFolderUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#0a0b10] bg-[#00f2fe] rounded-lg hover:bg-[#00dce6] shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_28px_rgba(0,242,254,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <FolderOpen className="w-4 h-4 fill-current" />
              <span>Open Google Drive Folder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Background ambient flare */}
          <div 
            className="pointer-events-none absolute -right-20 -bottom-20 w-64 h-64 bg-[#00f2fe]/10 rounded-full blur-3xl animate-pulse-subtle"
            aria-hidden="true" 
          />
        </motion.div>

        {/* Portfolio Projects Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => onSelectProject(project)}
                className="card-shine group rounded-2xl bg-[#12141c]/60 backdrop-blur-md border border-white/10 hover:border-[#00f2fe]/45 hover:shadow-[0_8px_32px_rgba(0,242,254,0.12)] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Frame with Aspect Ratio */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0a0b10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                    {/* Scrim Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-[#12141c]/25 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Top-right quick launch badge with hover rotate */}
                    <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
                      <span className="p-2 rounded-full bg-[#0a0b10]/80 backdrop-blur-md text-white/80 group-hover:text-[#00f2fe] group-hover:bg-[#00f2fe]/15 border border-white/10 group-hover:border-[#00f2fe]/40 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>

                    {/* Bottom tags on image */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded bg-[#0a0b10]/85 border border-white/10 text-white font-medium">
                        {project.categoryLabel}
                      </span>
                      {project.metrics && (
                        <span className="text-[#ff9900] font-mono text-[11px] bg-[#0a0b10]/85 px-2 py-0.5 rounded border border-[#ff9900]/20">
                          {project.metrics}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white group-hover:text-[#00f2fe] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9ba1b0] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Clean unboxed tags with separator */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-[#b9cacb]">
                      {project.tags.map((tag, i) => (
                        <React.Fragment key={tag}>
                          <span className="hover:text-white transition-colors">{tag}</span>
                          {i < project.tags.length - 1 && <span className="text-white/20">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer / Action affordance */}
                <div className="px-6 py-3.5 border-t border-white/5 bg-white/[0.02] flex items-center justify-between text-xs text-[#9ba1b0]">
                  <span className="flex items-center gap-1.5 text-white/70 group-hover:text-[#00f2fe] transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    View Case Study & Deliverables
                  </span>
                  <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
                    Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
