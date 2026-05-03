import type { NavItem, Service, ApproachStep, CaseStudy, PortfolioProject } from "@/app/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/#about" },
  { label: "Blog", href: "/#blog" },
  { label: "Careers", href: "/#careers" },
];

export const TRUSTED_COMPANIES = [
  "Finova",
  "zenith",
  "Payliance",
  "Healthify",
  "DataPeak",
  "Taskora",
];

export const SERVICES: Service[] = [
  {
    id: "custom-software",
    icon: "code",
    title: "Custom Software Development",
    description:
      "Tailored web, mobile and desktop applications built for your business needs.",
    href: "/#services",
  },
  {
    id: "problem-solving",
    icon: "puzzle",
    title: "Problem Solving & Consulting",
    description:
      "We analyze complex problems and design effective, practical and scalable solutions.",
    href: "/#services",
  },
  {
    id: "cloud-devops",
    icon: "cloud",
    title: "Cloud & DevOps Engineering",
    description:
      "Scalable cloud architecture, DevOps automation and infrastructure management.",
    href: "/#services",
  },
  {
    id: "product-development",
    icon: "chart",
    title: "Product Development & Scaling",
    description:
      "MVP development, product evolution and scaling for sustainable growth.",
    href: "/#services",
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "1",
    label: "Discover",
    description:
      "We dive deep to understand your business, users and the real problem.",
    icon: "search",
  },
  {
    number: "2",
    label: "Define",
    description:
      "We define the right problem to solve and validate the approach.",
    icon: "lightbulb",
  },
  {
    number: "3",
    label: "Develop",
    description:
      "We engineer scalable solutions with clean code and modern practices.",
    icon: "code2",
  },
  {
    number: "4",
    label: "Deliver & Evolve",
    description:
      "We launch, measure impact and continuously improve for long-term success.",
    icon: "rocket",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech",
    title: "FinTech Platform Modernization",
    description: "Modernized legacy system and improved performance by 70%.",
    tag: "FinTech",
    gradient: "from-indigo-900 to-blue-900",
    href: "/portfolio",
  },
  {
    id: "healthcare",
    title: "Healthcare Data Platform",
    description:
      "Built a secure data platform that improved reporting accuracy by 45%.",
    tag: "Healthcare",
    gradient: "from-blue-900 to-cyan-900",
    href: "/portfolio",
  },
  {
    id: "saas",
    title: "SaaS Product Scaling",
    description:
      "Scaled infrastructure to support 10x users without performance loss.",
    tag: "SaaS",
    gradient: "from-violet-900 to-purple-900",
    href: "/portfolio",
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "fintech",
    title: "FinTech Platform Modernization",
    description:
      "A legacy banking platform with critical performance bottlenecks was fully re-architected. We migrated the monolith to a microservices model, introduced event-driven processing and replaced the dated frontend with a modern React stack.",
    tag: "FinTech",
    outcome: "70% performance improvement",
    year: "2024",
    href: "#",
  },
  {
    id: "healthcare",
    title: "Healthcare Data Platform",
    description:
      "Designed and built a HIPAA-compliant data platform for a multi-clinic network. Real-time aggregation pipelines replaced manual exports, enabling clinicians to access unified patient records with sub-second query times.",
    tag: "Healthcare",
    outcome: "45% reporting accuracy increase",
    year: "2024",
    href: "#",
  },
  {
    id: "saas",
    title: "SaaS Product Scaling",
    description:
      "An early-stage SaaS hit a critical infrastructure ceiling. We redesigned the database sharding strategy, implemented horizontal auto-scaling, and introduced a CDN-edge caching layer to absorb traffic surges seamlessly.",
    tag: "SaaS",
    outcome: "10× user capacity, zero downtime",
    year: "2023",
    href: "#",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Checkout Optimization",
    description:
      "Identified and resolved critical drop-off points in a high-volume checkout flow. A/B-tested redesigned steps backed by performance instrumentation reduced the cart abandonment rate dramatically.",
    tag: "E-Commerce",
    outcome: "38% checkout conversion lift",
    year: "2023",
    href: "#",
  },
  {
    id: "logistics",
    title: "Real-Time Logistics Dashboard",
    description:
      "Built a live operations dashboard for a regional logistics company, integrating GPS telemetry, route optimization APIs and predictive delay alerts into a single glass-panel command center.",
    tag: "Logistics",
    outcome: "22% on-time delivery improvement",
    year: "2023",
    href: "#",
  },
  {
    id: "edtech",
    title: "Adaptive Learning Platform",
    description:
      "Developed an AI-assisted curriculum engine that personalizes content difficulty and pacing for each learner. Integrated with an existing LMS via REST and webhooks with zero disruption to active courses.",
    tag: "EdTech",
    outcome: "2.4× learner engagement increase",
    year: "2022",
    href: "#",
  },
];
