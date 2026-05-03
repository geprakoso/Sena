import Link from "next/link";
import { CASE_STUDIES } from "@/app/data/content";
import type { CaseStudy } from "@/app/types";

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      style={{
        background: "#fff",
        padding: "var(--section-padding-y) 0",
      }}
    >
      <div className="container-base">
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--color-accent)",
                textTransform: "uppercase",
                margin: "0 0 0.75rem",
              }}
            >
              Case Studies
            </p>
            <h2
              id="case-studies-heading"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--color-text-dark)",
                margin: 0,
              }}
            >
              Real problems.<br />Real impact.
            </h2>
          </div>

          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-accent)",
              textDecoration: "none",
              transition: "gap 0.2s",
              paddingBottom: "0.5rem",
            }}
            className="view-all-link"
          >
            View all cases
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="case-grid"
        >
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .case-grid { grid-template-columns: 1fr !important; }
        }
        .view-all-link:hover { gap: 0.625rem !important; }
      `}</style>
    </section>
  );
}

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const gradients: Record<string, string> = {
    fintech: "linear-gradient(135deg, #1e2a5a 0%, #1a3a6a 100%)",
    healthcare: "linear-gradient(135deg, #1a3060 0%, #0e4a6a 100%)",
    saas: "linear-gradient(135deg, #2d1a5e 0%, #4a1a7a 100%)",
  };

  return (
    <article
      style={{
        borderRadius: "0.875rem",
        overflow: "hidden",
        border: "1.5px solid var(--color-border-light)",
        transition: "box-shadow 0.25s, transform 0.2s",
        background: "#fff",
      }}
      className="case-card"
    >
      {/* Illustration area */}
      <div
        style={{
          height: "140px",
          background: gradients[caseStudy.id] ?? gradients.fintech,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CaseIllustration id={caseStudy.id} />
        <div
          style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79,110,247,0.25) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontSize: "0.9375rem",
            fontWeight: 700,
            color: "var(--color-text-dark)",
            margin: "0 0 0.5rem",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          {caseStudy.title}
        </h3>
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-text-dark-secondary)",
            lineHeight: 1.6,
            margin: "0 0 1rem",
          }}
        >
          {caseStudy.description}
        </p>
        <Link
          href={caseStudy.href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "var(--color-accent)",
            textDecoration: "none",
            transition: "gap 0.2s",
          }}
          className="case-link"
          aria-label={`Read case study: ${caseStudy.title}`}
        >
          Read case study
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <style>{`
        .case-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.12) !important;
          transform: translateY(-4px);
        }
        .case-link:hover { gap: 0.6rem !important; }
      `}</style>
    </article>
  );
}

function CaseIllustration({ id }: { id: string }) {
  if (id === "fintech") {
    return (
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" aria-hidden="true">
        <rect x="10" y="15" width="50" height="55" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <rect x="16" y="22" width="38" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
        <rect x="16" y="32" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
        <rect x="16" y="38" width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
        <polyline points="65,65 75,55 85,60 95,45 105,50" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="105" cy="50" r="3" fill="#60a5fa" />
        <rect x="65" y="20" width="48" height="32" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
        <rect x="70" y="26" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
        <rect x="70" y="33" width="36" height="2" rx="1" fill="rgba(99,102,241,0.5)" />
        <rect x="70" y="38" width="28" height="2" rx="1" fill="rgba(99,102,241,0.3)" />
      </svg>
    );
  }
  if (id === "healthcare") {
    return (
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" aria-hidden="true">
        <circle cx="60" cy="38" r="28" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <path d="M60 24V52M46 38H74" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
        <circle cx="60" cy="38" r="18" fill="none" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
        <circle cx="60" cy="38" r="8" fill="none" stroke="rgba(96,165,250,0.15)" strokeWidth="1" />
        <circle cx="88" cy="18" r="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" />
        <path d="M88 13V23M83 18H93" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  // saas
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <circle cx="60" cy="38" r="22" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.2)" />
      <circle cx="60" cy="38" r="14" fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.15)" />
      <circle cx="60" cy="38" r="6" fill="rgba(167,139,250,0.3)" />
      <ellipse cx="60" cy="38" rx="22" ry="8" fill="none" stroke="rgba(167,139,250,0.15)" strokeWidth="1" />
      <circle cx="82" cy="38" r="3" fill="#a78bfa" />
      <circle cx="38" cy="38" r="2" fill="rgba(167,139,250,0.5)" />
      <circle cx="30" cy="20" r="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" />
      <circle cx="90" cy="56" r="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" />
      <line x1="36" y1="23" x2="48" y2="32" stroke="rgba(167,139,250,0.3)" strokeWidth="1" />
      <line x1="72" y1="44" x2="84" y2="53" stroke="rgba(167,139,250,0.3)" strokeWidth="1" />
    </svg>
  );
}
