
export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'frontend' | 'backend' | 'fullstack';
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  isLaravelCollection?: boolean;
}

export interface Certification {
  title: Record<Language, string>;
  issuer: Record<Language, string>;
  year: string;
  description: Record<Language, string>;
}

export interface Service {
  title: Record<Language, string>;
  description: Record<Language, string>;
  features: Record<Language, string[]>;
  icon: string;
}

export interface Translation {
  navHome: string;
  navAbout: string;
  navResume: string;
  navServices: string;
  navProjects: string;
  navContact: string;
  heroGreeting: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBtnWork: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutText3: string;
  statsYears: string;
  statsProjects: string;
  statsTechs: string;
  skillsTitle: string;
  experienceTitle: string;
  experienceSubtitle: string;
  educationTitle: string;
  universityName: string;
  locationLabel: string;
  certificationTitle: string;
  servicesTitle: string;
  servicesSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  filterAll: string;
  filterFrontend: string;
  filterBackend: string;
  filterFullstack: string;
  showMore: string;
  showLess: string;
  contactTitle: string;
  contactSubtitle: string;
  contactEmail: string;
  contactPhone: string;
  contactLocation: string;
  contactTwitter: string;
  contactCTA: string;
  contactCTADesc: string;
  contactSendEmail: string;
  contactWhatsApp: string;
  footerDesc: string;
  rightsReserved: string;
  footerQuickLinks: string;
  footerConnect: string;
  // New translation keys
  viewDetails: string;
  close: string;
  visitLive: string;
  viewCode: string;
}
