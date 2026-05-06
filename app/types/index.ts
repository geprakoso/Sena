export interface NavItem {
  label: string;
  href: string;
}

export interface TrustedCompany {
  name: string;
  icon: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface ApproachStep {
  number: string;
  label: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  tag: string;
  gradient: string;
  href: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tag: string;
  outcome: string;
  year: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  trend?: string;
  color?: string;
}

export interface CaseStudyDetail {
  id: string;
  slug: string;
  title: string;
  tag: string;
  industry: string;
  timeline: string;
  teamSize: string;
  year: string;
  outcome: string;
  description: string;
  heroGradient: string;
  clientName: string;
  clientDescription: string;
  theIdea: string;
  theChallenge: string;
  theResult: string;
  businessChallenge: {
    intro: string;
    problems: string[];
    highlights?: { title: string; description: string }[];
  };
  architectureIntro: string;
  architectureType: string;
  businessArchitectureImage?: string;
  systemArchitectureImage?: string;
  productFeatures: string[];
  devTimeline: {
    title: string;
    description: string;
    duration: string;
  }[];
  techStack: { name: string; category: string }[];
  results: { label: string; value: string; prefix?: string; suffix?: string }[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
  };
}
