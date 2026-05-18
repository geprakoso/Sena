"use client";

import Link from "next/link";
import Image from "next/image";
import type { PortfolioProject } from "@/types";

export const TAG_GRADIENTS: Record<string, string> = {
  Retail: "linear-gradient(135deg, #0e4a3a 0%, #1a6a50 100%)",
  Healthcare: "linear-gradient(135deg, #0e3a4a 0%, #0a5060 100%)",
  SaaS: "linear-gradient(135deg, #1a2a3a 0%, #2a3a50 100%)",
  "E-Commerce": "linear-gradient(135deg, #1a3a2a 0%, #0e5a3a 100%)",
  Logistics: "linear-gradient(135deg, #3a2a1a 0%, #5a3a0e 100%)",
  EdTech: "linear-gradient(135deg, #1a2a3a 0%, #0e4a5a 100%)",
};

export function ProjectCard({ project, lightMode = false, dict = {} }: { project: PortfolioProject, lightMode?: boolean, dict?: Record<string, any> }) {
  return (
    <article
      style={{
        borderRadius: "1.25rem",
        overflow: "hidden",
        border: lightMode ? "1px solid rgba(0,0,0,0.06)" : "1px solid var(--color-border)",
        background: lightMode ? "#ffffff" : "var(--color-bg-card)",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
      }}
      className={`portfolio-card ${lightMode ? 'light' : ''}`}
    >
      {/* ── Horizontal inner layout ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: "260px",
        }}
        className="portfolio-card-inner"
      >
        {/* Left: Featured image panel */}
        <div
          style={{
            width: "480px",
            flexShrink: 0,
            background: TAG_GRADIENTS[project.tag] ?? TAG_GRADIENTS.Retail,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="portfolio-card-image"
        >
          {project.featuredImage ? (
            <Image
              src={project.featuredImage}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 480px"
              priority={project.id === 'haen-komputer'}
            />
          ) : (
            <ProjectIllustration id={project.id} />
          )}
        </div>

        {/* Right: Content */}
        <div
          style={{
            flex: 1,
            padding: "2.5rem 2.5rem 2.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minWidth: 0,
            justifyContent: "center",
          }}
        >
          {/* Meta row: tag + year */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
            <span
              style={{
                padding: "0.25rem 0.75rem",
                background: "rgba(255,107,74,0.1)",
                border: "1px solid rgba(255,107,74,0.25)",
                borderRadius: "999px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "var(--color-accent)",
                textTransform: "uppercase",
              }}
            >
              {project.tag}
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                color: lightMode ? "var(--color-text-dark-secondary)" : "var(--color-text-muted)",
                fontWeight: 500,
              }}
            >
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: lightMode ? "var(--color-text-dark)" : "var(--color-text-primary)",
              margin: 0,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: "0.9375rem",
              color: lightMode ? "rgba(15, 23, 42, 0.7)" : "var(--color-text-secondary)",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "520px",
            }}
          >
            {project.description}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
            {/* Outcome metric */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 0.875rem",
                background: lightMode ? "rgba(16, 185, 129, 0.08)" : "rgba(52,211,153,0.08)",
                border: lightMode ? "1px solid rgba(16, 185, 129, 0.15)" : "1px solid rgba(52,211,153,0.2)",
                borderRadius: "0.625rem",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2 10.5l4-4 3 3 5-5.5"
                  stroke={lightMode ? "#059669" : "#34D399"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: lightMode ? "#059669" : "#34D399" }}>
                {project.outcome}
              </span>
            </div>

            {/* View case study link */}
            <Link
              href={project.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: "var(--color-accent)",
                textDecoration: "none",
                transition: "gap 0.2s, color 0.2s",
              }}
              className="portfolio-card-link"
              aria-label={`View case study: ${project.title}`}
            >
              {dict?.case_studies_section?.view_case_study || "View Case Study"}
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path
                  d="M3 7.5h9M8.5 3l4.5 4.5-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .portfolio-card:hover {
          border-color: rgba(255,107,74,0.4) !important;
          box-shadow: ${lightMode ? '0 20px 40px rgba(0,0,0,0.08)' : '0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,107,74,0.15)'} !important;
          transform: translateY(-4px);
        }
        .portfolio-card-link:hover { 
          gap: 0.7rem !important; 
          opacity: 0.8;
        }
        @media (max-width: 900px) {
          .portfolio-card-inner { flex-direction: column !important; }
          .portfolio-card-image { width: 100% !important; height: 260px !important; }
        }
      `}</style>
    </article>
  );
}

export function ProjectIllustration({ id }: { id: string }) {
  if (id === "haen-komputer") {
    return (
      <svg width="130" height="88" viewBox="0 0 130 88" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="44" height="36" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <rect x="10" y="16" width="32" height="5" rx="2" fill="rgba(52,211,153,0.4)" />
        <rect x="10" y="25" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="10" y="31" width="26" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="54" y="8" width="44" height="36" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <rect x="60" y="16" width="32" height="5" rx="2" fill="rgba(255,107,74,0.4)" />
        <rect x="60" y="25" width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="60" y="31" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="4" y="52" width="94" height="28" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="12" y="59" width="36" height="4" rx="2" fill="rgba(255,255,255,0.18)" />
        <rect x="12" y="67" width="50" height="3" rx="1.5" fill="rgba(52,211,153,0.3)" />
        <rect x="12" y="73" width="40" height="3" rx="1.5" fill="rgba(255,107,74,0.25)" />
        <rect x="104" y="8" width="22" height="72" rx="4" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.2)" />
        <rect x="108" y="16" width="14" height="3" rx="1.5" fill="rgba(52,211,153,0.35)" />
        <rect x="108" y="24" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="108" y="32" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="108" y="40" width="14" height="3" rx="1.5" fill="rgba(52,211,153,0.25)" />
        <rect x="108" y="48" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="108" y="56" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="108" y="64" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
      </svg>
    );
  }
  if (id === "healthcare") {
    return (
      <svg width="130" height="88" viewBox="0 0 130 88" fill="none" aria-hidden="true">
        <circle cx="65" cy="44" r="30" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
        <path d="M65 28V60M49 44H81" stroke="#22D3EE" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="65" cy="44" r="20" fill="none" stroke="rgba(34,211,238,0.18)" />
        <circle cx="65" cy="44" r="10" fill="none" stroke="rgba(34,211,238,0.12)" />
        <circle cx="96" cy="20" r="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.09)" />
        <path d="M96 14V26M90 20H102" stroke="#FB7185" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "saas") {
    return (
      <svg width="130" height="88" viewBox="0 0 130 88" fill="none" aria-hidden="true">
        <circle cx="65" cy="44" r="24" fill="rgba(251,113,133,0.1)" stroke="rgba(251,113,133,0.18)" />
        <circle cx="65" cy="44" r="15" fill="rgba(251,113,133,0.08)" stroke="rgba(251,113,133,0.12)" />
        <circle cx="65" cy="44" r="7" fill="rgba(251,113,133,0.28)" />
        <ellipse cx="65" cy="44" rx="24" ry="9" fill="none" stroke="rgba(251,113,133,0.14)" strokeWidth="1" />
        <circle cx="89" cy="44" r="3.5" fill="#FB7185" />
        <circle cx="41" cy="44" r="2.5" fill="rgba(251,113,133,0.45)" />
        <circle cx="32" cy="22" r="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.09)" />
        <circle cx="98" cy="64" r="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.09)" />
        <line x1="39" y1="26" x2="52" y2="36" stroke="rgba(251,113,133,0.28)" strokeWidth="1" />
        <line x1="78" y1="52" x2="91" y2="61" stroke="rgba(251,113,133,0.28)" strokeWidth="1" />
      </svg>
    );
  }
  if (id === "ecommerce") {
    return (
      <svg width="130" height="88" viewBox="0 0 130 88" fill="none" aria-hidden="true">
        <rect x="20" y="20" width="90" height="55" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
        <rect x="28" y="30" width="36" height="26" rx="4" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.2)" />
        <rect x="70" y="30" width="34" height="8" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="70" y="42" width="26" height="6" rx="2" fill="rgba(255,255,255,0.06)" />
        <rect x="70" y="52" width="34" height="8" rx="3" fill="rgba(52,211,153,0.18)" />
        <circle cx="46" cy="43" r="10" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.25)" />
        <path d="M40 43l4 4 8-8" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (id === "logistics") {
    return (
      <svg width="130" height="88" viewBox="0 0 130 88" fill="none" aria-hidden="true">
        <rect x="10" y="30" width="110" height="36" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <circle cx="32" cy="66" r="10" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.3)" />
        <circle cx="98" cy="66" r="10" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.3)" />
        <circle cx="32" cy="66" r="4" fill="#fbbf24" />
        <circle cx="98" cy="66" r="4" fill="#fbbf24" />
        <rect x="18" y="36" width="60" height="22" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="82" y="42" width="28" height="10" rx="2" fill="rgba(255,255,255,0.06)" />
        <polyline points="20,20 45,12 70,18 100,10 118,16" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3" />
      </svg>
    );
  }
  // edtech default
  return (
    <svg width="130" height="88" viewBox="0 0 130 88" fill="none" aria-hidden="true">
      <rect x="18" y="16" width="94" height="60" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="26" y="26" width="78" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="26" y="36" width="60" height="3" rx="1.5" fill="rgba(251,113,133,0.4)" />
      <rect x="26" y="44" width="70" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="26" y="52" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <circle cx="100" cy="56" r="16" fill="rgba(251,113,133,0.1)" stroke="rgba(251,113,133,0.2)" />
      <path d="M94 56h12M100 50v12" stroke="#FB7185" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
