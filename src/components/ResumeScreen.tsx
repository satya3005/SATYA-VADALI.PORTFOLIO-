import React, { useState } from 'react';
import { CONTACT_INFO, USER_PHOTOS } from '../data/portfolioData';
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  Download,
  Copy,
  Check,
  Cpu,
  Layers,
  Palette,
  TrendingUp,
  Target,
  Video,
  Cloud,
  ShieldCheck,
  CheckCircle2,
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
  const [copiedTerminal, setCopiedTerminal] = useState(false);

  const copyBlueprint = () => {
    const text = `// Execution Stack: Midjourney v6 + Claude 3.5 Sonnet + Adobe Generative Fill\n$ satya --init-campaign --client="Skylark Overseas" --target="Q1_StudyAbroad" --mode="high-conversion"\n[1] Generating 16 programmatic ad variants with localized student aspiration motifs...\n>> Synthesizing: "hyper-realistic dynamic lighting, editorial studio atmosphere, cinematic crimson undertone, 4k ultra-crisp"\n>> CTR Uplift Recorded: +142% vs baseline static designs | Latency: 4.8 hrs from brief to deployed campaign.`;
    navigator.clipboard.writeText(text);
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2000);
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const pillars = [
    {
      num: '01',
      title: 'AI & Generative AI Architecture',
      icon: <Cpu className="w-3.5 h-3.5 text-[#d90429]" />,
      desc: 'Prompt tuning, latent model steering, programmatic creative workflows, and generative deployment.',
      tags: ['Prompt Engineering', 'Generative AI Models', 'AI Workflow Automation', 'Diffusion Architecture'],
    },
    {
      num: '02',
      title: 'AI Tools & Ecosystem Platforms',
      icon: <Sparkles className="w-3.5 h-3.5 text-[#ef233c]" />,
      desc: 'Hands-on daily execution across LLMs, conversational agents, and leading synthetic generation suites.',
      tags: ['ChatGPT (OpenAI)', 'Google Gemini', 'Claude (Anthropic)', 'Microsoft Copilot', 'Midjourney v6'],
    },
    {
      num: '03',
      title: 'Graphic Design Software Suite',
      icon: <Palette className="w-3.5 h-3.5 text-[#d90429]" />,
      desc: 'Precision vector mastery, photo composite manipulation, design systems, and rapid prototyping.',
      tags: ['Adobe Photoshop', 'Adobe Illustrator', 'CorelDRAW', 'Canva Enterprise', 'Figma Systems'],
    },
    {
      num: '04',
      title: 'Digital Marketing & Analytics',
      icon: <TrendingUp className="w-3.5 h-3.5 text-[#ef233c]" />,
      desc: 'Data-backed traffic acquisition, search positioning, audience targeting, and funnel conversion optimization.',
      tags: ['SEO Architecture', 'Google Ads', 'Meta Ads Manager', 'Google Analytics 4 (GA4)', 'CRO Optimization'],
    },
    {
      num: '05',
      title: 'Branding & Visual Communication',
      icon: <Target className="w-3.5 h-3.5 text-[#d90429]" />,
      desc: 'Comprehensive brand guidelines, typographic hierarchy, editorial layout, and narrative creative direction.',
      tags: ['Brand Identity Development', 'Logo Design', 'Creative Direction', 'Visual Design', 'Advanced Typography'],
    },
    {
      num: '06',
      title: 'VIDEO_ORK | AI-Powered Content Creation',
      icon: <Video className="w-3.5 h-3.5 text-[#ef233c]" />,
      desc: 'High-fidelity synthetic asset creation, generative motion clips, multi-frame storyboards, and digital avatars.',
      tags: ['AI Image Generation', 'AI Video Generation', 'Creative Storyboarding', 'Synthetic Media Deployment'],
    },
    {
      num: '07',
      title: 'Cloud & Dev Fundamentals',
      icon: <Cloud className="w-3.5 h-3.5 text-[#d90429]" />,
      desc: 'Connecting media workflows to serverless APIs, cloud infrastructure, and modern continuous web pipelines.',
      tags: ['API Integration', 'Backend Fundamentals', 'Cloud Computing', 'Modern Web Workflows'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f1f2f6] selection:bg-[#d90429]/30 selection:text-white">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full bg-[#08080a]/92 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          
          {/* Brand Monogram & Subtitle */}
          <button 
            onClick={onBackToOverview}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#d90429] to-[#990000] flex items-center justify-center font-['Space_Grotesk'] font-black text-xs text-white tracking-wider shadow-[0_0_15px_rgba(217,4,41,0.45)] group-hover:scale-105 transition-transform">
              VS.
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] font-bold text-sm text-white tracking-tight uppercase group-hover:text-[#ef233c] transition-colors">
                Satya Vadali
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-[#8e939d] hidden sm:inline">
                Founder & Creative Lead, Shambhavi Design.co
              </span>
            </div>
          </button>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#8e939d]">
            <button onClick={onBackToOverview} className="hover:text-white transition-colors cursor-pointer">
              Overview
            </button>
            <button onClick={() => scrollToId('metrics-spotlight')} className="hover:text-[#ef233c] transition-colors cursor-pointer">
              Metrics
            </button>
            <button onClick={() => scrollToId('experience-section')} className="hover:text-[#ef233c] transition-colors cursor-pointer">
              Experience
            </button>
            <button onClick={() => scrollToId('skills-section')} className="hover:text-[#ef233c] transition-colors cursor-pointer">
              Skills & AI
            </button>
            <button onClick={() => scrollToId('education-section')} className="hover:text-[#ef233c] transition-colors cursor-pointer">
              Education
            </button>
            <button onClick={() => scrollToId('contact-section')} className="hover:text-[#ef233c] transition-colors cursor-pointer">
              Contact
            </button>
          </nav>

          {/* Phone & Portrait CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d90429]/10 border border-[#d90429]/40 text-[#ef233c] hover:bg-[#d90429] hover:text-white text-xs font-bold font-mono transition-all duration-200 shadow-[0_0_12px_rgba(217,4,41,0.25)]"
            >
              <Phone className="w-3 h-3" />
              <span>+91 9550036165</span>
            </a>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0 hidden sm:block">
              <img
                src={USER_PHOTOS.heroCutout}
                alt="Satya Vadali"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Stage */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        
        {/* Sub-header Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/[0.04] border border-white/10 hover:border-[#d90429] text-xs font-semibold text-white/90 hover:text-[#ef233c] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d90429]/10 border border-[#d90429]/30 text-[10px] font-mono uppercase tracking-wider text-[#ef233c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d90429] animate-pulse" />
              <span>Curriculum Vitae & Technical Dossier</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-[#8e939d]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d90429]" />
            <span>Identity Verified · Real-time Availability · Q1 2026 Active</span>
          </div>
        </div>

        {/* 4-Card Identity & Contact Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-[#0e1015] border border-white/[0.08] flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#d90429]/10 border border-[#d90429]/25 flex items-center justify-center text-[#d90429] shrink-0">
              <Briefcase className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#8e939d] truncate">
                Founder & Creative Lead, Shambhavi Design.co
              </div>
              <div className="text-xs font-bold text-white truncate">
                Vadali Satya Sai Sandeep
              </div>
            </div>
          </div>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="p-3.5 rounded-xl bg-[#0e1015] border border-white/[0.08] hover:border-[#d90429]/40 transition-colors flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#8e939d] group-hover:text-[#ef233c] shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#8e939d]">
                Phone / WhatsApp
              </div>
              <div className="text-xs font-bold text-white group-hover:text-[#ef233c] font-mono truncate">
                +91 9550036165
              </div>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="p-3.5 rounded-xl bg-[#0e1015] border border-white/[0.08] hover:border-[#d90429]/40 transition-colors flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#8e939d] group-hover:text-[#ef233c] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#8e939d]">
                Direct Mailbox
              </div>
              <div className="text-xs font-bold text-white group-hover:text-[#ef233c] font-mono truncate">
                vsatya3005@gmail.com
              </div>
            </div>
          </a>

          <div className="p-3.5 rounded-xl bg-[#0e1015] border border-white/[0.08] flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#8e939d] shrink-0">
              <MapPin className="w-4 h-4 text-[#d90429]" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#8e939d]">
                Base Jurisdiction
              </div>
              <div className="text-xs font-bold text-white truncate">
                Kurmannapalem, Visakhapatnam, AP
              </div>
            </div>
          </div>
        </div>

        {/* Page Hero Header Title */}
        <div className="space-y-2 pt-2">
          <div className="text-xs font-mono uppercase tracking-widest text-[#d90429] font-bold">
            — Executive Profile & Execution Map
          </div>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Professional Journey, <span className="text-[#d90429]">Skills &</span> Credentials
          </h1>
          <p className="text-xs sm:text-sm text-[#8e939d] max-w-3xl leading-relaxed">
            A comprehensive breakdown of enterprise experience, design competencies, and generative AI execution across brand architecture and growth engines.
          </p>
        </div>

        {/* Spotlight Feature Card — Founder & Creative Director */}
        <div id="metrics-spotlight" className="p-6 sm:p-8 rounded-2xl bg-[#0e1015] border border-white/[0.08] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Logo Card: Shambhavi Design.Co */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-xl overflow-hidden bg-white border border-white/20 shadow-[0_12px_36px_rgba(0,0,0,0.5)] group flex items-center justify-center p-5">
                <img
                  src="/assets/aistudio/image_f545aa4b.png"
                  alt="Shambhavi Design.Co Official Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-wider text-white">
                  Brand Identity
                </div>
                <div className="absolute bottom-3 right-3 text-[9px] font-mono uppercase tracking-wider text-[#555a64] bg-white/95 px-2 py-0.5 rounded border border-black/5 shadow-sm">
                  REF #SHAMBHAVI
                </div>
              </div>
            </div>

            {/* Right Information & 4 Metric Tiles */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider">
                <span className="px-2.5 py-0.5 rounded bg-[#d90429]/10 border border-[#d90429]/30 text-[#ef233c] font-bold">
                  Studio Leadership
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[#8e939d]">
                  Visakhapatnam • Remote & On-Site
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10 text-white/90 font-semibold flex items-center gap-1.5 ml-auto">
                  <img src="/assets/aistudio/image_f545aa4b.png" alt="Shambhavi" className="w-3.5 h-3.5 object-contain rounded-full bg-white p-0.5" />
                  <span>Shambhavi Design.co</span>
                </span>
              </div>

              {/* Title & Paragraph */}
              <div className="space-y-2">
                <h2 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Founder & Creative Director @ Shambhavi Design.co | Generative Media Synthesizer
                </h2>
                <p className="text-xs sm:text-sm text-[#8e939d] leading-relaxed">
                  Spearheading enterprise design systems, high-converting brand identity rollouts, and programmatic generative AI pipelines under Shambhavi Design.co. Synthesizing over 3+ years of commercial design tenure with state-of-the-art synthetic media engines to power elevated brand distinction and hyper-targeted lead growth.
                </p>
              </div>

              {/* 4 Stat Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8e939d]">
                    Studio Venture
                  </div>
                  <div className="font-['Space_Grotesk'] text-base font-bold text-white">
                    Founder
                  </div>
                  <div className="text-[10px] text-[#555a64]">Shambhavi Design.co</div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8e939d]">
                    Performance Lift
                  </div>
                  <div className="font-['Space_Grotesk'] text-base font-bold text-[#d90429]">
                    2.4x
                  </div>
                  <div className="text-[10px] text-[#555a64]">Creative CTR Lift</div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8e939d]">
                    GenAI Velocity
                  </div>
                  <div className="font-['Space_Grotesk'] text-base font-bold text-[#ef233c]">
                    -65%
                  </div>
                  <div className="text-[10px] text-[#555a64]">Turnaround Latency</div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8e939d]">
                    Brand Deliveries
                  </div>
                  <div className="font-['Space_Grotesk'] text-base font-bold text-[#d90429]">
                    400+
                  </div>
                  <div className="text-[10px] text-[#555a64]">High-Yield Assets</div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Main 2-Column Grid: Left (Experience & Education) / Right (7-Pillar Matrix) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 Cols on LG) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Experience & Milestones Section */}
            <div id="experience-section" className="space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded bg-[#d90429]/10 border border-[#d90429]/30 flex items-center justify-center text-[#d90429]">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <h2 className="font-['Space_Grotesk'] text-lg font-bold uppercase tracking-wider text-white">
                    Experience & Milestones
                  </h2>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e939d]">
                  Founder & Creative Lead, Shambhavi Design.co
                </span>
              </div>

              {/* Connected Timeline of 4 Experience Items */}
              <div className="relative pl-6 sm:pl-8 space-y-6">
                
                {/* Vertical Continuous Line */}
                <div 
                  className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-[#d90429] via-[#d90429]/40 to-transparent" 
                  aria-hidden="true" 
                />

                {/* Experience 1: Shambhavi Design.co */}
                <div className="relative p-5 sm:p-6 rounded-xl bg-[#0e1015] border border-[#d90429]/35 shadow-lg space-y-3">
                  <div className="absolute -left-[30px] sm:-left-[38px] top-6 w-4 h-4 rounded-full bg-[#08080a] border-2 border-[#d90429] shadow-[0_0_10px_#d90429]" />
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#d90429]/10 border border-[#d90429]/25 flex items-center justify-center text-[#d90429]">
                        <Briefcase className="w-3 h-3" />
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-base font-bold text-white">
                        Shambhavi Design.co
                      </h3>
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-[#d90429]/15 border border-[#d90429]/30 text-[10px] font-mono text-[#ef233c] font-bold">
                      Aug 2024 - Present • Current Venture
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#ef233c]">
                    Founder & Creative Director
                  </div>

                  <p className="text-xs text-[#8e939d] leading-relaxed">
                    Spearheading strategic brand identities, bespoke vector systems, AI-accelerated commercial campaigns, packaging, and digital growth assets for regional and national enterprises.
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#b9cacb]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d90429] shrink-0 mt-0.5" />
                      <span>Directing full-cycle studio operations, bespoke visual communication systems, and high-impact commercial packaging solutions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#d90429] shrink-0 mt-0.5" />
                      <span>Integrating generative AI image and motion synthesis workflows for accelerated enterprise brand asset turnarounds.</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Brand Architecture', 'Creative Direction', 'Generative Media', 'Packaging & Identity'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-[10px] font-mono text-[#8e939d] hover:border-[#d90429]/40 hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience 2: Skylark Overseas Education - Digital Marketing Associate */}
                <div className="relative p-5 sm:p-6 rounded-xl bg-[#0e1015] border border-white/[0.08] hover:border-white/15 transition-all space-y-3">
                  <div className="absolute -left-[30px] sm:-left-[38px] top-6 w-4 h-4 rounded-full bg-[#08080a] border-2 border-[#d90429] shadow-[0_0_8px_#d90429]" />
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-['Space_Grotesk'] text-base font-bold text-white">
                      Skylark Overseas Education
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-[#ef233c]">
                      Aug 4, 2025 - Present
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#d90429]">
                    Digital Marketing Associate
                  </div>

                  <p className="text-xs text-[#8e939d] leading-relaxed">
                    Leading social media initiatives, paid ad creative development, and cross-channel lead acquisition strategies across education consulting funnels.
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#b9cacb]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d90429] font-bold text-xs">›</span>
                      <span>Analyzing conversion metrics, attribution funnels, and user engagement trends to continually optimize digital performance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d90429] font-bold text-xs">›</span>
                      <span>Directing paid Meta & Google Ads visual funnels, delivering marked ROAS improvement through iterative multivariate creative testing.</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['ROAS Optimization', 'AI Campaign Scaling', 'Lead Generation'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-[10px] font-mono text-[#8e939d] hover:border-[#d90429]/40 hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience 3: Skylark Overseas Education - Graphic Designer */}
                <div className="relative p-5 sm:p-6 rounded-xl bg-[#0e1015] border border-white/[0.08] hover:border-white/15 transition-all space-y-3">
                  <div className="absolute -left-[30px] sm:-left-[38px] top-6 w-4 h-4 rounded-full bg-[#08080a] border-2 border-white/40" />
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-['Space_Grotesk'] text-base font-bold text-white">
                      Skylark Overseas Education
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-[#8e939d]">
                      Nov 5, 2024 - Aug 3, 2025
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Graphic Designer
                  </div>

                  <p className="text-xs text-[#8e939d] leading-relaxed">
                    Engineered cohesive brand identities, multi-platform promotional collateral, and high-converting marketing creatives for study-abroad programs.
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#b9cacb]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d90429] font-bold text-xs">›</span>
                      <span>Standardized comprehensive social media design libraries, typography systems, and motion assets across all corporate touchpoints.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d90429] font-bold text-xs">›</span>
                      <span>Accelerated visual content delivery cycles by introducing standardized responsive templates and AI drafting workflows.</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Visual Identity Systems', 'Motion Collateral', 'Ad Formats'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-[10px] font-mono text-[#8e939d] hover:border-[#d90429]/40 hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience 4: Infinity Connects Media - Graphic Designer */}
                <div className="relative p-5 sm:p-6 rounded-xl bg-[#0e1015] border border-white/[0.08] hover:border-white/15 transition-all space-y-3">
                  <div className="absolute -left-[30px] sm:-left-[38px] top-6 w-4 h-4 rounded-full bg-[#08080a] border-2 border-white/20" />
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-['Space_Grotesk'] text-base font-bold text-white">
                      Infinity Connects Media
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-[#8e939d]">
                      May 21, 2023 - May 21, 2024
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Graphic Designer
                  </div>

                  <p className="text-xs text-[#8e939d] leading-relaxed">
                    Designed diverse digital and print communications, conducted visual trend research, and upheld strict client design guidelines across external accounts.
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#b9cacb]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d90429] font-bold text-xs">›</span>
                      <span>Delivered high-volume multi-format graphic assets for regional brand launches, exhibitions, and digital performance ad campaigns.</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Print & Packaging', 'Brand Rollouts', 'Campaign Collateral'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-[10px] font-mono text-[#8e939d] hover:border-[#d90429]/40 hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Education & Credentials Section */}
            <div id="education-section" className="p-6 sm:p-7 rounded-2xl bg-[#0e1015] border border-white/[0.08] space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded bg-[#d90429]/10 border border-[#d90429]/30 flex items-center justify-center text-[#d90429]">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <h2 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                    Education & Credentials
                  </h2>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e939d]">
                  Academic Foundation
                </span>
              </div>

              <div className="space-y-4">
                {/* Degree 1 */}
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#d90429]" />
                      <span className="font-['Space_Grotesk'] text-sm font-bold text-white">
                        Master's Degree
                      </span>
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 bg-[#d90429]/10 text-[#ef233c] rounded border border-[#d90429]/25 font-bold">
                        Enrolled
                      </span>
                    </div>
                    <div className="text-xs text-[#8e939d]">
                      Andhra University • Visakhapatnam, Andhra Pradesh
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-mono font-bold text-white">2026 - Present</div>
                    <div className="text-[10px] text-[#555a64]">Post-Graduate Studies</div>
                  </div>
                </div>

                {/* Degree 2 */}
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#d90429]" />
                      <span className="font-['Space_Grotesk'] text-sm font-bold text-white">
                        Graduation (Bachelor's)
                      </span>
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 bg-white/5 text-[#8e939d] rounded border border-white/10">
                        Completed
                      </span>
                    </div>
                    <div className="text-xs text-[#8e939d]">
                      North East Frontier Technical University
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-mono font-bold text-white">2019 - 2022</div>
                    <div className="text-[10px] text-[#555a64]">Undergraduate Program</div>
                  </div>
                </div>

                {/* Degree 3 */}
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white/40" />
                      <span className="font-['Space_Grotesk'] text-sm font-bold text-white">
                        Intermediate
                      </span>
                    </div>
                    <div className="text-xs text-[#8e939d]">
                      Sri Prakash Junior College • Payakaraopeta
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-mono font-bold text-white">2017 - 2019</div>
                    <div className="text-[10px] text-[#555a64]">Higher Secondary</div>
                  </div>
                </div>

                {/* Degree 4 */}
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-white/40" />
                      <span className="font-['Space_Grotesk'] text-sm font-bold text-white">
                        SSC (Secondary School)
                      </span>
                    </div>
                    <div className="text-xs text-[#8e939d]">
                      Gowtham School • Payakaraopeta
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-mono font-bold text-white">2016 - 2017</div>
                    <div className="text-[10px] text-[#555a64]">Matriculation</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (5 Cols on LG) — 7-Pillar Technical Matrix */}
          <div id="skills-section" className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0e1015] border border-white/[0.08] space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded bg-[#d90429]/10 border border-[#d90429]/30 flex items-center justify-center text-[#d90429]">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <h2 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                    7-Pillar Technical Matrix
                  </h2>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#d90429]/10 border border-[#d90429]/30 text-[9px] font-mono uppercase tracking-wider text-[#ef233c] font-bold">
                  Enterprise Ready
                </span>
              </div>

              <div className="text-[10px] font-mono uppercase tracking-widest text-[#8e939d]">
                Multi-Modal Creative & Technical Competencies
              </div>

              {/* 7 Pillars Stack */}
              <div className="space-y-4">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.num}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#d90429]/40 hover:bg-white/[0.04] transition-all space-y-2.5 group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {pillar.icon}
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e939d] group-hover:text-white transition-colors">
                          Pillar {pillar.num}
                        </span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d90429]" />
                    </div>

                    <h3 className="font-['Space_Grotesk'] text-sm font-bold text-white group-hover:text-[#ef233c] tracking-tight transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-[11px] text-[#8e939d] leading-relaxed">
                      {pillar.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#c0c5cf] hover:border-[#d90429] hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* Prompt / Pipeline Terminal Block */}
        <div className="rounded-xl overflow-hidden bg-[#0e1015] border border-white/[0.08] shadow-2xl">
          {/* Terminal Window Header */}
          <div className="px-4 py-3 bg-[#13151f] border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-xs font-mono text-[#8e939d] ml-2">
                satya-terminal: ~/genai/pipeline_v2.sh
              </span>
            </div>

            <button
              onClick={copyBlueprint}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 hover:border-[#d90429] text-[11px] font-mono text-white/90 hover:text-[#ef233c] transition-colors cursor-pointer"
            >
              {copiedTerminal ? (
                <>
                  <Check className="w-3 h-3 text-[#d90429]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Pipeline Blueprint</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Code Body */}
          <div className="p-4 sm:p-5 font-mono text-xs text-[#a0a5b2] space-y-2 overflow-x-auto leading-relaxed">
            <div className="text-[#555a64]">
              // Execution Stack: Midjourney v6 + Claude 3.5 Sonnet + Adobe Generative Fill
            </div>
            <div>
              <span className="text-[#ef233c] font-bold">$ satya</span>{' '}
              <span className="text-white">--init-campaign</span>{' '}
              <span className="text-white/80">--client="Skylark Overseas"</span>{' '}
              <span className="text-white/80">--target="Q1_StudyAbroad"</span>{' '}
              <span className="text-[#d90429]">--mode="high-conversion"</span>
            </div>
            <div className="text-[#8e939d]">
              [1] Generating 16 programmatic ad variants with localized student aspiration motifs...
            </div>
            <div>
              <span className="text-[#d90429] font-bold">&gt;&gt;</span>{' '}
              <span className="text-white">Synthesizing:</span>{' '}
              <span className="text-[#ef233c]">"hyper-realistic dynamic lighting, editorial studio atmosphere, cinematic crimson undertone, 4k ultra-crisp"</span>
            </div>
            <div>
              <span className="text-[#d90429] font-bold">&gt;&gt;</span>{' '}
              <span className="text-white">CTR Uplift Recorded:</span>{' '}
              <span className="text-[#27c93f] font-bold">+142%</span> vs baseline static designs | Latency:{' '}
              <span className="text-white">4.8 hrs</span> from brief to deployed campaign.
            </div>
          </div>
        </div>

        {/* Immediate Next Step CTA Block */}
        <div id="contact-section" className="p-6 sm:p-8 rounded-2xl bg-[#0e1015] border border-white/[0.08] space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#d90429] font-bold">
                Immediate Next Step
              </div>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                Ready to integrate high-velocity design and generative AI into your team?
              </h2>
              <p className="text-xs sm:text-sm text-[#8e939d] leading-relaxed">
                Available for full-time opportunities, high-value consulting contracts, and strategic brand direction.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-2.5">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#d90429] hover:bg-[#ef233c] text-white text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 shadow-[0_0_24px_rgba(217,4,41,0.5)] cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call Now: +91 9550036165</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/[0.04] hover:bg-[#d90429]/15 border border-[#d90429]/40 hover:border-[#d90429] text-white text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#ef233c]" />
                <span>Email: vsatya3005@gmail.com</span>
              </a>

              <button
                onClick={onOpenPdfResume}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-[#8e939d] hover:text-white text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#d90429]" />
                <span>Download Resume PDF</span>
                <span className="text-xs ml-auto">↑</span>
              </button>
            </div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#050608] py-8 text-xs text-[#8e939d]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-['Space_Grotesk'] font-bold text-sm text-white">
                Vadali Satya Sai Sandeep <span className="text-[#8e939d] font-normal">(Satya)</span>
              </div>
              <div className="text-[11px] text-[#555a64]">
                Founder, Shambhavi Design.co • Atmospheric visual craftsmanship, brand narratives, and generative AI execution.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                +91 9550036165
              </a>
              <span>•</span>
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                vsatya3005@gmail.com
              </a>
              <span>•</span>
              <span>Visakhapatnam, India</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/[0.04] text-[10px] text-[#555a64] font-mono">
            <div>© 2026 Vadali Satya Sai Sandeep. All rights reserved.</div>
            <div>Designed with Next-Gen Neural Precision</div>
          </div>
        </div>
      </footer>

    </div>
  );
};
