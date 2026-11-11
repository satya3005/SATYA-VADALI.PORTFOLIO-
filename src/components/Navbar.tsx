import React, { useState } from 'react';
import { ViewMode } from '../types';
import { CONTACT_INFO } from '../data/portfolioData';
import { Phone, FileText, LayoutGrid, Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  activeView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onOpenPdfResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onViewChange,
  onOpenPdfResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (activeView !== 'overview') {
      onViewChange('overview');
      // allow state to update before scrolling
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0a0b10]/85 backdrop-blur-md transition-all">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Monogram & Brand Title */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              onViewChange('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00f2fe] to-[#ff9900] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0d0e14] rounded-[7px] flex items-center justify-center">
                <span className="font-['Space_Grotesk'] font-bold text-sm tracking-wider text-white">
                  VS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] font-bold text-base tracking-tight text-white group-hover:text-[#00f2fe] transition-colors whitespace-nowrap">
                Satya Vadali
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#9ba1b0] hidden sm:inline whitespace-nowrap">
                GenAI & Design
              </span>
            </div>
          </button>

          {/* Quick Dual-Mode View Switcher */}
          <div className="hidden lg:flex items-center ml-4 p-1 bg-white/[0.04] border border-white/10 rounded-lg">
            <button
              onClick={() => onViewChange('overview')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeView === 'overview'
                  ? 'bg-[#00f2fe] text-[#0a0b10] font-semibold shadow-[0_0_12px_rgba(0,242,254,0.3)]'
                  : 'text-[#9ba1b0] hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Overview
            </button>
            <button
              onClick={() => onViewChange('resume')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeView === 'resume'
                  ? 'bg-[#ff9900] text-[#0a0b10] font-semibold shadow-[0_0_12px_rgba(255,153,0,0.3)]'
                  : 'text-[#9ba1b0] hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Detailed Resume
            </button>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Single-Line) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#9ba1b0]">
          <button
            onClick={() => handleNavClick('overview')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            Overview
          </button>
          <button
            onClick={() => handleNavClick('metrics')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            Metrics
          </button>
          <button
            onClick={() => handleNavClick('works')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            Works
          </button>
          <button
            onClick={() => {
              onViewChange('resume');
              setTimeout(() => {
                const el = document.getElementById('experience-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-[#ff9900] transition-colors whitespace-nowrap cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => {
              onViewChange('resume');
              setTimeout(() => {
                const el = document.getElementById('skills-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-[#00f2fe] transition-colors whitespace-nowrap cursor-pointer"
          >
            Skills & AI
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Glowing Cyan Call Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPdfResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/90 bg-white/[0.04] border border-white/10 rounded-full hover:border-[#ff9900]/60 hover:text-[#ff9900] transition-all cursor-pointer whitespace-nowrap"
            title="View PDF Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume PDF
          </button>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0a0b10] bg-[#00f2fe] rounded-full shadow-[0_0_16px_rgba(0,242,254,0.35)] hover:shadow-[0_0_24px_rgba(0,242,254,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>{CONTACT_INFO.phoneDisplay}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#9ba1b0] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0d0e14]/95 backdrop-blur-xl px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            <button
              onClick={() => {
                onViewChange('overview');
                setMobileMenuOpen(false);
              }}
              className={`p-2 text-xs font-semibold rounded-md flex items-center justify-center gap-2 ${
                activeView === 'overview'
                  ? 'bg-[#00f2fe] text-[#0a0b10]'
                  : 'bg-white/5 text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              Overview
            </button>
            <button
              onClick={() => {
                onViewChange('resume');
                setMobileMenuOpen(false);
              }}
              className={`p-2 text-xs font-semibold rounded-md flex items-center justify-center gap-2 ${
                activeView === 'resume'
                  ? 'bg-[#ff9900] text-[#0a0b10]'
                  : 'bg-white/5 text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              Detailed Resume
            </button>
          </div>

          <div className="flex flex-col space-y-2.5 text-sm font-medium text-[#9ba1b0]">
            <button
              onClick={() => handleNavClick('overview')}
              className="text-left py-1 hover:text-[#00f2fe]"
            >
              Overview
            </button>
            <button
              onClick={() => handleNavClick('metrics')}
              className="text-left py-1 hover:text-[#00f2fe]"
            >
              Metrics & Growth
            </button>
            <button
              onClick={() => handleNavClick('works')}
              className="text-left py-1 hover:text-[#00f2fe]"
            >
              Works & Drive Showcase
            </button>
            <button
              onClick={() => {
                onViewChange('resume');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 hover:text-[#ff9900]"
            >
              Career Experience Timeline
            </button>
            <button
              onClick={() => {
                onViewChange('resume');
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 hover:text-[#00f2fe]"
            >
              7-Pillar Skills & AI Platform
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-1 hover:text-[#00f2fe]"
            >
              Contact Details
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfResume();
              }}
              className="w-full py-2 px-3 text-xs font-medium text-center text-white bg-white/5 border border-white/10 rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#ff9900]" />
              View & Download PDF Resume
            </button>
            <a
              href={CONTACT_INFO.driveFolderUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 text-xs font-medium text-center text-[#00f2fe] bg-[#00f2fe]/10 border border-[#00f2fe]/20 rounded-lg flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Open Drive Works Repository
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
