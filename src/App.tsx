import React, { useState, useEffect } from 'react';
import { ViewMode, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsCounters } from './components/MetricsCounters';
import { MarqueeTicker } from './components/MarqueeTicker';
import { WorksSection } from './components/WorksSection';
import { ResumeScreen } from './components/ResumeScreen';
import { ContactFooter } from './components/ContactFooter';
import { PdfViewerModal } from './components/PdfViewerModal';
import { ProjectModal } from './components/ProjectModal';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeView, setActiveView] = useState<ViewMode>('overview');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleExploreWorks = () => {
    if (activeView !== 'overview') {
      setActiveView('overview');
      setTimeout(() => {
        const el = document.getElementById('works');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('works');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b10] text-[#e3e1e9] flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#00f2fe]/25 selection:text-[#00f2fe] relative">
      
      {/* Interactive Cyber Ambient Cursor Spotlight Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 242, 254, 0.045), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar
        activeView={activeView}
        onViewChange={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPdfResume={() => setIsPdfModalOpen(true)}
      />

      {/* Main View Router with Smooth Motion Transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeView === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Screen 1: Hero, Cinematic Visuals & Dynamic Counters */}
              <HeroSection
                onExploreWorks={handleExploreWorks}
                onOpenPdfResume={() => setIsPdfModalOpen(true)}
                onViewResumeMode={() => {
                  setActiveView('resume');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />

              {/* Kinetic Counters (Row of 4 Glass Cards) */}
              <MetricsCounters />

              {/* Cinematic Animated Marquee Divider */}
              <MarqueeTicker />

              {/* Curated Works & Google Drive Media Showcase */}
              <WorksSection
                onSelectProject={(project) => setSelectedProject(project)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="resume"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Screen 2: Detailed Professional Profile & Resume Experience */}
              <ResumeScreen
                onBackToOverview={() => {
                  setActiveView('overview');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenPdfResume={() => setIsPdfModalOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Contact Footer Strip */}
      <ContactFooter
        onOpenPdfResume={() => setIsPdfModalOpen(true)}
        onViewResumeMode={() => {
          setActiveView('resume');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Interactive PDF Resume Previewer & Downloader Modal */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Portfolio Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
