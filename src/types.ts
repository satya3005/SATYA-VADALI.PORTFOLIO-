export type ViewMode = 'overview' | 'resume';

export type WorkCategory = 'all' | 'genai' | 'branding' | 'marketing';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'genai' | 'branding' | 'marketing';
  categoryLabel: string;
  description: string;
  image: string;
  driveUrl: string;
  tags: string[];
  metrics?: string;
  deliverables: string[];
  secondaryImage?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  location?: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  isCurrent?: boolean;
}

export interface SkillPillar {
  number: number;
  title: string;
  category: string;
  iconName: string;
  skills: string[];
}

export interface ContactInfo {
  name: string;
  title: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  location: string;
  fullAddress: string;
  whatsappUrl: string;
  driveFolderUrl: string;
  resumePdfPath: string;
}
