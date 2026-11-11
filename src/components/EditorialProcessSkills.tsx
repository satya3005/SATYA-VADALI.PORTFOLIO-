import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { Search, Lightbulb, Palette, Code, Rocket, Sparkles, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const EditorialProcessSkills: React.FC = () => {
  const skillsList = [
    "PROMPT ENGINEERING",
    "GENAI MODELS",
    "ADOBE PHOTOSHOP",
    "ADOBE ILLUSTRATOR",
    "CORELDRAW",
    "META ADS",
    "GOOGLE ADS",
    "BRAND IDENTITY",
    "FIGMA",
    "CANVA",
    "SEO",
    "AI VIDEO GENERATION",
    "STORYBOARDING",
    "CLOUD COMPUTING",
  ];

  const processSteps = [
    {
      num: "01",
      icon: <Search className="w-3.5 h-3.5 text-white" />,
      title: "DISCOVER",
      description: "Understanding brand goals, audience segments, and campaign requirements.",
    },
    {
      num: "02",
      icon: <Lightbulb className="w-3.5 h-3.5 text-white" />,
      title: "IDEATE",
      description: "Planning visual direction, prompt engineering architectures, and creative concept.",
    },
    {
      num: "03",
      icon: <Palette className="w-3.5 h-3.5 text-white" />,
      title: "DESIGN & GENERATE",
      description: "Crafting precision brand systems, high-converting collateral, and synthetic visuals.",
    },
    {
      num: "04",
      icon: <Code className="w-3.5 h-3.5 text-white" />,
      title: "OPTIMIZE",
      description: "A/B testing cross-channel creatives, analyzing conversion metrics, and maximizing ROI.",
    },
    {
      num: "05",
      icon: <Rocket className="w-3.5 h-3.5 text-white" />,
      title: "DELIVER",
      description: "Finalizing uncompressed master assets, brand style guides, and launching with perfection.",
    },
  ];

  return (
    <section id="skills-process" className="py-16 md:py-24 border-t border-white/[0.08] bg-[#08080a]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three-Column Editorial Grid matching reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: EDUCATION & SKILLS (4 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 p-6 sm:p-7 rounded-xl bg-[#0e1015] border border-white/[0.08] flex flex-col justify-between space-y-8 hover:border-white/15 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d90429]" />
                <h2 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                  Education & Skills
                </h2>
              </div>

              {/* Education section */}
              <div className="space-y-4">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#d90429] font-bold">
                  Education
                </div>

                <div className="space-y-3.5">
                  {EDUCATION_LIST.map((edu, eIdx) => (
                    <motion.div 
                      key={edu.degree}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 + eIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="font-semibold text-white">
                          {edu.degree}
                        </div>
                        <div className="text-[#8e939d] text-[11px]">
                          {edu.institution}
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-[#d90429] shrink-0 pt-0.5">
                        {edu.period}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills section with pill-shaped outline tags */}
              <div className="space-y-3 pt-2">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#d90429] font-bold">
                  Core Skills & Tools
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {skillsList.map((skill, sIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + sIdx * 0.03, ease: "easeOut" }}
                      whileHover={{ scale: 1.05, borderColor: '#d90429', color: '#ffffff' }}
                      className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#b0b5c0] rounded border border-white/[0.12] bg-white/[0.02] transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#555a64] font-mono pt-4 border-t border-white/[0.06]">
              Continuous Learning & Multimodal AI Research
            </div>
          </motion.div>

          {/* Column 2: WORK PROCESS Vertical Connected Timeline (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-6 sm:p-7 rounded-xl bg-[#0e1015] border border-white/[0.08] flex flex-col justify-between space-y-6 hover:border-white/15 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d90429]" />
                <h2 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                  Work Process
                </h2>
              </div>

              {/* Connected Timeline */}
              <div className="relative pl-6 sm:pl-8 space-y-6 pt-6">
                
                {/* Continuous Connecting Line Animated on Scroll */}
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  style={{ originY: 0 }}
                  className="absolute left-[11px] sm:left-[15px] top-8 bottom-6 w-[1.5px] bg-gradient-to-b from-[#d90429] via-[#d90429]/40 to-transparent" 
                  aria-hidden="true" 
                />

                {processSteps.map((step, idx) => (
                  <motion.div 
                    key={step.num} 
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.25 + idx * 0.12, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="relative flex items-start gap-4 group cursor-default"
                  >
                    
                    {/* Circle Node on Timeline with Spring Pop */}
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 280, 
                        damping: 18, 
                        delay: 0.28 + idx * 0.12 
                      }}
                      className="absolute -left-[24px] sm:-left-[32px] top-0.5 w-6 h-6 rounded-full bg-[#181a22] border border-[#d90429]/60 flex items-center justify-center shadow-[0_0_10px_rgba(217,4,41,0.3)] group-hover:scale-110 group-hover:border-[#d90429] group-hover:shadow-[0_0_16px_rgba(217,4,41,0.6)] transition-all"
                    >
                      {step.icon}
                    </motion.div>

                    {/* Step Content */}
                    <div className="space-y-0.5 pl-1">
                      <div className="flex items-center gap-2">
                        <span className="font-['Bebas_Neue'] text-lg font-black text-[#d90429] leading-none tracking-wider">
                          {step.num}
                        </span>
                        <h3 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#ef233c] transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[11px] text-[#8e939d] leading-relaxed group-hover:text-white/80 transition-colors">
                        {step.description}
                      </p>
                    </div>

                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-[#555a64] font-mono pt-4 border-t border-white/[0.06] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d90429] animate-pulse" />
              <span>Agile Execution · Strict Turnaround Deadlines</span>
            </div>
          </motion.div>

          {/* Column 3: Crimson Red Testimonial / Philosophy Card (3 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 p-7 rounded-xl bg-gradient-to-b from-[#990000] via-[#850000] to-[#6e0000] text-white flex flex-col justify-between relative overflow-hidden shadow-[0_8px_32px_rgba(153,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(217,4,41,0.5)] transition-all"
          >
            {/* Top Quote Mark Icon */}
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-serif text-5xl sm:text-6xl text-white/30 leading-none select-none"
              >
                ““
              </motion.div>

              {/* Bold Quote Typography */}
              <motion.blockquote 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold italic leading-snug text-white"
              >
                Good design is not just how it looks, but how it communicates, converts, and scales.
              </motion.blockquote>
            </div>

            {/* Signature & Bottom Callout */}
            <div className="space-y-6 pt-8">
              {/* Elegant handwritten signature with float entrance */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="font-['Caveat'] text-3xl sm:text-4xl text-white/95 font-medium -rotate-3 origin-left tracking-wide"
              >
                Satya Vadali
              </motion.div>

              <div className="pt-4 border-t border-white/20 text-xs font-mono uppercase tracking-widest text-white/80 space-y-1">
                <div>Let's Create Something Great Together.</div>
                <div className="text-white text-base">✦</div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
