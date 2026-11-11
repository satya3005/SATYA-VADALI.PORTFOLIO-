import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, FolderOpen, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [displayedImage, setDisplayedImage] = React.useState<string | null>(null);

  useEffect(() => {
    if (project) {
      setDisplayedImage(project.image);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentVisual = displayedImage || project.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      
      {/* Dialog Box */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0d0e14] border border-white/15 rounded-2xl shadow-[0_16px_64px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#141620] border-b border-white/10 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/25 font-semibold">
              {project.categoryLabel}
            </span>
            {project.metrics && (
              <span className="text-[#ff9900] font-mono text-[11px] hidden sm:inline">
                {project.metrics}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#9ba1b0] hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Main Visual */}
          <div className="space-y-3">
            <div className="relative w-full max-h-[65vh] rounded-xl overflow-hidden border border-white/10 bg-[#07080b] flex items-center justify-center p-2">
              <img
                src={currentVisual}
                alt={project.title}
                className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Gallery switcher if secondary image exists */}
            {project.secondaryImage && (
              <div className="flex items-center justify-center gap-2 pt-1">
                <button
                  onClick={() => setDisplayedImage(project.image)}
                  className={`px-3 py-1 text-xs rounded-full border transition-all cursor-pointer ${
                    currentVisual === project.image
                      ? 'bg-[#00f2fe]/20 text-[#00f2fe] border-[#00f2fe]/50 font-semibold shadow-sm'
                      : 'bg-white/5 text-[#9ba1b0] border-white/10 hover:text-white'
                  }`}
                >
                  DET Duolingo Creative
                </button>
                <button
                  onClick={() => setDisplayedImage(project.secondaryImage!)}
                  className={`px-3 py-1 text-xs rounded-full border transition-all cursor-pointer ${
                    currentVisual === project.secondaryImage
                      ? 'bg-[#00f2fe]/20 text-[#00f2fe] border-[#00f2fe]/50 font-semibold shadow-sm'
                      : 'bg-white/5 text-[#9ba1b0] border-white/10 hover:text-white'
                  }`}
                >
                  New Zealand Intake Poster
                </button>
              </div>
            )}
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-[#9ba1b0] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
              Project Deliverables & Assets
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#e3e1e9]">
              {project.deliverables.map((d) => (
                <div key={d} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#9ba1b0]">
              Technology & Methodologies:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#12141c] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-[#9ba1b0]">
            Shared via Satya Vadali's official Google Drive repository
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.driveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0a0b10] bg-[#00f2fe] hover:bg-[#00dce6] rounded-lg transition-all cursor-pointer shadow-[0_0_12px_rgba(0,242,254,0.3)]"
            >
              <FolderOpen className="w-3.5 h-3.5 fill-current" />
              <span>Open in Google Drive</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
