import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Globe, ArrowRight, Copy, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const EditorialContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const workspaceImage = "/src/assets/images/creative_workspace_desk_1794399135525.jpg";

  return (
    <footer id="contact" className="py-16 md:py-24 border-t border-white/[0.08] bg-[#060608]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 3-Part Contact Section matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Availability CTA (4 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-5"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d90429]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight leading-tight">
                Let's Work
                <br />
                Together <span className="text-[#d90429]">✦</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#8e939d] leading-relaxed max-w-sm">
              I'm currently open for new roles, high-impact creative projects, and performance marketing collaborations. Let's create something amazing that drives measurable growth.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#d90429] hover:bg-[#ef233c] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(217,4,41,0.45)] hover:shadow-[0_0_28px_rgba(217,4,41,0.7)] cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Available For Hire · Call Now</span>
              </a>
            </div>
          </motion.div>

          {/* Middle Column: Icon-Based Contact Rows (4 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 space-y-3"
          >
            {/* Email Row */}
            <div className="p-3.5 rounded-lg bg-[#0e1015] border border-white/[0.08] hover:border-[#d90429]/40 transition-colors flex items-center justify-between gap-3 group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d90429] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#555a64]">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-xs font-semibold text-white group-hover:text-[#ef233c] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 text-[#8e939d] hover:text-white transition-colors cursor-pointer"
                title="Copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#00f2fe]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Google Drive Works Row */}
            <a
              href={CONTACT_INFO.driveFolderUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-lg bg-[#0e1015] border border-white/[0.08] hover:border-[#d90429]/40 transition-colors flex items-center justify-between gap-3 group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d90429] shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#555a64]">
                    Master Deliverables
                  </div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#ef233c] transition-colors">
                    drive.google.com/satya-vadali
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#8e939d] group-hover:text-[#d90429] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Phone Row */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="p-3.5 rounded-lg bg-[#0e1015] border border-white/[0.08] hover:border-[#d90429]/40 transition-colors flex items-center justify-between gap-3 group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d90429] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#555a64]">
                    Phone / WhatsApp
                  </div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#ef233c] transition-colors">
                    {CONTACT_INFO.phoneDisplay}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#8e939d] group-hover:text-[#d90429] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Location Row */}
            <div className="p-3.5 rounded-lg bg-[#0e1015] border border-white/[0.08] flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d90429] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#555a64]">
                  Base Location
                </div>
                <div className="text-xs font-semibold text-white">
                  Kurmannapalem, Visakhapatnam, AP
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Realistic Workspace Setup Image (4 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-[#121318] shadow-[0_12px_40px_rgba(0,0,0,0.8)] group">
              <img
                src={workspaceImage}
                alt="Realistic creative workspace setup"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Red glow accent line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d90429] to-transparent" />

              {/* Embedded floating tagline badge on workspace photo */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#08080a]/90 border border-white/10 backdrop-blur-md flex items-center justify-between text-[11px] font-mono">
                <span className="text-white font-bold tracking-wider uppercase">
                  Studio Workstation
                </span>
                <span className="text-[#d90429] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d90429] animate-pulse" />
                  Active
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[#555a64]">
          <div>
            © {new Date().getFullYear()} Vadali Satya Sai Sandeep · All Rights Reserved
          </div>
          <div className="flex items-center gap-6">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#d90429] transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
