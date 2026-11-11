import React, { useState } from 'react';
import { CONTACT_INFO, USER_PHOTOS, PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { Download, ArrowRight, ArrowUpRight, Sparkles, X, FolderOpen, Layers, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EditorialHeroProps {
  onOpenPdfResume: () => void;
  onExploreProjects: () => void;
  onNavigateToDossier?: () => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onOpenPdfResume,
  onExploreProjects,
  onNavigateToDossier,
  onSelectProject,
}) => {
  // Active index for bottom filmstrip carousel (default to center card index 2)
  const [activeFilmIndex, setActiveFilmIndex] = useState<number>(2);
  const [isMatrixMenuOpen, setIsMatrixMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<'home' | 'portfolio' | 'experience' | 'dossier' | 'contact'>('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const projectsEl = document.getElementById('projects');
      const processEl = document.getElementById('skills-process');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPos >= contactEl.offsetTop - 300) {
        setActiveSection('contact');
      } else if (processEl && scrollPos >= processEl.offsetTop - 300) {
        setActiveSection('experience');
      } else if (projectsEl && scrollPos >= projectsEl.offsetTop - 300) {
        setActiveSection('portfolio');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Take the 5 showcase projects for the bottom filmstrip
  const filmstripProjects = PROJECTS.slice(0, 5);
  const activeProject = filmstripProjects[activeFilmIndex] || filmstripProjects[0];

  const handleSelectCard = (index: number) => {
    setActiveFilmIndex(index);
    if (onSelectProject) {
      onSelectProject(filmstripProjects[index]);
    }
  };

  const scrollToSection = (id: string) => {
    setIsMatrixMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#070709] text-white overflow-hidden flex flex-col justify-between select-none">
      
      {/* Cinematic Dark Background with Moody Vignette & Crimson Fog */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(217,4,41,0.18)_0%,rgba(14,14,18,0.5)_50%,#070709_90%)]" 
        aria-hidden="true" 
      />

      {/* TOP BAR: Batman Style (3x3 Grid Menu on Left, Outlined Pill on Right) */}
      <header className="relative z-30 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 flex items-center justify-between">
        
        {/* Top Left: 3x3 Dot Matrix Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMatrixMenuOpen(true)}
            className="p-2 sm:p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/25 text-white transition-all duration-200 cursor-pointer group flex flex-col gap-1 items-center justify-center shadow-lg"
            title="Open Navigation Matrix"
            aria-label="Open Navigation Matrix"
          >
            <div className="grid grid-cols-3 gap-1 w-4 h-4 sm:w-4.5 sm:h-4.5">
              {[...Array(9)].map((_, i) => (
                <span 
                  key={i} 
                  className="w-1 h-1 bg-white/80 group-hover:bg-[#d90429] rounded-[0.5px] transition-colors duration-200" 
                />
              ))}
            </div>
          </button>

          <div className="hidden sm:flex flex-col">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-white">
              Satya Vadali
            </span>
            <span className="text-[10px] font-mono text-[#8e939d] uppercase tracking-widest">
              Design & Digital Marketing
            </span>
          </div>
        </div>

        {/* Top Right: Outlined Pill Action (Matching Batman "GET TICKETS" Pill Button) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onNavigateToDossier && (
            <button
              onClick={onNavigateToDossier}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#ef233c] bg-[#d90429]/10 border border-[#d90429]/40 hover:bg-[#d90429]/20 hover:border-[#d90429] transition-all cursor-pointer shadow-[0_0_15px_rgba(217,4,41,0.25)]"
            >
              <Sparkles className="w-3 h-3 text-[#d90429]" />
              <span>Dossier</span>
            </button>
          )}

          <button
            onClick={onOpenPdfResume}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-white bg-transparent border border-white/60 hover:border-[#d90429] hover:text-[#d90429] hover:shadow-[0_0_20px_rgba(217,4,41,0.4)] transition-all duration-200 cursor-pointer"
          >
            <span>Resume PDF</span>
          </button>
        </div>

      </header>

      {/* MAIN CINEMATIC STAGE: Center Cutout Overlapping "PORTFOLIO" in 3D */}
      <div className="relative flex-1 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center my-auto min-h-[480px] sm:min-h-[540px] md:min-h-[600px] lg:min-h-[660px]">
        
        {/* Layer 0: Massive Bold Weathered Red "PORTFOLIO" Wordmark (No gaps between letters) */}
        <div 
          className="absolute inset-x-0 top-1/2 -translate-y-[54%] flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden"
          aria-hidden="true"
        >
          <span 
            className="font-['Bebas_Neue'] text-[26vw] sm:text-[24vw] md:text-[23vw] lg:text-[22vw] xl:text-[21vw] font-black uppercase text-[#d90429] tracking-[0em] leading-[0.74] whitespace-nowrap text-center drop-shadow-[0_15px_50px_rgba(217,4,41,0.45)]"
            style={{
              textShadow: '0 0 40px rgba(217, 4, 41, 0.5), 0 0 80px rgba(217, 4, 41, 0.25)',
              letterSpacing: '0px',
            }}
          >
            PORTFOLIO
          </span>
        </div>

        {/* Ambient Red Glow Halo behind Cutout Head */}
        <div 
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[450px] sm:w-[650px] lg:w-[850px] h-[400px] sm:h-[550px] bg-[#d90429]/22 rounded-full blur-[140px] z-0" 
          aria-hidden="true" 
        />

        {/* Layer 1: DEAD-CENTER TOWERING HERO CUTOUT (Satya Vadali) */}
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center justify-end h-full max-h-[620px] sm:max-h-[680px] md:max-h-[740px] lg:max-h-[780px] pointer-events-none"
        >
          <div className="relative overflow-visible flex justify-center">
            <img
              src={USER_PHOTOS.heroCutout}
              alt="Satya Vadali — Graphic Designer & Digital Marketing Associate"
              className="w-auto h-[440px] sm:h-[520px] md:h-[600px] lg:h-[680px] xl:h-[720px] object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] filter contrast-[1.05] brightness-[0.98]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 65%, rgba(0,0,0,0.85) 80%, transparent 98%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 65%, rgba(0,0,0,0.85) 80%, transparent 98%)',
              }}
              loading="eager"
            />

            {/* Seamless vertical gradient blur blending torso into the dark base */}
            <div 
              className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent pointer-events-none" 
              aria-hidden="true" 
            />
          </div>
        </motion.div>

        {/* Layer 2: Left Foreground Identity Card (Subtle & Unobtrusive) */}
        <motion.div 
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="hidden xl:block absolute left-8 bottom-28 z-20 max-w-xs space-y-2.5 pointer-events-auto"
        >
          <div className="font-['Caveat'] text-2xl text-[#ef233c] -rotate-3 origin-left">
            Hello, I'm
          </div>
          <h1 className="font-['Space_Grotesk'] text-2xl font-bold uppercase tracking-tight text-white leading-tight">
            Satya Vadali
          </h1>
          <p className="text-xs text-[#8e939d] leading-relaxed">
            Crafting distinctive visual identities, high-converting performance ads, and multimodal Generative AI media.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-white/80 pt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d90429] animate-pulse" />
            <span>Available Worldwide · Visakhapatnam</span>
          </div>
          <div className="pt-1">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#d90429] hover:bg-[#ef233c] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_15px_rgba(217,4,41,0.4)] cursor-pointer"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Layer 3: RIGHT-SIDE VERTICAL WAYFINDER (Exact Batman Rail Style) */}
        <motion.aside 
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="fixed right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end space-y-5 pointer-events-auto"
          aria-label="Section Navigation"
        >
          {/* Vertical Menu Items with Connecting Hairlines & Dot Indicators */}
          <div className="flex flex-col items-end space-y-3.5 text-[11px] font-mono uppercase tracking-widest text-[#8e939d]">
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`group flex items-center gap-2.5 cursor-pointer transition-colors ${
                activeSection === 'home' ? 'text-white font-bold' : 'hover:text-white'
              }`}
            >
              <span className="group-hover:text-white transition-colors">HOME</span>
              <span className={activeSection === 'home' ? 'text-white/60' : 'text-white/30'}>——</span>
              {activeSection === 'home' ? (
                <span className="w-2.5 h-2.5 rounded-full bg-[#d90429] shadow-[0_0_10px_rgba(217,4,41,0.9)] inline-block" />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full border border-white/40 group-hover:border-[#d90429] group-hover:bg-[#d90429] transition-all inline-block" />
              )}
            </button>

            <button 
              onClick={onExploreProjects}
              className={`group flex items-center gap-2.5 cursor-pointer transition-colors ${
                activeSection === 'portfolio' ? 'text-white font-bold' : 'hover:text-white'
              }`}
            >
              <span className="group-hover:text-white transition-colors">PORTFOLIO</span>
              <span className={activeSection === 'portfolio' ? 'text-white/60' : 'text-white/30'}>——</span>
              {activeSection === 'portfolio' ? (
                <span className="w-2.5 h-2.5 rounded-full bg-[#d90429] shadow-[0_0_10px_rgba(217,4,41,0.9)] inline-block" />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full border border-white/40 group-hover:border-[#d90429] group-hover:bg-[#d90429] transition-all inline-block" />
              )}
            </button>

            <button 
              onClick={() => scrollToSection('skills-process')}
              className={`group flex items-center gap-2.5 cursor-pointer transition-colors ${
                activeSection === 'experience' ? 'text-white font-bold' : 'hover:text-white'
              }`}
            >
              <span className="group-hover:text-white transition-colors">EXPERIENCE</span>
              <span className={activeSection === 'experience' ? 'text-white/60' : 'text-white/30'}>——</span>
              {activeSection === 'experience' ? (
                <span className="w-2.5 h-2.5 rounded-full bg-[#d90429] shadow-[0_0_10px_rgba(217,4,41,0.9)] inline-block" />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full border border-white/40 group-hover:border-[#d90429] group-hover:bg-[#d90429] transition-all inline-block" />
              )}
            </button>

            {onNavigateToDossier && (
              <button 
                onClick={onNavigateToDossier}
                className="group flex items-center gap-2.5 hover:text-white cursor-pointer transition-colors"
              >
                <span className="group-hover:text-[#ef233c] transition-colors">DOSSIER</span>
                <span className="text-white/30">——</span>
                <span className="w-2.5 h-2.5 rounded-full border border-[#d90429]/60 group-hover:border-[#d90429] group-hover:bg-[#d90429] transition-all inline-block" />
              </button>
            )}

            <button 
              onClick={() => scrollToSection('contact')}
              className={`group flex items-center gap-2.5 cursor-pointer transition-colors ${
                activeSection === 'contact' ? 'text-white font-bold' : 'hover:text-white'
              }`}
            >
              <span className="group-hover:text-white transition-colors">CONTACT</span>
              <span className={activeSection === 'contact' ? 'text-white/60' : 'text-white/30'}>——</span>
              {activeSection === 'contact' ? (
                <span className="w-2.5 h-2.5 rounded-full bg-[#d90429] shadow-[0_0_10px_rgba(217,4,41,0.9)] inline-block" />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full border border-white/40 group-hover:border-[#d90429] group-hover:bg-[#d90429] transition-all inline-block" />
              )}
            </button>

          </div>

          {/* CIRCULAR DC-STYLE RED EMBLEM STAMP (Exact Batman Reference) */}
          <div className="pt-3">
            <div 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#d90429] bg-[#d90429]/15 flex items-center justify-center shadow-[0_0_20px_rgba(217,4,41,0.5)] group cursor-pointer hover:scale-105 transition-transform"
              title="SV Creative Studio"
              onClick={onNavigateToDossier}
            >
              <div className="w-8 h-8 rounded-full border border-[#d90429]/50 flex items-center justify-center font-['Bebas_Neue'] text-xs font-black text-[#d90429] tracking-wider">
                SV
              </div>
            </div>
          </div>

        </motion.aside>

      </div>

      {/* BOTTOM FILMSTRIP / GALLERY CAROUSEL (Exact Batman Reference) */}
      <footer className="relative z-30 w-full max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 pb-5 sm:pb-6">
        
        {/* Active Project Highlight Banner Bar */}
        <div className="flex items-center justify-between pb-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#d90429] animate-pulse" />
            <span className="font-mono uppercase tracking-widest text-[#d90429] font-bold text-[11px]">
              FEATURED CASE STUDY:
            </span>
            <span className="font-['Space_Grotesk'] text-white font-semibold truncate max-w-[240px] sm:max-w-md">
              {activeProject.title}
            </span>
            {activeProject.metrics && (
              <span className="hidden md:inline text-white/50 text-[11px] font-mono">
                · {activeProject.metrics}
              </span>
            )}
          </div>

          <button
            onClick={() => onSelectProject && onSelectProject(activeProject)}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ef233c] hover:text-white transition-colors cursor-pointer"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#d90429]" />
          </button>
        </div>

        {/* 5-Card Horizontal Filmstrip with Center/Active Red Border Box */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 sm:gap-4 items-center">
          {filmstripProjects.map((project, idx) => {
            const isActive = activeFilmIndex === idx;
            return (
              <button
                key={project.id}
                onClick={() => handleSelectCard(idx)}
                className={`group relative aspect-[16/10] w-full rounded overflow-hidden cursor-pointer transition-all duration-300 text-left ${
                  isActive
                    ? 'border-2 border-[#d90429] shadow-[0_0_25px_rgba(217,4,41,0.6)] scale-[1.03] z-10'
                    : 'border border-white/10 opacity-45 hover:opacity-90 grayscale hover:grayscale-0'
                }`}
                title={project.title}
              >
                {/* Thumbnail Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Vignette Scrim */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'bg-gradient-to-t from-black/85 via-black/25 to-transparent' : 'bg-black/60 group-hover:bg-black/20'}`} />

                {/* Number Badge & Title on Active Card */}
                <div className="absolute inset-x-2 bottom-1.5 flex items-end justify-between">
                  <span className={`font-['Bebas_Neue'] text-lg font-black leading-none ${isActive ? 'text-[#d90429]' : 'text-white/60'}`}>
                    0{idx + 1}
                  </span>
                  {isActive && (
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/90 truncate max-w-[80%] text-right font-bold">
                      {project.categoryLabel}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

      </footer>

      {/* MATRIX QUICK NAVIGATION DRAWER (Triggered by 3x3 Grid on Top-Left) */}
      <AnimatePresence>
        {isMatrixMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 max-w-5xl mx-auto w-full">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#d90429] flex items-center justify-center font-['Bebas_Neue'] text-lg font-bold text-white">
                  SV
                </div>
                <div>
                  <span className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white">
                    Satya Vadali
                  </span>
                  <span className="text-xs font-mono text-[#8e939d] block">
                    Graphic Designer & Digital Marketing
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsMatrixMenuOpen(false)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#8e939d] hover:text-white transition-colors cursor-pointer"
                aria-label="Close Navigation Matrix"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links Grid */}
            <div className="max-w-5xl mx-auto w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#d90429] font-bold">
                  PORTFOLIO SECTIONS
                </span>
                <nav className="flex flex-col space-y-4 font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase">
                  <button 
                    onClick={() => { setIsMatrixMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-left text-white hover:text-[#d90429] transition-colors flex items-center justify-between group"
                  >
                    <span>01. Hero & Overview</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </button>

                  <button 
                    onClick={() => { setIsMatrixMenuOpen(false); onExploreProjects(); }}
                    className="text-left text-white hover:text-[#d90429] transition-colors flex items-center justify-between group"
                  >
                    <span>02. Selected Projects</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </button>

                  <button 
                    onClick={() => scrollToSection('skills-process')}
                    className="text-left text-white hover:text-[#d90429] transition-colors flex items-center justify-between group"
                  >
                    <span>03. Process & Skills</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </button>

                  {onNavigateToDossier && (
                    <button 
                      onClick={() => { setIsMatrixMenuOpen(false); onNavigateToDossier(); }}
                      className="text-left text-[#ef233c] hover:text-white transition-colors flex items-center justify-between group"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#d90429]" />
                        <span>04. Executive Dossier</span>
                      </span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </button>
                  )}

                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-left text-white hover:text-[#d90429] transition-colors flex items-center justify-between group"
                  >
                    <span>05. Contact & Collaboration</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </button>
                </nav>
              </div>

              {/* Drawer Right: Quick Actions & Credentials */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#d90429] font-bold">
                    OFFICIAL ASSETS
                  </span>
                  <div className="space-y-3">
                    <button
                      onClick={() => { setIsMatrixMenuOpen(false); onOpenPdfResume(); }}
                      className="w-full p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#d90429] transition-all text-left flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="text-sm font-bold text-white uppercase tracking-wider">
                          Download Official PDF Resume
                        </div>
                        <div className="text-xs text-[#8e939d]">
                          Verified credentials, education & agency track record
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-[#d90429] group-hover:scale-110 transition-transform" />
                    </button>

                    <a
                      href={CONTACT_INFO.driveFolderUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#d90429] transition-all text-left flex items-center justify-between group cursor-pointer block"
                    >
                      <div>
                        <div className="text-sm font-bold text-white uppercase tracking-wider">
                          Google Drive Asset Repository
                        </div>
                        <div className="text-xs text-[#8e939d]">
                          Master video exports, packaging dielines & raw vectors
                        </div>
                      </div>
                      <FolderOpen className="w-4 h-4 text-[#d90429] group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 text-xs font-mono text-[#8e939d] flex items-center justify-between">
                  <span>PHONE: +91 9550036165</span>
                  <span>EMAIL: vsatya3005@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="border-t border-white/10 pt-4 text-center text-xs font-mono text-[#8e939d] max-w-5xl mx-auto w-full">
              Vadali Satya Sai Sandeep · Shambhavi Design.co · 2026 Edition
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
