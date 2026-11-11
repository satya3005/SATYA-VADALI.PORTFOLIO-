import React, { useState } from 'react';
import {
  CONTACT_INFO,
  EXPERIENCES,
  EDUCATION_LIST,
  SKILL_PILLARS,
  CORE_COMPETENCIES,
  LANGUAGES,
} from '../data/portfolioData';
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Sparkles,
  Download,
  Languages,
  CheckCircle,
  Cpu,
  Palette,
  TrendingUp,
  Target,
  Video,
  Cloud,
  ChevronUp,
} from 'lucide-react';
import { motion } from 'motion/react';

interface ResumeScreenProps {
  onBackToOverview: () => void;
  onOpenPdfResume: () => void;
}

export const ResumeScreen: React.FC<ResumeScreenProps> = ({
  onBackToOverview,
  onOpenPdfResume,
}) => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const getPillarIcon = (number: number) => {
    switch (number) {
      case 1:
        return <Cpu className="w-4 h-4 text-[#00f2fe]" />;
      case 2:
        return <Sparkles className="w-4 h-4 text-[#ff9900]" />;
      case 3:
        return <Palette className="w-4 h-4 text-[#00f2fe]" />;
      case 4:
        return <TrendingUp className="w-4 h-4 text-[#ff9900]" />;
      case 5:
        return <Target className="w-4 h-4 text-[#00f2fe]" />;
      case 6:
        return <Video className="w-4 h-4 text-[#ff9900]" />;
      case 7:
        return <Cloud className="w-4 h-4 text-[#00f2fe]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#00f2fe]" />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-10 pb-28 relative">
      {/* Ambient background glows */}
      <div 
        className="pointer-events-none absolute top-20 left-10 w-[450px] h-[450px] rounded-full bg-[#00f2fe]/8 blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full bg-[#ff9900]/8 blur-[140px]" 
        aria-hidden="true" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10"
      >
        
        {/* Header & Quick Contact Bar */}
        <div className="card-shine p-6 rounded-2xl bg-[#12141c]/80 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] space-y-6">
          
          {/* Breadcrumb Navigation & Resume Download Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00f2fe] hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              <span>← Back to Overview</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenPdfResume}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0a0b10] bg-[#ff9900] hover:bg-[#ffaa22] hover:scale-105 active:scale-95 rounded-lg shadow-[0_0_16px_rgba(255,153,0,0.35)] transition-all cursor-pointer whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 text-[#0a0b10]" />
                <span>View / Download Official PDF</span>
              </button>
            </div>
          </div>

          {/* Section Headline */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="text-xs uppercase tracking-widest text-[#ff9900] font-semibold">
                Curriculum Vitae & Verified Credentials
              </div>
              <h1 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Professional Journey, Skills & Credentials
              </h1>
              <p className="text-xs sm:text-sm text-[#9ba1b0]">
                Vadali Satya Sai Sandeep · Graphic Designer & Digital Marketing Associate · Specializing in Generative AI
              </p>
            </div>

            {/* Direct Contact Quick-Links */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white hover:border-[#00f2fe] hover:text-[#00f2fe] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00f2fe]" />
                <span>+91 9550036165</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white hover:border-[#ff9900] hover:text-[#ff9900] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff9900]" />
                <span>{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-[#b9cacb]">
                <MapPin className="w-3.5 h-3.5 text-[#00f2fe]" />
                <span>Kurmannapalem, Visakhapatnam, AP</span>
              </div>
            </div>
          </div>

        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column — Experience & Career Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Career Timeline Section */}
            <div id="experience-section" className="p-6 sm:p-8 rounded-2xl bg-[#12141c]/65 border border-white/10 backdrop-blur-md space-y-8">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-[#00f2fe]" />
                  </div>
                  <div>
                    <h2 className="font-['Space_Grotesk'] text-xl font-bold text-white tracking-tight">
                      Professional Experience
                    </h2>
                    <span className="text-xs text-[#9ba1b0]">
                      Full-time roles in design, performance marketing, and creative production
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-10">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={exp.company + exp.period} className="relative group">
                    
                    {/* Timeline Node Indicator */}
                    <div 
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                        exp.isCurrent
                          ? 'bg-[#00f2fe] border-[#0a0b10] shadow-[0_0_12px_#00f2fe]'
                          : 'bg-[#ff9900] border-[#0a0b10] shadow-[0_0_12px_#ff9900]'
                      }`}
                    />

                    {/* Timeline Card Content */}
                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-3">
                      
                      {/* Company & Role Header */}
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="space-y-0.5">
                          <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white group-hover:text-[#00f2fe] transition-colors">
                            {exp.role}
                          </h3>
                          <div className="text-sm font-semibold text-[#ff9900]">
                            {exp.company}
                          </div>
                        </div>

                        {/* Date Tag */}
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#b9cacb] bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/10">
                          <Calendar className="w-3.5 h-3.5 text-[#00f2fe]" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Location metadata */}
                      {exp.location && (
                        <div className="text-xs text-[#9ba1b0] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#9ba1b0]" />
                          <span>{exp.location}</span>
                        </div>
                      )}

                      {/* Responsibilities list */}
                      <ul className="space-y-2 text-xs sm:text-sm text-[#e3e1e9]/90 leading-relaxed pt-1">
                        {exp.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="text-[#00f2fe] text-xs font-bold leading-5">›</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Education & Academic Credentials */}
            <div id="education-section" className="p-6 sm:p-8 rounded-2xl bg-[#12141c]/65 border border-white/10 backdrop-blur-md space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-9 h-9 rounded-lg bg-[#ff9900]/10 border border-[#ff9900]/30 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-[#ff9900]" />
                </div>
                <div>
                  <h2 className="font-['Space_Grotesk'] text-xl font-bold text-white tracking-tight">
                    Education & Credentials
                  </h2>
                  <span className="text-xs text-[#9ba1b0]">
                    Academic degrees and foundational schooling
                  </span>
                </div>
              </div>

              {/* Education Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EDUCATION_LIST.map((edu) => (
                  <div
                    key={edu.degree + edu.period}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-['Space_Grotesk'] text-sm font-bold text-white">
                        {edu.degree}
                      </span>
                      {edu.isCurrent && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20">
                          Ongoing
                        </span>
                      )}
                    </div>
                    
                    <div className="text-xs font-semibold text-[#ff9900]">
                      {edu.institution}
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#9ba1b0] pt-1">
                      <span className="font-mono text-[11px]">{edu.period}</span>
                      <span className="truncate max-w-[150px]">{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages Strip */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#b9cacb]">
                  <Languages className="w-4 h-4 text-[#00f2fe]" />
                  <span className="font-semibold text-white">Spoken Languages:</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {LANGUAGES.map((lang) => (
                    <div
                      key={lang.name}
                      className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-white/90"
                    >
                      <span className="font-medium text-white">{lang.name}</span>
                      <span className="text-white/30 mx-1">·</span>
                      <span className="text-[#00f2fe] font-mono text-[11px]">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column — 7-Pillar Skills & Competencies Grid (5 Cols) */}
          <div id="skills-section" className="lg:col-span-5 space-y-8">
            
            {/* 7-Pillar Skills Grid */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#12141c]/65 border border-white/10 backdrop-blur-md space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#00f2fe]" />
                  </div>
                  <div>
                    <h2 className="font-['Space_Grotesk'] text-xl font-bold text-white tracking-tight">
                      7-Pillar Skills Matrix
                    </h2>
                    <span className="text-xs text-[#9ba1b0]">
                      Click any pillar to highlight core competencies
                    </span>
                  </div>
                </div>
              </div>

              {/* Pillars Accordion / Card Cluster */}
              <div className="space-y-3.5">
                {SKILL_PILLARS.map((pillar) => {
                  const isSelected = selectedPillar === pillar.number;
                  return (
                    <div
                      key={pillar.number}
                      onClick={() =>
                        setSelectedPillar(isSelected ? null : pillar.number)
                      }
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#181a24] border-[#00f2fe]/50 shadow-[0_0_20px_rgba(0,242,254,0.15)]'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                      }`}
                    >
                      {/* Pillar Title Row */}
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            {getPillarIcon(pillar.number)}
                          </div>
                          <div>
                            <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold text-white">
                              {pillar.number}. {pillar.title}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-[#9ba1b0] border border-white/5">
                          {pillar.category}
                        </span>
                      </div>

                      {/* Interactive Skill Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {pillar.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`text-xs px-2.5 py-1 rounded-md transition-all ${
                              isSelected
                                ? 'bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/30 font-medium'
                                : 'bg-white/[0.04] text-[#e3e1e9] border border-white/10 hover:border-white/20'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Core Competencies Box */}
            <div className="p-6 rounded-2xl bg-[#12141c]/65 border border-white/10 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#ff9900] font-semibold">
                <Target className="w-4 h-4" />
                <span>Executive & Core Work Competencies</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs text-white">
                {CORE_COMPETENCIES.map((comp) => (
                  <div
                    key={comp}
                    className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#ff9900] shrink-0" />
                    <span className="leading-tight">{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PDF Resume Quick Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12141c] via-[#1a1b24] to-[#12141c] border border-[#ff9900]/30 space-y-3 relative overflow-hidden">
              <div className="text-xs uppercase tracking-widest text-[#ff9900] font-semibold">
                Download Official Curriculum Vitae
              </div>
              <h3 className="font-['Space_Grotesk'] text-base font-bold text-white">
                Vadali_Satya_Sai_Sandeep.pdf
              </h3>
              <p className="text-xs text-[#9ba1b0] leading-relaxed">
                Complete formal document with verified contact numbers, certifications, educational timeline, and agency references.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenPdfResume}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0a0b10] bg-[#ff9900] hover:bg-[#ffaa22] rounded-lg transition-all cursor-pointer shadow-[0_0_16px_rgba(255,153,0,0.3)]"
                >
                  <Download className="w-3.5 h-3.5 text-[#0a0b10]" />
                  <span>Preview & Download PDF Resume</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Action Strip */}
        <div className="sticky bottom-4 z-30 p-4 rounded-xl bg-[#0d0e14]/90 border border-white/15 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.7)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0a0b10] bg-[#00f2fe] rounded-lg hover:bg-[#00dce6] transition-all cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Now: +91 9550036165</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-white/[0.05] border border-white/15 rounded-lg hover:border-[#ff9900] hover:text-[#ff9900] transition-all cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#ff9900]" />
              <span>Email: vsatya3005@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onBackToOverview}
              className="px-3.5 py-2 text-xs text-[#9ba1b0] hover:text-white transition-colors cursor-pointer"
            >
              Overview Page
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white hover:border-[#00f2fe] hover:text-[#00f2fe] transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
