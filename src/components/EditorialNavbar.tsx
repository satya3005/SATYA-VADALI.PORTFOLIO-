import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { FileText, Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface EditorialNavbarProps {
  onOpenPdfResume: () => void;
  onNavigateToDossier: () => void;
  activePage: 'overview' | 'dossier';
}

export const EditorialNavbar: React.FC<EditorialNavbarProps> = ({ 
  onOpenPdfResume,
  onNavigateToDossier,
  activePage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // On overview page, hide navbar at the top so hero stage displays pure Batman movie UI
  const shouldShow = activePage !== 'overview' || isScrolled;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 w-full bg-[#08080a]/95 backdrop-blur-md border-b border-white/[0.08] transition-all duration-300 ${
      shouldShow ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (activePage !== 'overview') {
                window.location.hash = '#overview';
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-[#d90429] flex items-center justify-center font-['Bebas_Neue'] text-lg font-bold text-white tracking-wider shadow-[0_0_15px_rgba(217,4,41,0.5)] transition-transform group-hover:scale-105">
              SV
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] font-bold text-sm text-white tracking-tight uppercase group-hover:text-[#ef233c] transition-colors">
                Satya Vadali
              </span>
              <span className="text-[10px] text-[#8e939d] uppercase tracking-widest hidden sm:inline">
                Design & Digital Marketing
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#8e939d]">
          <button
            onClick={() => {
              if (activePage !== 'overview') {
                window.location.hash = '#overview';
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={`transition-colors cursor-pointer ${activePage === 'overview' ? 'text-white' : 'hover:text-white'}`}
          >
            Overview
          </button>
          
          <button
            onClick={onNavigateToDossier}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#d90429] bg-[#d90429]/10 border border-[#d90429]/35 hover:bg-[#d90429]/20 hover:border-[#d90429] shadow-[0_0_14px_rgba(217,4,41,0.25)] transition-all cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d90429] animate-pulse" />
            <span>Executive Dossier</span>
          </button>

          <button
            onClick={() => scrollTo('projects')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo('skills-process')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Skills & Process
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPdfResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-white/[0.05] border border-white/10 hover:border-[#d90429] hover:text-[#ef233c] transition-all cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-[#d90429]" />
            <span>Resume PDF</span>
          </button>

          <a
            href={CONTACT_INFO.driveFolderUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#8e939d] hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Drive Works</span>
            <ArrowUpRight className="w-3 h-3 text-[#d90429]" />
          </a>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-[#d90429] hover:bg-[#ef233c] shadow-[0_0_18px_rgba(217,4,41,0.45)] hover:shadow-[0_0_24px_rgba(217,4,41,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer uppercase tracking-wider"
          >
            <Phone className="w-3 h-3 fill-current" />
            <span>+91 9550036165</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#8e939d] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0d0e14]/98 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-wider font-semibold text-[#8e939d]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (activePage !== 'overview') {
                  window.location.hash = '#overview';
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-left py-1 hover:text-[#d90429]"
            >
              Overview
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToDossier();
              }}
              className="text-left py-1 text-[#d90429] font-bold flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#d90429] animate-pulse" />
              <span>Executive Dossier</span>
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="text-left py-1 hover:text-[#d90429]"
            >
              Selected Projects
            </button>
            <button
              onClick={() => scrollTo('skills-process')}
              className="text-left py-1 hover:text-[#d90429]"
            >
              Education, Skills & Process
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-1 hover:text-[#d90429]"
            >
              Let's Work Together
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfResume();
              }}
              className="w-full py-2.5 px-3 text-xs font-semibold text-center text-white bg-white/5 border border-white/10 rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#d90429]" />
              View & Download PDF Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
