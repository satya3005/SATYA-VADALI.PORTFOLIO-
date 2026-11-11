import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Copy,
  Check,
  FolderOpen,
  FileText,
  ArrowUp,
  Sparkles,
} from 'lucide-react';

interface ContactFooterProps {
  onOpenPdfResume: () => void;
  onViewResumeMode: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onOpenPdfResume,
  onViewResumeMode,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-16 pb-12 border-t border-white/10 bg-[#08090d] relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div 
        className="pointer-events-none absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-[#00f2fe]/5 rounded-full blur-[140px]" 
        aria-hidden="true"
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Main Contact CTA Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#12141c]/90 border border-white/10 backdrop-blur-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#00f2fe] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Creative & Growth Roles</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Let's Accelerate Your Brand Identity & Performance Marketing
            </h2>
            <p className="text-sm text-[#9ba1b0] leading-relaxed">
              Seeking collaborative opportunities across Generative AI creative direction, high-converting digital advertising, and corporate branding systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#0a0b10] bg-[#00f2fe] rounded-lg shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_30px_rgba(0,242,254,0.55)] transition-all cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: +91 9550036165</span>
            </a>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/5 border border-white/15 rounded-lg hover:border-[#25D366] hover:text-[#25D366] transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>

        {/* Direct Contact Details Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Phone Card */}
          <div className="p-5 rounded-xl bg-[#12141c]/50 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f2fe]">
              <Phone className="w-4 h-4" />
              <span>Direct Phone</span>
            </div>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="font-['Space_Grotesk'] text-lg font-bold text-white hover:text-[#00f2fe] transition-colors block"
            >
              {CONTACT_INFO.phoneDisplay}
            </a>
            <p className="text-xs text-[#9ba1b0]">
              Available Monday – Saturday, 9 AM – 8 PM IST
            </p>
          </div>

          {/* Email Card */}
          <div className="p-5 rounded-xl bg-[#12141c]/50 border border-white/5 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff9900]">
                <Mail className="w-4 h-4" />
                <span>Primary Email</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="text-[11px] text-[#9ba1b0] hover:text-white flex items-center gap-1 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-[#00f2fe]" />
                    <span className="text-[#00f2fe]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-['Space_Grotesk'] text-lg font-bold text-white hover:text-[#ff9900] transition-colors block break-all"
            >
              {CONTACT_INFO.email}
            </a>
            <p className="text-xs text-[#9ba1b0]">
              Inquiries and portfolio requests
            </p>
          </div>

          {/* Location Card */}
          <div className="p-5 rounded-xl bg-[#12141c]/50 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f2fe]">
              <MapPin className="w-4 h-4" />
              <span>Location & Studio Base</span>
            </div>
            <div className="font-['Space_Grotesk'] text-sm sm:text-base font-semibold text-white leading-snug">
              Visakhapatnam, Andhra Pradesh
            </div>
            <p className="text-xs text-[#9ba1b0] leading-relaxed">
              {CONTACT_INFO.fullAddress}
            </p>
          </div>

        </div>

        {/* Footer Bottom Bar with Quick Links & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9ba1b0]">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-[#00f2fe] to-[#ff9900] flex items-center justify-center text-[10px] font-bold text-[#0a0b10]">
              VS
            </div>
            <span>© {new Date().getFullYear()} Vadali Satya Sai Sandeep. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={onViewResumeMode}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume View
            </button>
            <a
              href={CONTACT_INFO.driveFolderUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00f2fe] transition-colors cursor-pointer flex items-center gap-1"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              Google Drive Portfolio
            </a>
            <button
              onClick={onOpenPdfResume}
              className="hover:text-[#ff9900] transition-colors cursor-pointer flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              Download Resume
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:border-[#00f2fe] hover:text-[#00f2fe] transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
