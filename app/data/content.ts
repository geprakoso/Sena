import type {
  NavItem,
  Service,
  ApproachStep,
  CaseStudy,
  PortfolioProject,
  CaseStudyDetail,
} from "@/app/types";

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
    href: "/portfolio/fintech",
  },
  {
    id: "healthcare",
    title: "Healthcare Data Platform",
    description:
      "Designed and built a HIPAA-compliant data platform for a multi-clinic network. Real-time aggregation pipelines replaced manual exports, enabling clinicians to access unified patient records with sub-second query times.",
    tag: "Healthcare",
    outcome: "45% reporting accuracy increase",
    year: "2024",
    href: "/portfolio/healthcare",
  },
  {
    id: "saas",
    title: "SaaS Product Scaling",
    description:
      "An early-stage SaaS hit a critical infrastructure ceiling. We redesigned the database sharding strategy, implemented horizontal auto-scaling, and introduced a CDN-edge caching layer to absorb traffic surges seamlessly.",
    tag: "SaaS",
    outcome: "10x user capacity, zero downtime",
    year: "2023",
    href: "/portfolio/saas",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Checkout Optimization",
    description:
      "Identified and resolved critical drop-off points in a high-volume checkout flow. A/B-tested redesigned steps backed by performance instrumentation reduced the cart abandonment rate dramatically.",
    tag: "E-Commerce",
    outcome: "38% checkout conversion lift",
    year: "2023",
    href: "/portfolio/ecommerce",
  },
  {
    id: "logistics",
    title: "Real-Time Logistics Dashboard",
    description:
      "Built a live operations dashboard for a regional logistics company, integrating GPS telemetry, route optimization APIs and predictive delay alerts into a single glass-panel command center.",
    tag: "Logistics",
    outcome: "22% on-time delivery improvement",
    year: "2023",
    href: "/portfolio/logistics",
  },
  {
    id: "edtech",
    title: "Adaptive Learning Platform",
    description:
      "Developed an AI-assisted curriculum engine that personalizes content difficulty and pacing for each learner. Integrated with an existing LMS via REST and webhooks with zero disruption to active courses.",
    tag: "EdTech",
    outcome: "2.4x learner engagement increase",
    year: "2022",
    href: "/portfolio/edtech",
  },
];

export const CASE_STUDY_DETAILS: CaseStudyDetail[] = [
  {
    id: "fintech",
    slug: "fintech",
    title: "FinTech Platform Modernization",
    tag: "FinTech",
    industry: "Financial Technology",
    timeline: "6 months",
    teamSize: "5 engineers",
    year: "2024",
    outcome: "70% performance improvement",
    description:
      "Modernized legacy system and improved performance by 70%.",
    heroGradient: "from-indigo-900 to-blue-900",
    clientName: "Finova Bank",
    clientDescription:
      "Finova Bank is a mid-sized retail bank serving over 2 million customers across Southeast Asia. With a legacy core banking system built in 2009, they faced mounting pressure from digital-native competitors offering real-time payments and seamless mobile experiences.",
    theIdea:
      "The vision was to transform Finova's monolithic legacy platform into a modern, cloud-native banking ecosystem capable of real-time transaction processing, instant peer-to-peer transfers, and API-first integrations with fintech partners — all while maintaining the strictest security and compliance standards.",
    theChallenge:
      "The existing platform was a 15-year-old monolithic Java application running on bare-metal servers. API response times averaged 4 seconds during peak hours, deployment cycles took three weeks, and the system suffered from over 8 hours of unplanned downtime per month. Regulatory compliance gaps were widening, and integrating with modern fintech APIs was nearly impossible.",
    theResult:
      "We delivered a fully re-architected microservices platform running on Kubernetes. API response times dropped below 200ms, uptime reached 99.99%, and infrastructure costs were cut in half. Finova passed its regulatory audit with zero critical findings and launched a white-label API platform now used by 12 partner fintechs.",
    businessChallenge: {
      intro:
        "Finova's core banking system had become a strategic liability. Competitors were offering instant payments and mobile-first experiences while Finova's customers faced slow transfers, outdated interfaces, and frequent service interruptions during peak trading hours.",
      problems: [
        "API latency exceeded 4 seconds during peak traffic, causing timeouts in mobile apps",
        "Monthly unplanned downtime averaged 8+ hours, eroding customer trust",
        "Deployment cycles took 3 weeks due to manual testing and brittle monolithic releases",
        "Regulatory compliance gaps were identified in three critical audit areas",
        "Integration with modern fintech APIs required months of custom middleware development",
      ],
      highlights: [
        {
          title: "Legacy Monolith",
          description:
            "2.4M lines of legacy Java code with zero test coverage and undocumented business logic.",
        },
        {
          title: "Scaling Ceiling",
          description:
            "Vertical scaling maxed out. Adding users meant buying expensive mainframe capacity.",
        },
        {
          title: "Compliance Risk",
          description:
            "Missing audit trails and encryption standards exposed the bank to regulatory penalties.",
        },
      ],
    },
    architectureIntro:
      "We designed a domain-driven microservices architecture split across bounded contexts: Accounts, Payments, KYC, Notifications, and Analytics. Each service communicates asynchronously via an event bus, ensuring fault tolerance and horizontal scalability.",
    architectureType: "microservices",
    productFeatures: [
      "Real-time balance updates with push notifications to mobile and web clients",
      "Instant peer-to-peer transfers settled in under 500ms across all currencies",
      "Multi-currency support with live exchange rate integration",
      "Advanced fraud detection dashboard with ML-powered risk scoring",
      "Automated regulatory reporting with exportable audit trails",
      "White-label REST API for fintech partner integrations",
    ],
    devTimeline: [
      {
        title: "Discovery",
        description:
          "Deep-dive stakeholder interviews, legacy code audit, compliance gap analysis, and competitive benchmarking. We mapped every critical user journey and identified 47 high-priority technical debt items.",
        duration: "3 weeks",
      },
      {
        title: "UI/UX Design",
        description:
          "Created a comprehensive design system with accessible components, redesigned the mobile banking flow, and conducted usability testing with 24 active customers to validate assumptions.",
        duration: "4 weeks",
      },
      {
        title: "Development",
        description:
          "Built 11 microservices with NestJS, implemented an API gateway with Kong, set up an Apache Kafka event bus, and rewrote the customer-facing frontend in Next.js with server-side rendering.",
        duration: "14 weeks",
      },
      {
        title: "Testing",
        description:
          "Executed comprehensive load testing simulating 50,000 concurrent users, security penetration testing by an external firm, and end-to-end compliance validation with auditors.",
        duration: "4 weeks",
      },
      {
        title: "Deployment",
        description:
          "Rolled out using a blue-green strategy with zero downtime. Migrated 2M customer records through a custom ETL pipeline and established 24/7 monitoring with Prometheus and Grafana.",
        duration: "3 weeks",
      },
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Cache" },
      { name: "Kafka", category: "Messaging" },
      { name: "Docker", category: "Container" },
      { name: "Kubernetes", category: "Orchestration" },
      { name: "AWS", category: "Cloud" },
      { name: "Terraform", category: "IaC" },
      { name: "Prometheus", category: "Monitoring" },
    ],
    results: [
      { label: "Performance Improvement", value: "70", suffix: "%" },
      { label: "Uptime Achieved", value: "99.99", suffix: "%" },
      { label: "Cost Reduction", value: "50", suffix: "%" },
      { label: "API Response Time", value: "<200", suffix: "ms" },
    ],
    testimonial: {
      quote:
        "SolveCore didn't just rebuild our platform. They transformed how we think about technology as a competitive advantage. Our customers now enjoy instant transfers and a mobile experience that rivals any digital bank.",
      name: "David Chen",
      role: "Chief Technology Officer",
      company: "Finova Bank",
    },
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare Data Platform",
    tag: "Healthcare",
    industry: "Healthcare",
    timeline: "8 months",
    teamSize: "6 engineers",
    year: "2024",
    outcome: "45% reporting accuracy increase",
    description:
      "Built a secure data platform that improved reporting accuracy by 45%.",
    heroGradient: "from-blue-900 to-cyan-900",
    clientName: "MedSync Network",
    clientDescription:
      "MedSync Network operates 12 specialist clinics across the Midwest, serving over 80,000 patients annually. Their operations were hampered by fragmented electronic health record systems and manual data reconciliation processes.",
    theIdea:
      "Create a unified, HIPAA-compliant data platform that aggregates patient records from all 12 clinics into a single source of truth. The platform would provide real-time analytics for clinical decision-making and automate compliance reporting.",
    theChallenge:
      "Each clinic used a different EHR system with incompatible data formats. Clinicians spent over 3 hours daily on manual data exports and reconciliation. There was no real-time visibility into network-wide patient outcomes, and HIPAA compliance audits revealed critical gaps in access controls and audit logging.",
    theResult:
      "We delivered a centralized data platform with sub-second query performance across 12M patient records. Reporting accuracy jumped 45%, and clinicians reclaimed an average of 2.5 hours per day. The platform passed a third-party HIPAA audit with zero critical findings.",
    businessChallenge: {
      intro:
        "MedSync's growth had created a data fragmentation crisis. Clinicians were making decisions based on incomplete information, and the administrative burden of manual reporting was burning out staff.",
      problems: [
        "12 incompatible EHR systems with no standardized data schema",
        "Clinicians spent 3+ hours daily on manual CSV exports and reconciliation",
        "No real-time network-wide visibility into patient outcomes or resource utilization",
        "HIPAA compliance gaps in access controls, encryption, and audit logging",
        "Reporting errors led to incorrect insurance claims and delayed reimbursements",
      ],
      highlights: [
        {
          title: "Data Silos",
          description:
            "Patient data was trapped in 12 separate systems with no interoperability layer.",
        },
        {
          title: "Manual Workload",
          description:
            "Clinical staff spent 15+ hours per week on data entry instead of patient care.",
        },
        {
          title: "Compliance Risk",
          description:
            "Missing audit trails and role-based access put patient privacy at serious risk.",
        },
      ],
    },
    architectureIntro:
      "We built a modern data platform with an ingestion layer powered by Apache Airflow, a normalized data warehouse in PostgreSQL, and a high-performance analytics engine using ClickHouse. A React-based clinician dashboard provides real-time patient insights with row-level security enforced at the database layer.",
    architectureType: "data-platform",
    productFeatures: [
      "Unified patient dashboard with complete medical history across all clinics",
      "Real-time clinical analytics with automated alerting for critical thresholds",
      "Automated compliance reporting with exportable HIPAA audit trails",
      "Granular role-based access control down to the field level",
      "HL7 and FHIR integration adapters for all major EHR systems",
      "Predictive readmission risk scoring using historical outcome data",
    ],
    devTimeline: [
      {
        title: "Discovery",
        description:
          "Conducted on-site visits to all 12 clinics, mapped 38 distinct data sources, and performed a comprehensive HIPAA gap assessment with external compliance consultants.",
        duration: "4 weeks",
      },
      {
        title: "UI/UX Design",
        description:
          "Designed a clinician-first interface prioritizing speed and clarity. Tested prototypes with 18 physicians and nurses across different specialties to ensure adoption.",
        duration: "5 weeks",
      },
      {
        title: "Development",
        description:
          "Built ingestion pipelines, normalized the data schema, implemented row-level security, and developed the React dashboard with real-time WebSocket updates.",
        duration: "18 weeks",
      },
      {
        title: "Testing",
        description:
          "Performed data integrity validation across 12M records, security penetration testing, and a full HIPAA compliance audit simulation with external assessors.",
        duration: "5 weeks",
      },
      {
        title: "Deployment",
        description:
          "Phased rollout clinic by clinic with parallel data validation. Provided on-site training for 200+ staff members and established a 24/7 support rotation.",
        duration: "4 weeks",
      },
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "API" },
      { name: "PostgreSQL", category: "Database" },
      { name: "ClickHouse", category: "Analytics" },
      { name: "Airflow", category: "Pipeline" },
      { name: "AWS", category: "Cloud" },
      { name: "Terraform", category: "IaC" },
      { name: "Docker", category: "Container" },
      { name: "Redis", category: "Cache" },
    ],
    results: [
      { label: "Reporting Accuracy", value: "45", suffix: "% increase" },
      { label: "Query Time", value: "180", suffix: "ms" },
      { label: "Clinics Unified", value: "12", suffix: "" },
      { label: "HIPAA Compliance", value: "100", suffix: "%" },
    ],
    testimonial: {
      quote:
        "Our clinicians now spend time caring for patients instead of wrestling with spreadsheets. The platform has become the backbone of our clinical operations.",
      name: "Dr. Sarah Mitchell",
      role: "Chief Operating Officer",
      company: "MedSync Network",
    },
  },
  {
    id: "saas",
    slug: "saas",
    title: "SaaS Product Scaling",
    tag: "SaaS",
    industry: "Productivity Software",
    timeline: "4 months",
    teamSize: "4 engineers",
    year: "2023",
    outcome: "10x user capacity, zero downtime",
    description:
      "Scaled infrastructure to support 10x users without performance loss.",
    heroGradient: "from-violet-900 to-purple-900",
    clientName: "Taskora",
    clientDescription:
      "Taskora is a fast-growing productivity SaaS helping remote teams manage projects and async communication. After hitting product-market fit, their user base tripled in six months, exposing critical infrastructure weaknesses.",
    theIdea:
      "Redesign the entire infrastructure stack to support 10x user growth while improving performance and reducing cloud spend. Introduce horizontal auto-scaling, a global CDN, and a robust caching strategy.",
    theChallenge:
      "The application ran on a single large PostgreSQL instance with no read replicas. Redis was undersized, the frontend had no caching layer, and traffic spikes during product launches caused cascading 502 errors. The infrastructure bill was growing faster than revenue.",
    theResult:
      "Taskora now handles 10x concurrent users with zero downtime during traffic spikes. Page load times improved 65%, infrastructure costs dropped 40%, and the team can deploy confidently multiple times per day.",
    businessChallenge: {
      intro:
        "Taskora's success had become its biggest threat. Every product launch and viral tweet brought the platform to its knees, and the engineering team was in constant firefighting mode.",
      problems: [
        "Single PostgreSQL instance maxed out CPU during peak hours",
        "No auto-scaling meant traffic spikes caused immediate outages",
        "Missing CDN strategy forced users in Asia and Europe to hit US servers",
        "Redis cache evictions caused repeated database hammering",
        "Infrastructure costs were growing 3x faster than user growth",
      ],
      highlights: [
        {
          title: "Database Bottleneck",
          description:
            "A single Postgres instance handled all reads and writes with zero connection pooling.",
        },
        {
          title: "Traffic Spikes",
          description:
            "Product Hunt launches caused 502 errors that lasted hours with no graceful degradation.",
        },
        {
          title: "Runaway Costs",
          description:
            "Cloud spend hit $28K/month with no cost visibility or optimization strategy.",
        },
      ],
    },
    architectureIntro:
      "We implemented a horizontally scalable architecture with PostgreSQL read replicas, Redis Cluster for session and object caching, and a Cloudflare CDN edge network. The compute layer runs on Kubernetes with HPA auto-scaling, and static assets are served from S3 with signed URLs.",
    architectureType: "cloud-scale",
    productFeatures: [
      "Global CDN delivery with edge caching for static assets and API responses",
      "Auto-scaling worker pools that spin up new pods in under 30 seconds",
      "Real-time collaboration engine with optimistic UI updates",
      "Multi-tier caching strategy (browser, CDN, Redis, database)",
      "Multi-region failover with automatic traffic routing",
      "Cost analytics dashboard showing real-time infrastructure spend",
    ],
    devTimeline: [
      {
        title: "Discovery",
        description:
          "Performed a full infrastructure audit using AWS Cost Explorer and application tracing. Identified 14 critical bottlenecks and mapped traffic patterns across global regions.",
        duration: "2 weeks",
      },
      {
        title: "UI/UX Design",
        description:
          "Optimized the frontend bundle size by 60% through code splitting and tree shaking. Designed skeleton loading states and optimistic UI patterns for perceived performance.",
        duration: "3 weeks",
      },
      {
        title: "Development",
        description:
          "Set up database read replicas, implemented Redis Cluster, configured Kubernetes HPA, and integrated Cloudflare with custom cache rules for API responses.",
        duration: "10 weeks",
      },
      {
        title: "Testing",
        description:
          "Ran chaos engineering experiments simulating regional outages and traffic spikes. Validated auto-scaling thresholds and failover behavior under extreme load.",
        duration: "3 weeks",
      },
      {
        title: "Deployment",
        description:
          "Migrated traffic incrementally using weighted DNS routing. Achieved zero-downtime cutover and reduced P99 latency from 2.1s to 340ms globally.",
        duration: "2 weeks",
      },
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "Go", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Cache" },
      { name: "Cloudflare", category: "CDN" },
      { name: "AWS Lambda", category: "Serverless" },
      { name: "Kubernetes", category: "Orchestration" },
      { name: "Terraform", category: "IaC" },
      { name: "Prometheus", category: "Monitoring" },
      { name: "Grafana", category: "Observability" },
    ],
    results: [
      { label: "User Capacity", value: "10", suffix: "x" },
      { label: "Page Load Improvement", value: "65", suffix: "%" },
      { label: "Cost Reduction", value: "40", suffix: "%" },
      { label: "Uptime During Spikes", value: "100", suffix: "%" },
    ],
    testimonial: {
      quote:
        "We went from fearing product launches to celebrating them. The infrastructure just works, no matter how many users sign up overnight.",
      name: "Alex Rivera",
      role: "Chief Executive Officer",
      company: "Taskora",
    },
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "E-Commerce Checkout Optimization",
    tag: "E-Commerce",
    industry: "E-Commerce",
    timeline: "3 months",
    teamSize: "3 engineers",
    year: "2023",
    outcome: "38% checkout conversion lift",
    description:
      "Identified and resolved critical drop-off points in a high-volume checkout flow.",
    heroGradient: "from-rose-900 to-orange-900",
    clientName: "LuxeMarket",
    clientDescription:
      "LuxeMarket is a premium lifestyle e-commerce brand doing $40M in annual revenue. Their checkout process was hemorrhaging customers, with mobile users experiencing the worst abandonment rates.",
    theIdea:
      "Redesign the entire checkout experience into a single, frictionless page with guest checkout, digital wallet support, and real-time validation. Use data instrumentation to continuously optimize every step.",
    theChallenge:
      "The checkout flow spanned 5 separate pages with forced account creation. Mobile UX was broken on 30% of devices. Payment failures were silently logged with no retry mechanism. The cart abandonment rate had climbed to 68%, costing millions in lost revenue.",
    theResult:
      "The new one-page checkout reduced abandonment from 68% to 42%. Mobile revenue doubled, payment success rates hit 99.95%, and the A/B testing framework has since enabled 12 additional conversion wins.",
    businessChallenge: {
      intro:
        "LuxeMarket's marketing team was driving record traffic, but the checkout funnel was leaking revenue at every step. The mobile experience was particularly broken, alienating their fastest-growing customer segment.",
      problems: [
        "68% cart abandonment rate with 5-page checkout flow",
        "No guest checkout option forcing account creation friction",
        "Mobile UX broken on 30% of devices due to unresponsive design",
        "Payment failures logged silently with no retry or user feedback",
        "No instrumentation meant optimization decisions were based on gut feeling",
      ],
      highlights: [
        {
          title: "Revenue Leak",
          description:
            "An estimated $2.1M in monthly revenue was lost to checkout abandonment alone.",
        },
        {
          title: "Mobile Gap",
          description:
            "Mobile traffic was 64% of visits but only 28% of completed purchases.",
        },
        {
          title: "Blind Spot",
          description:
            "No event tracking meant the team couldn't identify where users dropped off.",
        },
      ],
    },
    architectureIntro:
      "We rebuilt the checkout as a Next.js application with server-side rendering for SEO and performance. Stripe handles payment orchestration with automatic retries, Redis manages inventory locks, and a custom analytics pipeline feeds an A/B testing framework for continuous optimization.",
    architectureType: "checkout-flow",
    productFeatures: [
      "One-page checkout with inline validation and real-time error feedback",
      "Guest checkout with optional account creation after purchase",
      "Apple Pay, Google Pay, and PayPal integration with smart fallback",
      "Real-time inventory validation preventing oversell scenarios",
      "Smart address autocomplete reducing form completion time by 40%",
      "Built-in A/B testing framework for continuous conversion optimization",
    ],
    devTimeline: [
      {
        title: "Discovery",
        description:
          "Analyzed 6 months of checkout funnel data, conducted user interviews with 20 abandoned cart users, and performed heuristic evaluations on mobile devices.",
        duration: "2 weeks",
      },
      {
        title: "UI/UX Design",
        description:
          "Designed a mobile-first one-page checkout with progressive disclosure. Created interactive prototypes and tested them with 15 users across iOS and Android devices.",
        duration: "3 weeks",
      },
      {
        title: "Development",
        description:
          "Built the Next.js checkout application, integrated Stripe with custom retry logic, implemented Redis inventory locks, and built the A/B testing pipeline.",
        duration: "8 weeks",
      },
      {
        title: "Testing",
        description:
          "Ran end-to-end tests across 40 device and browser combinations, load-tested payment flows, and validated inventory locking under race conditions.",
        duration: "2 weeks",
      },
      {
        title: "Deployment",
        description:
          "Launched with a 50/50 A/B test. The new checkout outperformed the old flow within 72 hours and was rolled out to 100% traffic after one week.",
        duration: "1 week",
      },
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Stripe", category: "Payments" },
      { name: "Redis", category: "Cache" },
      { name: "Vercel", category: "Hosting" },
      { name: "Datadog", category: "Monitoring" },
      { name: "Docker", category: "Container" },
    ],
    results: [
      { label: "Conversion Lift", value: "38", suffix: "%" },
      { label: "Abandonment Rate", value: "42", suffix: "%" },
      { label: "Mobile Revenue", value: "2.1", suffix: "x" },
      { label: "Payment Success", value: "99.95", suffix: "%" },
    ],
    testimonial: {
      quote:
        "The checkout rewrite paid for itself in the first month. Our CFO was shocked by the revenue impact of what seemed like 'just a frontend project'.",
      name: "Priya Nandakumar",
      role: "Head of Digital",
      company: "LuxeMarket",
    },
  },
  {
    id: "logistics",
    slug: "logistics",
    title: "Real-Time Logistics Dashboard",
    tag: "Logistics",
    industry: "Logistics & Supply Chain",
    timeline: "5 months",
    teamSize: "4 engineers",
    year: "2023",
    outcome: "22% on-time delivery improvement",
    description:
      "Built a live operations dashboard integrating GPS telemetry and route optimization.",
    heroGradient: "from-emerald-900 to-teal-900",
    clientName: "RouteOne Logistics",
    clientDescription:
      "RouteOne Logistics manages a fleet of 300+ delivery vehicles across the Pacific Northwest. Their operations relied on phone calls, spreadsheets, and guesswork — leading to missed delivery windows and rising fuel costs.",
    theIdea:
      "Build a real-time command center that integrates GPS telemetry, route optimization algorithms, and predictive delay alerts into a single glass-panel view for dispatchers and customers.",
    theChallenge:
      "Dispatchers had no real-time visibility into vehicle locations. Route planning was done manually in Excel, taking 4 hours every morning. Customers received static ETAs that were wrong 40% of the time. Fuel costs had risen 20% year-over-year with no optimization strategy.",
    theResult:
      "RouteOne achieved a 22% improvement in on-time deliveries, an 18% reduction in fuel costs, and ETA accuracy improved to within 15 minutes. Customer complaints dropped by 60%.",
    businessChallenge: {
      intro:
        "RouteOne was running a 21st-century fleet with 20th-century tools. Dispatchers were overwhelmed, drivers were frustrated, and customers were leaving for competitors with better visibility.",
      problems: [
        "Zero real-time fleet visibility; dispatchers relied on phone check-ins",
        "Manual route planning in Excel took 4 hours daily and produced suboptimal routes",
        "Customer ETA accuracy was wrong 40% of the time, driving support tickets",
        "Fuel costs rose 20% YoY with no route optimization or idle-time tracking",
        "No historical data meant recurring problems were never identified or fixed",
      ],
      highlights: [
        {
          title: "Blind Operations",
          description:
            "Dispatchers managed 300 vehicles without a map. Every decision was a phone call.",
        },
        {
          title: "Inefficient Routes",
          description:
            "Manual planning ignored traffic, delivery windows, and vehicle capacity constraints.",
        },
        {
          title: "Customer Churn",
          description:
            "Poor ETA accuracy and missed windows were the top reasons customers switched carriers.",
        },
      ],
    },
    architectureIntro:
      "The platform ingests GPS telemetry via AWS IoT Core, processes location streams through a Node.js event pipeline, and stores time-series data in TimescaleDB. A React dashboard renders live vehicle positions on Mapbox, while a Python optimization service recalculates routes every 15 minutes based on traffic and new orders.",
    architectureType: "iot-dashboard",
    productFeatures: [
      "Live fleet map with real-time vehicle positions and status indicators",
      "Predictive delay alerts based on traffic, weather, and historical patterns",
      "Automated route optimization engine with multi-stop constraints",
      "Driver mobile app with turn-by-turn navigation and delivery confirmations",
      "Customer ETA portal with live tracking links and SMS notifications",
      "Fuel analytics dashboard comparing actual vs. optimal consumption per route",
    ],
    devTimeline: [
      {
        title: "Discovery",
        description:
          "Shadowed dispatchers for two weeks, mapped the entire route planning workflow, and analyzed 12 months of delivery performance data to identify optimization opportunities.",
        duration: "3 weeks",
      },
      {
        title: "UI/UX Design",
        description:
          "Designed a high-density operations dashboard for dispatchers and a simplified driver mobile app. Tested prototypes with the dispatch team to ensure adoption.",
        duration: "4 weeks",
      },
      {
        title: "Development",
        description:
          "Built the IoT ingestion pipeline, Mapbox dashboard, route optimization service, and mobile apps. Integrated with third-party GPS hardware and weather APIs.",
        duration: "12 weeks",
      },
      {
        title: "Testing",
        description:
          "Simulated fleet operations with 50 test vehicles, validated route optimization against historical data, and stress-tested the telemetry pipeline.",
        duration: "3 weeks",
      },
      {
        title: "Deployment",
        description:
          "Rolled out to 50 vehicles initially, then scaled to the full 300-vehicle fleet over 3 weeks. Provided onsite training for dispatchers and drivers.",
        duration: "3 weeks",
      },
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "TimescaleDB", category: "Time-Series" },
      { name: "Mapbox", category: "Maps" },
      { name: "WebSockets", category: "Realtime" },
      { name: "AWS IoT Core", category: "IoT" },
      { name: "Python", category: "ML/Optimization" },
      { name: "Docker", category: "Container" },
      { name: "AWS", category: "Cloud" },
    ],
    results: [
      { label: "On-Time Improvement", value: "22", suffix: "%" },
      { label: "Fuel Reduction", value: "18", suffix: "%" },
      { label: "ETA Accuracy", value: "15", suffix: "min window" },
      { label: "Fleet Tracked", value: "300", suffix: "+ vehicles" },
    ],
    testimonial: {
      quote:
        "We finally have eyes on our entire fleet. It's like switching from a paper map to GPS — our dispatchers can't imagine going back.",
      name: "Marcus Thompson",
      role: "Operations Director",
      company: "RouteOne Logistics",
    },
  },
  {
    id: "edtech",
    slug: "edtech",
    title: "Adaptive Learning Platform",
    tag: "EdTech",
    industry: "Education Technology",
    timeline: "7 months",
    teamSize: "5 engineers",
    year: "2022",
    outcome: "2.4x learner engagement increase",
    description:
      "Developed an AI-assisted curriculum engine that personalizes learning for each student.",
    heroGradient: "from-amber-900 to-orange-900",
    clientName: "EduPeak",
    clientDescription:
      "EduPeak provides digital learning tools to K-12 schools across North America. Their one-size-fits-all approach was failing struggling students and boring advanced learners, leading to low completion rates.",
    theIdea:
      "Build an AI-assisted curriculum engine that dynamically adjusts content difficulty and pacing for each learner. Integrate seamlessly with existing LMS platforms without disrupting active courses.",
    theChallenge:
      "Course completion rates were below 35%. Teachers had no visibility into individual student progress. Advanced learners were disengaged, while struggling students were falling further behind. Integration with existing LMS platforms was mandatory and could not disrupt active courses.",
    theResult:
      "Learner engagement increased 2.4x, course completion rates rose 45%, and teacher satisfaction hit 85%. The platform now serves 50,000+ students across 200 schools with zero LMS downtime during integration.",
    businessChallenge: {
      intro:
        "EduPeak's content was static and linear. In a classroom of 30 students, everyone progressed at the same pace — which meant the material was too hard for some and too easy for others.",
      problems: [
        "Course completion rates below 35% across all grade levels",
        "Teachers had no data on individual student misconceptions or progress gaps",
        "Advanced learners disengaged due to lack of challenge and differentiation",
        "Struggling students fell further behind without targeted remediation paths",
        "LMS integration requirements were strict: zero downtime, zero data loss",
      ],
      highlights: [
        {
          title: "One-Size-Fits-All",
          description:
            "Static content meant a 3rd grader and a 5th grader saw the same lesson plan.",
        },
        {
          title: "Teacher Blindness",
          description:
            "Instructors had no tools to identify which students needed help until test time.",
        },
        {
          title: "Integration Risk",
          description:
            "Any LMS downtime during school hours would violate district contracts.",
        },
      ],
    },
    architectureIntro:
      "The adaptive engine runs on Python microservices using scikit-learn for difficulty prediction. A Next.js frontend delivers personalized lesson paths, while a FastAPI integration layer syncs progress data with existing LMS platforms via REST and webhooks. All data is cached in Redis for sub-second lesson loading.",
    architectureType: "ai-platform",
    productFeatures: [
      "Adaptive difficulty engine that adjusts questions in real time based on student performance",
      "Real-time progress tracking with teacher dashboards showing class and individual insights",
      "LMS integration via REST and webhooks with bi-directional grade passback",
      "Gamification system with badges, streaks, and leaderboards to motivate learners",
      "Content recommendation engine suggesting review materials for weak concepts",
      "Offline mode for students with unreliable internet connectivity",
    ],
    devTimeline: [
      {
        title: "Discovery",
        description:
          "Analyzed 2 years of LMS usage data, interviewed 32 teachers, and reviewed educational psychology research on adaptive learning to define the personalization algorithm.",
        duration: "4 weeks",
      },
      {
        title: "UI/UX Design",
        description:
          "Designed student lesson interfaces for ages 6-18, teacher analytics dashboards, and integration configuration screens. Tested with 5 pilot classrooms.",
        duration: "5 weeks",
      },
      {
        title: "Development",
        description:
          "Built the adaptive algorithm, Next.js frontend, FastAPI integration layer, and Redis caching. Developed zero-downtime LMS sync with conflict resolution.",
        duration: "16 weeks",
      },
      {
        title: "Testing",
        description:
          "Validated algorithm accuracy against historical student performance, tested LMS integrations with 3 major platforms, and ran pilot programs in 8 classrooms.",
        duration: "4 weeks",
      },
      {
        title: "Deployment",
        description:
          "Phased rollout across 200 schools using feature flags. Monitored LMS sync health 24/7 and provided teacher training webinars for all districts.",
        duration: "4 weeks",
      },
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "API" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Cache" },
      { name: "TensorFlow", category: "ML" },
      { name: "AWS SageMaker", category: "ML Ops" },
      { name: "Docker", category: "Container" },
      { name: "AWS", category: "Cloud" },
      { name: "Terraform", category: "IaC" },
    ],
    results: [
      { label: "Engagement Increase", value: "2.4", suffix: "x" },
      { label: "Completion Lift", value: "45", suffix: "%" },
      { label: "Teacher Satisfaction", value: "85", suffix: "%" },
      { label: "Students Served", value: "50K", suffix: "+" },
    ],
    testimonial: {
      quote:
        "Students who used to struggle are now leading their cohorts. The adaptive engine is like having a personal tutor for every child in the classroom.",
      name: "Dr. Emily Carter",
      role: "Chief Learning Officer",
      company: "EduPeak",
    },
  },
];
