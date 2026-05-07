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
    id: "haen-komputer",
    title: "Haen Komputer Management System",
    description: "Transformed a spreadsheet-based retail operation into a fully integrated custom ERP system.",
    tag: "Retail",
    gradient: "from-emerald-900 to-teal-900",
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
    id: "haen-komputer",
    title: "Haen Komputer Management System",
    description:
      "Transformed Haen Komputer's spreadsheet-based operations into a fully integrated custom ERP system built on the TALL Stack, reducing manual errors and improving real-time visibility across procurement, sales, inventory, and accounting.",
    tag: "Retail",
    outcome: "40% efficiency gain",
    year: "2024",
    href: "/portfolio/haen-komputer",
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
    id: "haen-komputer",
    slug: "haen-komputer",
    title: "Haen Komputer Management System",
    tag: "Retail",
    industry: "Retail",
    timeline: "6 months",
    teamSize: "3 engineers",
    year: "2024",
    outcome: "40% efficiency gain",
    description:
      "Transformed a spreadsheet-based retail operation into a fully integrated custom ERP system.",
    heroGradient: "from-emerald-900 to-teal-900",
    clientName: "Haen Komputer",
    clientDescription:
      "Haen Komputer is a custom PC building service focused on helping users create machines that truly fit their needs. In a market filled with one-size-fits-all solutions, they provide flexible component customization and expert guidance allowing customers to build high-performance, personalized systems without compromise.",
    theIdea:
      "The vision was to transform Haen Komputer's traditional, spreadsheet-based workflow into a modern, integrated system that streamlines operations, reduces manual errors, and improves overall efficiency while ensuring the platform remains intuitive and easy to use for daily business activities.",
    theChallenge:
      "The existing workflow relied heavily on multiple spreadsheets and manual calculations, with certain processes handled outside of the system using calculators. Over the past eight years, these fragmented and unconventional methods became deeply embedded in daily operations, making it difficult to standardize workflows or adopt off-the-shelf ERP solutions.",
    theResult:
      "The result was a fully integrated, custom ERP system built on Haen Komputer's platform transforming years of fragmented, manual processes into a cohesive digital workflow. This enabled faster operations, reduced dependency on manual calculations, and provided a scalable foundation for future growth.",
    businessChallenge: {
      intro:
        "Haen Komputer's operations were constrained by fragmented and manual workflows. Accounting records lacked consistency, transaction tracking was complex and time-consuming, and inventory processes—such as stock mutation and stock opname—were unreliable. As a result, management faced significant challenges in maintaining accurate data and operational control.",
      problems: [
        "Accounting processes relied on manually updated spreadsheets, creating dependency on specific staff and leading to gaps in financial records when updates were missed.",
        "Transaction tracking was fragmented, with purchase and sales activities often recorded through WhatsApp groups, making data difficult to trace, validate, and consolidate.",
        "Overreliance on informal communication channels resulted in scattered documentation and reduced operational visibility.",
        "Inventory management lacked proper tracking, including stock movements and warranty return processes, leading to inconsistent and unreliable data.",
        "Service items were not consistently recorded within the system, causing miscommunication and coordination issues between staff.",
      ],
      highlights: [
        {
          title: "Manual Accounting Dependency",
          description:
            "Accounting relied on manually updated spreadsheets, creating gaps in financial records and heavy dependency on specific staff availability.",
        },
        {
          title: "Fragmented Transaction Tracking",
          description:
            "Purchase and sales records were scattered across spreadsheets and WhatsApp groups, making transactions difficult to trace and validate.",
        },
        {
          title: "Inventory Visibility Gap",
          description:
            "Stock movements, warranty returns, and inventory updates were not properly tracked, resulting in inconsistent and unreliable stock data.",
        },
        {
          title: "Unstructured Workflow",
          description:
            "Service items and operational tasks were not consistently recorded, leading to frequent miscommunication and inefficient coordination between staff.",
        },
      ],
    },
    architectureIntro:
      "We structured the system around Haen Komputer's core business domains: Sales, Procurement, Inventory, Service, and Accounting. Each domain is connected through a centralized platform, enabling real-time data synchronization across transactions, stock movements, and financial records. This unified approach ensures consistent data flow and improved operational visibility across all departments.",
    architectureType: "tall-stack-erp",
    businessArchitectureImage: "/images/case-studies/haen-komputer/Arabica Business Structure.png",
    systemArchitectureImages: [
      "/images/case-studies/haen-komputer/Carrousel/Haen Komputer Dashboard.png",
      "/images/case-studies/haen-komputer/Carrousel/MacBook Pro 14_ - 2.png",
      "/images/case-studies/haen-komputer/Carrousel/MacBook Pro 14_ - 3.png",
      "/images/case-studies/haen-komputer/Carrousel/MacBook Pro 14_ - 4.png",
      "/images/case-studies/haen-komputer/Carrousel/MacBook Pro 14_ - 5.png",
      "/images/case-studies/haen-komputer/Carrousel/MacBook Pro 14_ - 6.png",
      "/images/case-studies/haen-komputer/Carrousel/MacBook Pro 14_ - 7.png",
    ],
    heroImage: "/images/case-studies/haen-komputer/hero-1c.png",
    productImage: "/images/case-studies/haen-komputer/Widget Dashboard.png",
    productFeatures: [
      {
        title: "Procurement & Purchasing",
        items: [
          "Purchase Order Management: Full lifecycle of purchase orders with suppliers",
          "Finalized Data Protection: Edit lock on historical purchase data (PO details, items, and grand totals) to ensure data integrity",
          "Supplier Management: Centralized database for managing vendor information and performance",
          "Purchasing Reports: Detailed reporting on procurement activities and expenses",
        ],
      },
      {
        title: "Sales & Point of Sale",
        items: [
          "POS System: Specialized interface for direct sales and transaction processing",
          "Tukar Tambah (Trade-in): Complex logic for handling product trade-ins within the sales flow",
          "Member Management: Loyalty or customer database management",
          "Sales Reporting: Comprehensive dashboards for sales performance and revenue tracking",
        ],
      },
      {
        title: "Inventory & Warehouse Management",
        items: [
          "Unified Inventory: Real-time tracking of stock across multiple warehouses (Gudang)",
          "Stock Adjustment & Opname: Tools for manual stock corrections and periodic physical inventory checks",
          "Product Catalog: Management of products, brands, and categories",
          "Batch Tracking Logic: Advanced stock management using batch identifiers for inventory precision",
        ],
      },
      {
        title: "Human Resources & Finance",
        items: [
          "Attendance (Absensi): Employee check-in/out and attendance tracking",
          "Payroll (Gaji Karyawan): Salary calculation and management",
          "Leave Management: Automated reporting and approval flow for employee leave requests",
          "Accounting Integration: Chart of accounts (Kode Akun) and transaction mapping for financial transparency",
        ],
      },
      {
        title: "System Integrity & Support",
        items: [
          "Validation Logs: System for tracking and resolving operational discrepancies",
          "Role-Based Access Control (RBAC): Specific restrictions (e.g., restricting Validation Log resolution to Manager roles)",
          "RMA (Return Merchandise Authorization): Handling product returns and warranty claims",
          "Notification System: Real-time alerts for critical system events",
        ],
      },
      {
        title: "Database Optimization",
        items: [
          "Seeder Cleanup: Streamlined database initialization by retaining only essential master data seeders (Karyawan and Kode Akun)",
        ],
      },
    ],
    devTimeline: [
      {
        title: "Discovery Phase",
        description:
          "Stakeholder Requirements: We identified the need for a unified system that bridges the gap between retail operations (POS), inventory management, and backend accounting. Problem Identification: We pinpointed critical pain points such as inventory leakage, lack of historical data integrity in purchasing, and the need for a granular approval system. Scope Definition: We defined the core modules: Purchasing (Procurement), Sales (POS/Trade-in), Inventory (Warehousing), HR (Payroll/Attendance), and Accounting (COA/Transactions). Tech Stack Selection: Chose the TALL Stack (Tailwind CSS, Alpine.js, Laravel, Livewire) with FilamentPHP to ensure rapid development without sacrificing a premium, custom-feel experience.",
        duration: "2 weeks",
      },
      {
        title: "UI/UX Design",
        description:
          "Information Architecture: Organized complex business data into logical Resources and Relation Managers to reduce cognitive load for users. Admin-First Experience: Leveraged Filament's design system to provide a clean, consistent interface. We customized forms for complex actions like Tukar Tambah (Trade-in) to guide users through multi-step processes. Aesthetic Polish: Implemented a modern, dark-mode friendly UI with high-contrast elements for readability in high-speed retail environments (POS). Responsiveness: Designed the layout to be fully responsive, ensuring managers can view reports and approve logs from mobile devices while staff use tablets or desktops.",
        duration: "3 weeks",
      },
      {
        title: "Development",
        description:
          "Backend Architecture: Built on Laravel 11, utilizing Service Classes and Action patterns to keep the business logic (like batch inventory calculation) decoupled from the UI. Feature Implementation: Immutable History — Developed the edit lock logic to freeze historical POs, ensuring financial records cannot be altered retroactively. Complex Relations — Managed deep relationships between Products, Brands, and Inventory across multiple warehouses. Security & RBAC: Implemented strict Role-Based Access Control using Laravel Policies, specifically isolating sensitive operations like Validation Log resolution to Manager roles. Database Design: Optimized MySQL schemas with proper indexing to handle large datasets in Sales and Purchasing reports.",
        duration: "8 weeks",
      },
      {
        title: "Testing",
        description:
          "Functional Testing: Conducted end-to-end testing of the Order-to-Stock flow, verifying that purchasing an item correctly updates warehouse inventory and accounting ledgers. Integrity Verification: Used the Validation Log system as a built-in testing tool to catch and log operational anomalies during the beta phase. User Acceptance Testing (UAT): Simulating real-world retail scenarios, such as processing a sales return or a stock opname, to ensure the UI behaves as expected under pressure. Role Validation: Rigorously tested permission sets to ensure Staff users cannot bypass security constraints or view sensitive payroll data.",
        duration: "3 weeks",
      },
      {
        title: "Deployment",
        description:
          "Containerization: Utilized Podman/Docker to create a reproducible environment, ensuring the it works on my machine consistency across development and production. Environment Orchestration: Managed configurations via secure .env structures and Laravel's built-in caching mechanisms (Config/Route/View) for production performance. Migration Strategy: Developed a streamlined deployment script that handles database migrations and seeds essential master data (like Account Codes) while keeping the production database clean. CI/CD Ready: Structured the codebase for automated deployment pipelines, allowing for zero-downtime updates as the project evolves.",
        duration: "1 week",
      },
    ],
    techStack: [
      { name: "Laravel", category: "Framework" },
      { name: "PHP", category: "Language" },
      { name: "Blade", category: "Templating" },
      { name: "Livewire", category: "Reactivity" },
      { name: "Filament", category: "Interface" },
      { name: "Tailwind", category: "Styling" },
      { name: "MySQL", category: "Database" },
      { name: "Docker", category: "Containerization" },
      { name: "Redis", category: "Caching" },
      { name: "Vite", category: "Bundling" },
      { name: "Alpine.js", category: "Scripting" },
      { name: "Pest", category: "Testing" },
      { name: "Spatie Shield", category: "Permissions" },
      { name: "PWA", category: "Offline-ready" },
      { name: "DomPDF", category: "Reports" },
      { name: "QR Code", category: "Scanning" },
      { name: "FullCalendar", category: "Scheduling" },
      { name: "Pint", category: "Linting" },
    ],
    results: [
      { label: "Efficiency Gain", value: "40", suffix: "%" },
      { label: "Paper Reduction", value: "Significant", suffix: "" },
      { label: "Data Accuracy", value: "Real-time", suffix: "" },
      { label: "Report Accuracy", value: "45", suffix: "% increase" },
    ],
    testimonial: {
      quote:
        "Before Haen Komputer's system, our closing process was a nightmare. We relied on a massive Excel sheet that would crash half the time, and we often found 'invisible' losses because someone forgot to update a formula or a stock count. Moving to this system changed everything. The biggest win for us is the Batch and Serial Number tracking. Now, if a customer comes in for a warranty claim, we can find the exact purchase date and SN in seconds. No more digging through old receipts or Excel tabs. It has saved us at least 15 hours of manual admin work every week!",
      name: "Operations Manager",
      role: "Operations Lead",
      company: "Haen Komputer",
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
