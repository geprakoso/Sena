import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/app/data/content";
import { ProjectCard } from "@/app/components/case-study/ProjectCard";

export default function CaseStudiesSection() {
  // Display only top 3 or specific featured projects on homepage if needed, 
  // but here we follow the request to display the list.
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      style={{
        background: "#ffffff",
        padding: "var(--section-padding-y) 0",
        position: "relative",
      }}
    >
      <div className="container-base">
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                textTransform: "uppercase",
                margin: "0 0 1rem",
              }}
            >
              Featured Work
            </p>
            <h2
              id="case-studies-heading"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                color: "var(--color-text-dark)",
                margin: 0,
              }}
            >
              Real problems.<br />
              <span style={{ 
                color: "var(--color-accent)"
              }}>
                Real impact.
              </span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.9375rem",
              fontWeight: 700,
              color: "var(--color-text-dark)",
              textDecoration: "none",
              transition: "all 0.2s",
              padding: "0.75rem 1.5rem",
              background: "rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "0.75rem",
            }}
            className="view-all-link"
          >
            View all cases
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Vertical List Layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3.5rem",
          }}
          className="case-list"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} lightMode={true} />
          ))}
        </div>
        
        {/* Mobile View All button (visible only on small screens) */}
        <div style={{ marginTop: '3rem', textAlign: 'center', display: 'none' }} className="mobile-view-all">
           <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.9375rem",
              fontWeight: 700,
              color: "var(--color-text-dark)",
              textDecoration: "none",
              padding: "0.875rem 2rem",
              background: "rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "0.75rem",
              width: '100%',
              justifyContent: 'center'
            }}
          >
            View all cases
          </Link>
        </div>
      </div>

      <style>{`
        .view-all-link:hover { 
          background: rgba(0,0,0,0.08) !important;
          border-color: rgba(0,0,0,0.2) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          .view-all-link { display: none !important; }
          .mobile-view-all { display: block !important; }
        }
      `}</style>
    </section>
  );
}
