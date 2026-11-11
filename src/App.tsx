import React, { useState, useEffect } from 'react';
import { ProjectItem } from './types';
import { EditorialNavbar } from './components/EditorialNavbar';
import { EditorialHero } from './components/EditorialHero';
import { SelectedProjects } from './components/SelectedProjects';
import { EditorialProcessSkills } from './components/EditorialProcessSkills';
import { EditorialContact } from './components/EditorialContact';
import { ResumeScreen } from './components/ResumeScreen';
import { PdfViewerModal } from './components/PdfViewerModal';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [activePage, setActivePage] = useState<'overview' | 'dossier'>('overview');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#dossier' || hash === '#credentials' || hash === '#journey') {
        setActivePage('dossier');
      } else {
        setActivePage('overview');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToDossier = () => {
    window.location.hash = '#dossier';
    setActivePage('dossier');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToOverview = () => {
    window.location.hash = '#overview';
    setActivePage('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreProjects = () => {
    if (activePage !== 'overview') {
      window.location.hash = '#overview';
      setActivePage('overview');
      setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f1f2f6] flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#d90429]/30 selection:text-white relative">
      
      {activePage === 'overview' ? (
        <>
          {/* Editorial Top Navigation for Overview */}
          <EditorialNavbar
            activePage={activePage}
            onNavigateToDossier={navigateToDossier}
            onOpenPdfResume={() => setIsPdfModalOpen(true)}
          />

          {/* Main Editorial Content (Page 1) */}
          <main className="flex-1">
            {/* Hero Section: Batman Cinematic Style with Top Bar, Center Subject, Right Wayfinder Rail, and Bottom Filmstrip */}
            <EditorialHero
              onOpenPdfResume={() => setIsPdfModalOpen(true)}
              onExploreProjects={handleExploreProjects}
              onNavigateToDossier={navigateToDossier}
              onSelectProject={(project) => setSelectedProject(project)}
            />

            {/* Selected Projects Showcase: 01, 02, 03 Numbered Cards */}
            <SelectedProjects
              onSelectProject={(project) => setSelectedProject(project)}
            />

            {/* Multi-Column Grid: Education & Skills, Work Process Connected Timeline, Crimson Testimonial Card */}
            <EditorialProcessSkills />

            {/* High-Contrast "Let's Work Together" Contact Section with Realistic Workspace Image */}
            <EditorialContact />
          </main>
        </>
      ) : (
        /* Executive Profile & 7-Pillar Skills Dossier (Page 2) matching user screenshot */
        <ResumeScreen
          onBackToOverview={navigateToOverview}
          onOpenPdfResume={() => setIsPdfModalOpen(true)}
        />
      )}

      {/* Interactive Official PDF Resume Modal */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Project Lightbox Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
