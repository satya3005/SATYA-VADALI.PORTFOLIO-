import { ContactInfo, EducationItem, ExperienceItem, ProjectItem, SkillPillar } from '../types';

export const CONTACT_INFO: ContactInfo = {
  name: "Vadali Satya Sai Sandeep",
  title: "Graphic Designer & Digital Marketing Associate",
  tagline: "Specializing in Generative AI, Brand Storytelling & Performance Marketing",
  phone: "+919550036165",
  phoneDisplay: "+91 9550036165",
  email: "vsatya3005@gmail.com",
  location: "Visakhapatnam, Andhra Pradesh, India",
  fullAddress: "Srinivasam, Bharat Nagar, beside ITI College, Kurmannapalem, Visakhapatnam - 531046",
  whatsappUrl: "https://wa.me/919550036165",
  driveFolderUrl: "https://drive.google.com/drive/folders/1yDDZ0_rJ-ZU3vOSB-V_tY1idJFD4tjvv",
  resumePdfPath: "/assets/aistudio/Vadali_Satya_Sai_Sandeep.pdf_20261109_110405_0000_1f53a054.pdf",
};

export const USER_PHOTOS = {
  heroCutout: "/src/assets/images/satya_cutout_transparent.png",
  heroPortrait: "/assets/aistudio/WhatsApp_Image_2026-11-11_at_3.21.38_PM__1__b9fb8211.jpeg",
  smilingPortrait: "/assets/aistudio/WhatsApp_Image_2026-11-11_at_3.21.38_PM_a3a716c5.jpeg",
  fullPose: "/assets/aistudio/WhatsApp_Image_2026-11-11_at_3.21.37_PM_1d9a6d1f.jpeg",
};

export const WORK_IMAGES = {
  genai: "/src/assets/images/work_genai_visual_1794394691239.jpg",
  branding: "/src/assets/images/work_brand_identity_1794394692716.jpg",
  marketing: "/src/assets/images/work_performance_ad_1794394692863.jpg",
  skylarkDet: "/src/assets/images/skylark_det_duolingo_1794397819506.jpg",
  skylarkNz: "/assets/aistudio/VICTORIA_UNIVERSITY_OF_WELLINGTON___November_2026_Intake__NEW_ZEALAND_fae8c628.jpg",
};

export const METRICS = [
  {
    value: "3+",
    unit: "Years",
    numericValue: 3,
    label: "Design & Marketing Experience",
    subtext: "Enterprise & agency brand track record",
  },
  {
    value: "500+",
    unit: "Prompts",
    numericValue: 500,
    label: "Generative AI Prompts Engineered",
    subtext: "Precision image & video model workflows",
  },
  {
    value: "150+",
    unit: "Assets",
    numericValue: 150,
    label: "Brand Identity Assets Created",
    subtext: "Logos, collateral & style guidelines",
  },
  {
    value: "1.2M+",
    unit: "Reach",
    numericValue: 1.2,
    label: "Digital Campaign Reach & Impressions",
    subtext: "Meta, Google & organic performance",
  },
];

export const FEATURED_PROMPT = {
  title: "Cinematic Bioluminescent Brand Hero Prompt",
  model: "Midjourney v6 / SDXL / Gemini Multimodal",
  aspectRatio: "16:9",
  tags: ["Cinematic Lighting", "Dark Obsidian", "Brand Key Visual", "Cyber-Minimalism"],
  promptText: `Cinematic wide-angle commercial key visual, futuristic holographic brand crest suspended over dark rippling obsidian waters, razor-sharp neon cyan caustics and warm electric amber rim lighting, volumetrics, octane render, 8k resolution, Leica 35mm f/1.4 aesthetic, clean dark aesthetic --ar 16:9 --style raw --v 6.0`,
  breakdown: [
    { label: "Core Subject", text: "Futuristic holographic brand crest over dark water" },
    { label: "Lighting System", text: "Neon cyan laser caustics + electric amber rim lighting" },
    { label: "Surface Texture", text: "Dark rippling obsidian with clean geometric reflections" },
    { label: "Production Grade", text: "Octane render, 8k resolution, Leica 35mm optical look" },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "skylark-det-campaign",
    title: "Skylark Overseas Education — Duolingo English Test (DET) Campaign",
    category: "marketing",
    categoryLabel: "Performance & Social Ads",
    description: "Multi-channel advertising and social media collateral engineered for Skylark Overseas Education promoting the Duolingo English Test (DET), integrating high-CTR visual storytelling, dynamic typography, and print admissions materials.",
    image: WORK_IMAGES.skylarkDet,
    secondaryImage: WORK_IMAGES.skylarkNz,
    driveUrl: CONTACT_INFO.driveFolderUrl,
    tags: ["Duolingo English Test", "Meta Ads", "Social Creatives", "Admissions Collateral"],
    metrics: "+44% Inbound Lead Lift · 100K+ Regional Reach",
    deliverables: ["Duolingo DET Promotional Creatives", "Social Media Engagement Carousels", "Student Counseling Handouts", "High-CTR Meta Ad Variants"],
  },
  {
    id: "brand-identity-suite",
    title: "Nexus Tech Studio — Brand Architecture & Stationery Suite",
    category: "branding",
    categoryLabel: "Brand & Visual Identity",
    description: "End-to-end visual identity architecture featuring geometric vector marks, dark tactile luxury stationery, strict typographic tokens, and comprehensive marketing collateral.",
    image: WORK_IMAGES.branding,
    driveUrl: CONTACT_INFO.driveFolderUrl,
    tags: ["Adobe Illustrator", "Brand Systems", "Stationery Mockups", "Logo Design"],
    metrics: "150+ Brand Collateral Assets · 100% Cohesive System",
    deliverables: ["Vector brand logo suite", "Stationery & corporate deck template", "Color & typography manual", "Packaging specifications"],
  },
  {
    id: "performance-ad-campaigns",
    title: "High-Converting Performance Ad Creatives & Motion Variants",
    category: "marketing",
    categoryLabel: "Performance & Social Ads",
    description: "Data-driven social media ad campaigns optimized for lead generation, low customer acquisition cost (CAC), and click-through velocity across Meta and Google advertising networks.",
    image: WORK_IMAGES.marketing,
    driveUrl: CONTACT_INFO.driveFolderUrl,
    tags: ["Meta Ads", "Google Ads", "Creative Direction", "Conversion Optimization"],
    metrics: "1.2M+ Cumulative Impressions · +38% Lead Flow",
    deliverables: ["Instagram & Facebook ad creative sets", "A/B creative test variants", "Performance campaign dashboards", "Motion promotional teasers"],
  },
  {
    id: "victoria-university-nz",
    title: "Victoria University of Wellington — New Zealand Intake Campaign",
    category: "marketing",
    categoryLabel: "Performance & Social Ads",
    description: "Official international education campaign collateral for Victoria University of Wellington's intake in New Zealand. Engineered large-format recruitment posters, student informational leaflets, and digital promotional banners.",
    image: WORK_IMAGES.skylarkNz,
    driveUrl: CONTACT_INFO.driveFolderUrl,
    tags: ["International Education", "Print & Poster Design", "Typography", "Visual Communication"],
    metrics: "Official University Intake · Global Education Collateral",
    deliverables: ["Large-format recruitment posters", "Digital admissions banners", "Student prospectus one-pagers", "Social announcement graphics"],
  },
  {
    id: "genai-visual-systems",
    title: "Generative AI Commercial Key Visuals & Lighting Pipelines",
    category: "genai",
    categoryLabel: "Generative AI & Visuals",
    description: "Multi-model prompt engineering pipelines combining Midjourney v6, Google Gemini, and Stable Diffusion to produce hyper-detailed advertising assets with custom volumetric lighting and octane render aesthetics.",
    image: WORK_IMAGES.genai,
    driveUrl: CONTACT_INFO.driveFolderUrl,
    tags: ["Prompt Engineering", "Octane Render", "GenAI Models", "Cinematic Visuals"],
    metrics: "500+ Engineered Prompts · 10x Asset Velocity",
    deliverables: ["High-res hero visual series", "Custom prompt style recipes", "Lighting & atmosphere token guides", "Commercial key visual assets"],
  },
  {
    id: "shambhavi-design-co",
    title: "Shambhavi Design.co — Studio Brand Identity & Calligraphic Crest",
    category: "branding",
    categoryLabel: "Brand & Visual Identity",
    description: "Foundational brand identity design for Shambhavi Design.co featuring a bespoke calligraphic Devanagari Sanskrit-inspired crest of Goddess Saraswati with peacock plume and veena, coupled with custom typographic identity and collateral.",
    image: "/assets/aistudio/image_f545aa4b.png",
    driveUrl: CONTACT_INFO.driveFolderUrl,
    tags: ["Calligraphic Logo", "Devanagari Type", "Studio Branding", "Vector Illustration"],
    metrics: "Studio Flagship Identity · Bespoke Calligraphic Mark",
    deliverables: ["Calligraphic brand mark & crest", "Digital & print studio collateral", "Typography & color guidelines", "Luxury client stationery"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Skylark Overseas Education",
    role: "Digital Marketing Associate",
    period: "Aug 4, 2025 – Present",
    isCurrent: true,
    location: "Visakhapatnam, Andhra Pradesh",
    highlights: [
      "Spearheading social media initiatives, paid ad creative development, and cross-channel campaign strategies to drive qualified leads.",
      "Analyzing conversion metrics, CTR, CPA, and user engagement trends to continually optimize digital reach and acquisition performance.",
      "Integrating GenAI visual generation workflows to accelerate campaign ideation and creative asset turnarounds by over 40%.",
    ],
  },
  {
    company: "Skylark Overseas Education",
    role: "Graphic Designer",
    period: "Nov 5, 2024 – Aug 3, 2025",
    isCurrent: false,
    location: "Visakhapatnam, Andhra Pradesh",
    highlights: [
      "Engineered cohesive visual brand identities, digital promotional collateral, and high-converting marketing creatives under strict turnarounds.",
      "Partnered closely with the marketing unit to conceptualize tailored graphics reflecting modern design trends and student aspirations.",
      "Designed print media, outdoor hoarding banners, and digital flyers for major university delegates and student counseling summits.",
    ],
  },
  {
    company: "Infinity Connects Media",
    role: "Graphic Designer",
    period: "May 21, 2023 – May 21, 2024",
    isCurrent: false,
    location: "Visakhapatnam, Andhra Pradesh",
    highlights: [
      "Executed diverse design assets simultaneously while strictly upholding corporate branding standards for multiple agency clientele.",
      "Conducted market visual trend research and synthesized client business objectives into impactful digital and print communications.",
      "Collaborated with cross-functional creative teams on packaging, digital ads, and social media identity systems.",
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Master's Degree",
    institution: "Andhra University",
    period: "2026 – Present",
    location: "Visakhapatnam, Andhra Pradesh",
    isCurrent: true,
  },
  {
    degree: "Graduation (Bachelor's)",
    institution: "North East Frontier Technical University",
    period: "2019 – 2022",
    location: "Aalo, Arunachal Pradesh",
    isCurrent: false,
  },
  {
    degree: "Intermediate",
    institution: "Sri Prakash Junior College",
    period: "2017 – 2019",
    location: "Payakaraopeta - 531126, Andhra Pradesh",
    isCurrent: false,
  },
  {
    degree: "Secondary Schooling (SSC)",
    institution: "Gowtham School",
    period: "2016 – 2017",
    location: "Payakaraopeta - 531126, Andhra Pradesh",
    isCurrent: false,
  },
];

export const SKILL_PILLARS: SkillPillar[] = [
  {
    number: 1,
    title: "AI & Generative AI",
    category: "GenAI Core",
    iconName: "Cpu",
    skills: ["Prompt Engineering", "Generative AI Models", "AI Workflow Automation"],
  },
  {
    number: 2,
    title: "AI Tools & Platforms",
    category: "LLMs & Vision",
    iconName: "Sparkles",
    skills: ["ChatGPT", "Google Gemini", "Claude", "Microsoft Copilot"],
  },
  {
    number: 3,
    title: "Graphic Design Software",
    category: "Design Suite",
    iconName: "Palette",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Canva", "Figma"],
  },
  {
    number: 4,
    title: "Digital Marketing & Analytics",
    category: "Performance Growth",
    iconName: "TrendingUp",
    skills: ["Search Engine Optimization (SEO)", "Google Ads", "Meta Ads", "Google Analytics"],
  },
  {
    number: 5,
    title: "Branding & Visual Communication",
    category: "Identity Systems",
    iconName: "Target",
    skills: ["Brand Identity Development", "Logo Design", "Creative Direction", "Visual Design"],
  },
  {
    number: 6,
    title: "AI-Powered Content Creation",
    category: "Multimedia AI",
    iconName: "Video",
    skills: ["AI Image Generation", "AI Video Generation", "Creative Storyboarding"],
  },
  {
    number: 7,
    title: "Software & Cloud Technologies",
    category: "Tech Fundamentals",
    iconName: "Cloud",
    skills: ["API Integration", "Backend Development Fundamentals", "Cloud Computing"],
  },
];

export const CORE_COMPETENCIES = [
  "Time Management & Deadlines",
  "Clear Client Communication",
  "Cross-functional Teamwork",
  "Critical & Creative Thinking",
  "Strategic Problem Solving",
  "Agile Project Execution",
];

export const LANGUAGES = [
  { name: "Telugu", proficiency: "Native" },
  { name: "English", proficiency: "Professional" },
  { name: "Hindi", proficiency: "Conversational" },
];
