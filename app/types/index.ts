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
