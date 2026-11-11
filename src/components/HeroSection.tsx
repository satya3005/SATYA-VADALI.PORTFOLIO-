import React, { useState } from 'react';
import { CONTACT_INFO, USER_PHOTOS } from '../data/portfolioData';
import { Sparkles, Download, ArrowRight, MapPin, Eye, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onExploreWorks: () => void;
  onOpenPdfResume: () => void;
  onViewResumeMode: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWorks,
  onOpenPdfResume,
  onViewResumeMode,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string>(USER_PHOTOS.heroPortrait);

  const photoOptions = [
    { id: 'portrait', src: USER_PHOTOS.heroPortrait, label: 'Pier Aesthetic' },
    { id: 'smiling', src: USER_PHOTOS.smilingPortrait, label: 'Creative Portrait' },
    { id: 'full', src: USER_PHOTOS.fullPose, label: 'Beachside Stance' },
  ];

  return (
    <section id="overview" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Ambient background glowing orbs */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00f2fe]/12 blur-[130px] animate-pulse-subtle" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/3 -right-24 w-[450px] h-[450px] rounded-full bg-[#ff9900]/10 blur-[140px] animate-pulse-subtle" 
        aria-hidden="true" 
      />
      
      {/* Ambient cyber grid texture */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Floating ambient micro particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/6 w-1.5 h-1.5 rounded-full bg-[#00f2fe] blur-[0.5px] animate-float opacity-75" />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-[#ff9900] blur-[0.5px] animate-float opacity-60 [animation-delay:1.5s]" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#00f2fe] blur-[0.5px] animate-float opacity-70 [animation-delay:3s]" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Location & Role Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-medium text-[#b9cacb] shadow-sm hover:border-[#00f2fe]/40 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#00f2fe]" />
              <span className="text-white font-medium">Visakhapatnam, India</span>
              <span className="text-white/30">·</span>
              <span className="text-[#00f2fe] font-semibold">Graphic Designer & Digital Marketer</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance"
            >
              Crafting High-Converting{' '}
              <span className="bg-gradient-to-r from-white via-[#00f2fe] to-[#ff9900] bg-clip-text text-transparent">
                Brand Identities
              </span>{' '}
              & Generative AI Visuals
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#9ba1b0] leading-relaxed max-w-2xl font-normal"
            >
              Leveraging cutting-edge GenAI workflows, cross-platform performance marketing, and cinematic storytelling to accelerate engagement and deliver measurable business impact.
            </motion.p>

            {/* Trust Markers / Highlights */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#9ba1b0] pt-1"
            >
              <span className="inline-flex items-center gap-1.5 text-white/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe]" />
                Skylark Overseas Education (Associate)
              </span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1.5 text-white/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff9900]" />
                Prompt Engineer & Visual Strategist
              </span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1.5 text-white/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe]" />
                Meta & Google Ads Performance
              </span>
            </motion.div>

            {/* Dual CTAs & Secondary Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* Primary Filled Cyan Button */}
              <button
                onClick={onExploreWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0a0b10] bg-[#00f2fe] rounded-lg shadow-[0_0_24px_rgba(0,242,254,0.4)] hover:shadow-[0_0_36px_rgba(0,242,254,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Explore Profile & Works</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Glass Outline Resume Button */}
              <button
                onClick={onOpenPdfResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/[0.04] border border-white/15 rounded-lg hover:border-[#ff9900]/80 hover:bg-[#ff9900]/10 hover:text-[#ff9900] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer backdrop-blur-md whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#ff9900]" />
                <span>Download Resume (.PDF)</span>
              </button>

              {/* Quick switch to Detailed Resume */}
              <button
                onClick={onViewResumeMode}
                className="text-xs text-[#9ba1b0] hover:text-[#00f2fe] transition-colors py-2 px-1 flex items-center gap-1 cursor-pointer underline underline-offset-4 decoration-white/20 hover:decoration-[#00f2fe]"
              >
                <Eye className="w-3.5 h-3.5" />
                View Full Career Timeline
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Circular Glassmorphism Profile Portrait (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            
            {/* Cinematic Circular Glow Container */}
            <div className="relative group">
              {/* Animated pulsating wave ripples behind portrait */}
              <div 
                className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#00f2fe]/25 via-[#ff9900]/20 to-transparent blur-2xl animate-wave-ripple"
                aria-hidden="true" 
              />
              
              {/* Outer ambient rotating dashed halo */}
              <div 
                className="absolute -inset-2 rounded-full border border-dashed border-[#ff9900]/30 animate-[spin_35s_linear_infinite]"
                aria-hidden="true"
              />

              {/* Cyan inner rotating micro ring */}
              <div 
                className="absolute -inset-0.5 rounded-full border border-dotted border-[#00f2fe]/25 animate-[spin_25s_linear_infinite_reverse]"
                aria-hidden="true"
              />

              {/* Outer Glassmorphism Frame with Warm Amber Rim Glow */}
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 rounded-full p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-[#00f2fe]/20 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(255,153,0,0.25)] group-hover:shadow-[0_0_50px_rgba(0,242,254,0.35)] transition-shadow duration-500">
                
                {/* Golden/Amber Inner Rim */}
                <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-[#ff9900]/40 via-transparent to-[#00f2fe]/40 overflow-hidden">
                  
                  {/* Photo Frame */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0d0e14] relative">
                    <img
                      src={selectedPhoto}
                      alt="Vadali Satya Sai Sandeep"
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-108"
                      loading="eager"
                    />

                    {/* Subtle cinematic gradient vignette over image */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-[#0a0b10]/60 via-transparent to-transparent pointer-events-none" 
                      aria-hidden="true"
                    />

                    {/* Embedded micro status pill */}
                    <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
                      <div className="px-3 py-1 rounded-full bg-[#0a0b10]/85 border border-white/15 backdrop-blur-md text-[11px] font-medium text-white/90 flex items-center gap-1.5 shadow-lg group-hover:border-[#00f2fe]/40 transition-colors">
                        <Sparkles className="w-3 h-3 text-[#00f2fe] animate-pulse" />
                        <span>Vadali Satya Sai Sandeep</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Photo Angle Switcher with micro-interactions */}
            <div className="mt-6 flex items-center gap-3 p-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md shadow-md">
              <span className="text-[11px] text-[#9ba1b0] px-2 font-medium">Portraits:</span>
              {photoOptions.map((photo) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo.src)}
                  className={`text-xs px-3 py-1 rounded-full transition-all duration-200 cursor-pointer active:scale-95 ${
                    selectedPhoto === photo.src
                      ? 'bg-gradient-to-r from-[#00f2fe] to-[#ff9900] text-[#0a0b10] font-semibold shadow-md'
                      : 'text-[#b9cacb] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {photo.label}
                </button>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
