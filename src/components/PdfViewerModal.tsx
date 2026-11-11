import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { X, Download, ExternalLink, FileText, CheckCircle, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfUrl = CONTACT_INFO.resumePdfPath;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Vadali_Satya_Sai_Sandeep_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      
      {/* Modal Dialog Container */}
      <div 
        className={`relative w-full ${
          isFullscreen ? 'h-full max-w-none' : 'max-w-5xl h-[90vh]'
        } bg-[#0d0e14] border border-white/15 rounded-2xl shadow-[0_16px_64px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden transition-all duration-300`}
      >
        
        {/* Modal Header Bar */}
        <div className="px-5 py-3.5 bg-[#141620] border-b border-white/10 flex items-center justify-between gap-4 shrink-0">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ff9900]/15 border border-[#ff9900]/30 flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#ff9900]" />
            </div>
            <div>
              <h3 className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Vadali Satya Sai Sandeep — Official Resume
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-[#00f2fe]">
                  PDF Verified
                </span>
              </h3>
              <p className="text-[11px] text-[#9ba1b0]">
                Graphic Designer & Digital Marketing Associate · Visakhapatnam
              </p>
            </div>
          </div>

          {/* Controls: Zoom, Fullscreen, Download, Close */}
          <div className="flex items-center gap-2">
            
            <div className="hidden sm:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10 text-xs text-white">
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 15, 70))}
                className="p-1 hover:text-[#00f2fe] rounded"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-1.5 font-mono text-[11px] text-[#9ba1b0]">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 15, 150))}
                className="p-1 hover:text-[#00f2fe] rounded"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="hidden sm:p-2 rounded-lg bg-white/5 border border-white/10 text-[#9ba1b0] hover:text-white transition-colors"
              title="Toggle Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            {/* Direct Download Button */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0a0b10] bg-[#ff9900] hover:bg-[#ffaa22] rounded-lg shadow-[0_0_12px_rgba(255,153,0,0.3)] transition-all cursor-pointer whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-[#0a0b10]" />
              <span>Download (.PDF)</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#9ba1b0] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Modal Body: Embedded PDF Viewport */}
        <div className="flex-1 bg-[#1a1b22] relative overflow-auto flex flex-col items-center p-2 sm:p-4">
          <div 
            className="w-full h-full min-h-[500px] flex items-center justify-center transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-full rounded-lg border border-white/10 shadow-2xl bg-white"
            >
              {/* Fallback if browser PDF plugin is blocked or on mobile */}
              <div className="p-8 text-center max-w-lg bg-[#12141c] rounded-2xl border border-white/10 space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#ff9900]/15 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-[#ff9900]" />
                </div>
                <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                  PDF Preview Ready
                </h4>
                <p className="text-xs text-[#9ba1b0] leading-relaxed">
                  Your device or browser preview is ready. You can open the full high-resolution curriculum vitae directly in a new tab or save it locally.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleDownload}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0a0b10] bg-[#ff9900] rounded-lg"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF Now
                  </button>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-white/10 border border-white/15 rounded-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in New Window
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>

        {/* Modal Footer Strip */}
        <div className="px-5 py-2.5 bg-[#12141c] border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#9ba1b0]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-[#00f2fe]" />
            <span>Authored by Vadali Satya Sai Sandeep · Last Updated 2026</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-white/50">
              Format: Standard A4 · 1 Page
            </span>
            <button
              onClick={handleDownload}
              className="text-[#ff9900] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3 h-3" />
              Direct Download
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
