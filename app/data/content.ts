import type {
  NavItem,
  Service,
  ApproachStep,
  CaseStudy,
  PortfolioProject,
  CaseStudyDetail,
} from "@/app/types";

export const getNavItems = (dict: any): NavItem[] => [
  { label: dict?.nav?.home || "Home", href: "/" },
  { label: dict?.nav?.services || "Services", href: "/#services" },
  { label: dict?.nav?.portfolio || "Portfolio", href: "/portfolio" },
  { label: dict?.nav?.about_us || "About Us", href: "/#about" },
  // { label: dict?.nav?.blog || "Blog", href: "/#blog" },
  // { label: dict?.nav?.contact || "Contact", href: "/contact" },
];

export const TRUSTED_COMPANIES = [
  "Finova",
  "zenith",
  "Payliance",
  "Healthify",
  "DataPeak",
  "Taskora",
];

export const getServices = (dict: any): Service[] => [
  {
    id: "custom-software",
    icon: "code",
    title: dict?.services_section?.custom_software_title || "Custom Software Development",
    description: dict?.services_section?.custom_software_desc || "Tailored web, mobile and desktop applications built for your business needs.",
    href: "/#services",
  },
  {
    id: "problem-solving",
    icon: "puzzle",
    title: dict?.services_section?.problem_solving_title || "Problem Solving & Consulting",
    description: dict?.services_section?.problem_solving_desc || "We analyze complex problems and design effective, practical and scalable solutions.",
    href: "/#services",
  },
  {
    id: "cloud-devops",
    icon: "cloud",
    title: dict?.services_section?.cloud_devops_title || "Cloud & DevOps Engineering",
    description: dict?.services_section?.cloud_devops_desc || "Scalable cloud architecture, DevOps automation and infrastructure management.",
    href: "/#services",
  },
  {
    id: "product-development",
    icon: "chart",
    title: dict?.services_section?.product_development_title || "Product Development & Scaling",
    description: dict?.services_section?.product_development_desc || "MVP development, product evolution and scaling for sustainable growth.",
    href: "/#services",
  },
];

export const getApproachSteps = (dict: any): ApproachStep[] => [
  {
    number: "1",
    label: dict?.approach_section?.discover_label || "Discover",
    description: dict?.approach_section?.discover_desc || "We dive deep to understand your business, users and the real problem.",
    icon: "search",
  },
  {
    number: "2",
    label: dict?.approach_section?.define_label || "Define",
    description: dict?.approach_section?.define_desc || "We define the right problem to solve and validate the approach.",
    icon: "lightbulb",
  },
  {
    number: "3",
    label: dict?.approach_section?.develop_label || "Develop",
    description: dict?.approach_section?.develop_desc || "We engineer scalable solutions with clean code and modern practices.",
    icon: "code2",
  },
  {
    number: "4",
    label: dict?.approach_section?.deliver_label || "Deliver & Evolve",
    description: dict?.approach_section?.deliver_desc || "We launch, measure impact and continuously improve for long-term success.",
    icon: "rocket",
  },
];

export const getCaseStudies = (dict: any): CaseStudy[] => [
  {
    id: "haen-komputer",
    title: dict?.portfolio_page?.haen_komputer_title || "Haen Komputer Management System",
    description: dict?.portfolio_page?.haen_komputer_short_desc || "Transformed a spreadsheet-based retail operation into a fully integrated custom ERP system.",
    tag: dict?.portfolio_page?.tag_retail || "Retail",
    gradient: "from-emerald-900 to-teal-900",
    href: "/portfolio",
  },
];

export const getPortfolioProjects = (dict: any): PortfolioProject[] => [
  {
    id: "haen-komputer",
    title: dict?.portfolio_page?.haen_komputer_title || "Haen Komputer Management System",
    description: dict?.portfolio_page?.haen_komputer_desc || "Transformed Haen Komputer's spreadsheet-based operations into a fully integrated custom ERP system built on the TALL Stack, reducing manual errors and improving real-time visibility across procurement, sales, inventory, and accounting.",
    tag: dict?.portfolio_page?.tag_retail || "Retail",
    outcome: dict?.portfolio_page?.outcome_efficiency || "40% efficiency gain",
    year: "2024",
    href: "/portfolio/haen-komputer",
    featuredImage: "/images/case-studies/haen-komputer/Carrousel/Haen Komputer Dashboard.png",
  },
];

export const getCaseStudyDetails = (dict: any = {}): CaseStudyDetail[] => [
  {
    id: "haen-komputer",
    slug: "haen-komputer",
    title: dict?.portfolio_page?.haen_komputer_title || "Haen Komputer Management System",
    tag: dict?.portfolio_page?.tag_retail || "Retail",
    industry: dict?.portfolio_page?.tag_retail || "Retail",
    timeline: "6 months",
    teamSize: "3 engineers",
    year: "2024",
    outcome: dict?.portfolio_page?.outcome_efficiency || "40% efficiency gain",
    description: dict?.portfolio_page?.haen_komputer_short_desc || "Transformed a spreadsheet-based retail operation into a fully integrated custom ERP system.",
    heroGradient: "from-emerald-900 to-teal-900",
    clientName: "Haen Komputer",
    clientDescription: dict?.haen_komputer_case_study?.client_desc || "Haen Komputer is a custom PC building service focused on helping users create machines that truly fit their needs. In a market filled with one-size-fits-all solutions, they provide flexible component customization and expert guidance allowing customers to build high-performance, personalized systems without compromise.",
    theIdea: dict?.haen_komputer_case_study?.the_idea || "The vision was to transform Haen Komputer's traditional, spreadsheet-based workflow into a modern, integrated system that streamlines operations, reduces manual errors, and improves overall efficiency while ensuring the platform remains intuitive and easy to use for daily business activities.",
    theChallenge: dict?.haen_komputer_case_study?.the_challenge || "The existing workflow relied heavily on multiple spreadsheets and manual calculations, with certain processes handled outside of the system using calculators. Over the past eight years, these fragmented and unconventional methods became deeply embedded in daily operations, making it difficult to standardize workflows or adopt off-the-shelf ERP solutions.",
    theResult: dict?.haen_komputer_case_study?.the_result || "The result was a fully integrated, custom ERP system built on Haen Komputer's platform transforming years of fragmented, manual processes into a cohesive digital workflow. This enabled faster operations, reduced dependency on manual calculations, and provided a scalable foundation for future growth.",
    businessChallenge: {
      intro: dict?.haen_komputer_case_study?.business_challenge_intro || "Haen Komputer's operations were constrained by fragmented and manual workflows. Accounting records lacked consistency, transaction tracking was complex and time-consuming, and inventory processes—such as stock mutation and stock opname—were unreliable. As a result, management faced significant challenges in maintaining accurate data and operational control.",
      problems: [
        dict?.haen_komputer_case_study?.problem_1 || "Accounting processes relied on manually updated spreadsheets, creating dependency on specific staff and leading to gaps in financial records when updates were missed.",
        dict?.haen_komputer_case_study?.problem_2 || "Transaction tracking was fragmented, with purchase and sales activities often recorded through WhatsApp groups, making data difficult to trace, validate, and consolidate.",
        dict?.haen_komputer_case_study?.problem_3 || "Overreliance on informal communication channels resulted in scattered documentation and reduced operational visibility.",
        dict?.haen_komputer_case_study?.problem_4 || "Inventory management lacked proper tracking, including stock movements and warranty return processes, leading to inconsistent and unreliable data.",
        dict?.haen_komputer_case_study?.problem_5 || "Service items were not consistently recorded within the system, causing miscommunication and coordination issues between staff.",
      ],
      highlights: [
        {
          title: dict?.haen_komputer_case_study?.highlight_1_title || "Manual Accounting Dependency",
          description: dict?.haen_komputer_case_study?.highlight_1_desc || "Accounting relied on manually updated spreadsheets, creating gaps in financial records and heavy dependency on specific staff availability.",
        },
        {
          title: dict?.haen_komputer_case_study?.highlight_2_title || "Fragmented Transaction Tracking",
          description: dict?.haen_komputer_case_study?.highlight_2_desc || "Purchase and sales records were scattered across spreadsheets and WhatsApp groups, making transactions difficult to trace and validate.",
        },
        {
          title: dict?.haen_komputer_case_study?.highlight_3_title || "Inventory Visibility Gap",
          description: dict?.haen_komputer_case_study?.highlight_3_desc || "Stock movements, warranty returns, and inventory updates were not properly tracked, resulting in inconsistent and unreliable stock data.",
        },
        {
          title: dict?.haen_komputer_case_study?.highlight_4_title || "Unstructured Workflow",
          description: dict?.haen_komputer_case_study?.highlight_4_desc || "Service items and operational tasks were not consistently recorded, leading to frequent miscommunication and inefficient coordination between staff.",
        },
      ],
    },
    architectureIntro: dict?.haen_komputer_case_study?.architecture_intro || "We structured the system around Haen Komputer's core business domains: Sales, Procurement, Inventory, Service, and Accounting. Each domain is connected through a centralized platform, enabling real-time data synchronization across transactions, stock movements, and financial records. This unified approach ensures consistent data flow and improved operational visibility across all departments.",
    architectureType: "tall-stack-erp",
    businessArchitectureImage: "/images/case-studies/haen-komputer/Arabica Business Structure.png",
    systemArchitectureMainImage: "/images/case-studies/haen-komputer/System Structure landscape bg.png",
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
        title: dict?.haen_komputer_case_study?.feature_1_title || "Procurement & Purchasing",
        items: [
          dict?.haen_komputer_case_study?.feature_1_item_1 || "Purchase Order Management: Full lifecycle of purchase orders with suppliers",
          dict?.haen_komputer_case_study?.feature_1_item_2 || "Finalized Data Protection: Edit lock on historical purchase data (PO details, items, and grand totals) to ensure data integrity",
          dict?.haen_komputer_case_study?.feature_1_item_3 || "Supplier Management: Centralized database for managing vendor information and performance",
          dict?.haen_komputer_case_study?.feature_1_item_4 || "Purchasing Reports: Detailed reporting on procurement activities and expenses",
        ],
      },
      {
        title: dict?.haen_komputer_case_study?.feature_2_title || "Sales & Point of Sale",
        items: [
          dict?.haen_komputer_case_study?.feature_2_item_1 || "POS System: Specialized interface for direct sales and transaction processing",
          dict?.haen_komputer_case_study?.feature_2_item_2 || "Tukar Tambah (Trade-in): Complex logic for handling product trade-ins within the sales flow",
          dict?.haen_komputer_case_study?.feature_2_item_3 || "Member Management: Loyalty or customer database management",
          dict?.haen_komputer_case_study?.feature_2_item_4 || "Sales Reporting: Comprehensive dashboards for sales performance and revenue tracking",
        ],
      },
      {
        title: dict?.haen_komputer_case_study?.feature_3_title || "Inventory & Warehouse Management",
        items: [
          dict?.haen_komputer_case_study?.feature_3_item_1 || "Unified Inventory: Real-time tracking of stock across multiple warehouses (Gudang)",
          dict?.haen_komputer_case_study?.feature_3_item_2 || "Stock Adjustment & Opname: Tools for manual stock corrections and periodic physical inventory checks",
          dict?.haen_komputer_case_study?.feature_3_item_3 || "Product Catalog: Management of products, brands, and categories",
          dict?.haen_komputer_case_study?.feature_3_item_4 || "Batch Tracking Logic: Advanced stock management using batch identifiers for inventory precision",
        ],
      },
      {
        title: dict?.haen_komputer_case_study?.feature_4_title || "Human Resources & Finance",
        items: [
          dict?.haen_komputer_case_study?.feature_4_item_1 || "Attendance (Absensi): Employee check-in/out and attendance tracking",
          dict?.haen_komputer_case_study?.feature_4_item_2 || "Payroll (Gaji Karyawan): Salary calculation and management",
          dict?.haen_komputer_case_study?.feature_4_item_3 || "Leave Management: Automated reporting and approval flow for employee leave requests",
          dict?.haen_komputer_case_study?.feature_4_item_4 || "Accounting Integration: Chart of accounts (Kode Akun) and transaction mapping for financial transparency",
        ],
      },
      {
        title: dict?.haen_komputer_case_study?.feature_5_title || "System Integrity & Support",
        items: [
          dict?.haen_komputer_case_study?.feature_5_item_1 || "Validation Logs: System for tracking and resolving operational discrepancies",
          dict?.haen_komputer_case_study?.feature_5_item_2 || "Role-Based Access Control (RBAC): Specific restrictions (e.g., restricting Validation Log resolution to Manager roles)",
          dict?.haen_komputer_case_study?.feature_5_item_3 || "RMA (Return Merchandise Authorization): Handling product returns and warranty claims",
          dict?.haen_komputer_case_study?.feature_5_item_4 || "Notification System: Real-time alerts for critical system events",
        ],
      },
      {
        title: dict?.haen_komputer_case_study?.feature_6_title || "Database Optimization",
        items: [
          dict?.haen_komputer_case_study?.feature_6_item_1 || "Seeder Cleanup: Streamlined database initialization by retaining only essential master data seeders (Karyawan and Kode Akun)",
        ],
      },
    ],
    devTimeline: [
      {
        title: dict?.haen_komputer_case_study?.timeline_1_title || "Discovery Phase",
        description: dict?.haen_komputer_case_study?.timeline_1_desc || "Stakeholder Requirements: We identified the need for a unified system that bridges the gap between retail operations (POS), inventory management, and backend accounting. Problem Identification: We pinpointed critical pain points such as inventory leakage, lack of historical data integrity in purchasing, and the need for a granular approval system. Scope Definition: We defined the core modules: Purchasing (Procurement), Sales (POS/Trade-in), Inventory (Warehousing), HR (Payroll/Attendance), and Accounting (COA/Transactions). Tech Stack Selection: Chose the TALL Stack (Tailwind CSS, Alpine.js, Laravel, Livewire) with FilamentPHP to ensure rapid development without sacrificing a premium, custom-feel experience.",
        duration: "2 weeks",
      },
      {
        title: dict?.haen_komputer_case_study?.timeline_2_title || "UI/UX Design",
        description: dict?.haen_komputer_case_study?.timeline_2_desc || "Information Architecture: Organized complex business data into logical Resources and Relation Managers to reduce cognitive load for users. Admin-First Experience: Leveraged Filament's design system to provide a clean, consistent interface. We customized forms for complex actions like Tukar Tambah (Trade-in) to guide users through multi-step processes. Aesthetic Polish: Implemented a modern, dark-mode friendly UI with high-contrast elements for readability in high-speed retail environments (POS). Responsiveness: Designed the layout to be fully responsive, ensuring managers can view reports and approve logs from mobile devices while staff use tablets or desktops.",
        duration: "3 weeks",
      },
      {
        title: dict?.haen_komputer_case_study?.timeline_3_title || "Development",
        description: dict?.haen_komputer_case_study?.timeline_3_desc || "Backend Architecture: Built on Laravel 11, utilizing Service Classes and Action patterns to keep the business logic (like batch inventory calculation) decoupled from the UI. Feature Implementation: Immutable History — Developed the edit lock logic to freeze historical POs, ensuring financial records cannot be altered retroactively. Complex Relations — Managed deep relationships between Products, Brands, and Inventory across multiple warehouses. Security & RBAC: Implemented strict Role-Based Access Control using Laravel Policies, specifically isolating sensitive operations like Validation Log resolution to Manager roles. Database Design: Optimized MySQL schemas with proper indexing to handle large datasets in Sales and Purchasing reports.",
        duration: "8 weeks",
      },
      {
        title: dict?.haen_komputer_case_study?.timeline_4_title || "Testing",
        description: dict?.haen_komputer_case_study?.timeline_4_desc || "Functional Testing: Conducted end-to-end testing of the Order-to-Stock flow, verifying that purchasing an item correctly updates warehouse inventory and accounting ledgers. Integrity Verification: Used the Validation Log system as a built-in testing tool to catch and log operational anomalies during the beta phase. User Acceptance Testing (UAT): Simulating real-world retail scenarios, such as processing a sales return or a stock opname, to ensure the UI behaves as expected under pressure. Role Validation: Rigorously tested permission sets to ensure Staff users cannot bypass security constraints or view sensitive payroll data.",
        duration: "3 weeks",
      },
      {
        title: dict?.haen_komputer_case_study?.timeline_5_title || "Deployment",
        description: dict?.haen_komputer_case_study?.timeline_5_desc || "Containerization: Utilized Podman/Docker to create a reproducible environment, ensuring the it works on my machine consistency across development and production. Environment Orchestration: Managed configurations via secure .env structures and Laravel's built-in caching mechanisms (Config/Route/View) for production performance. Migration Strategy: Developed a streamlined deployment script that handles database migrations and seeds essential master data (like Account Codes) while keeping the production database clean. CI/CD Ready: Structured the codebase for automated deployment pipelines, allowing for zero-downtime updates as the project evolves.",
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
      { label: dict?.haen_komputer_case_study?.results_efficiency || "Efficiency Gain", value: "40", suffix: "%" },
      { label: dict?.haen_komputer_case_study?.results_paper || "Paper Reduction", value: dict?.haen_komputer_case_study?.results_paper_val || "Significant", suffix: "" },
      { label: dict?.haen_komputer_case_study?.results_accuracy || "Data Accuracy", value: dict?.haen_komputer_case_study?.results_accuracy_val || "Real-time", suffix: "" },
      { label: dict?.haen_komputer_case_study?.results_report || "Report Accuracy", value: "45", suffix: dict?.haen_komputer_case_study?.results_report_suffix || "% increase" },
    ],
    testimonial: {
      quote: dict?.haen_komputer_case_study?.testimonial_quote || "Before Haen Komputer's system, our closing process was a nightmare. We relied on a massive Excel sheet that would crash half the time, and we often found 'invisible' losses because someone forgot to update a formula or a stock count. Moving to this system changed everything. The biggest win for us is the Batch and Serial Number tracking. Now, if a customer comes in for a warranty claim, we can find the exact purchase date and SN in seconds. No more digging through old receipts or Excel tabs. It has saved us at least 15 hours of manual admin work every week!",
      name: dict?.haen_komputer_case_study?.testimonial_name || "Operations Manager",
      role: dict?.haen_komputer_case_study?.testimonial_role || "Operations Lead",
      company: dict?.haen_komputer_case_study?.testimonial_company || "Haen Komputer",
    },
  },
];
