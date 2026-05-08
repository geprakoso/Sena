"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_PROJECTS } from "@/app/data/content";
import type { PortfolioProject } from "@/app/types";

const ALL_TAGS = ["All", ...Array.from(new Set(PORTFOLIO_PROJECTS.map((p) => p.tag)))];

const TAG_GRADIENTS: Record<string, string> = {
  Retail: "linear-gradient(135deg, #0e4a3a 0%, #1a6a50 100%)",
  Healthcare: "linear-gradient(135deg, #0e3a4a 0%, #0a5060 100%)",
  SaaS: "linear-gradient(135deg, #1a2a3a 0%, #2a3a50 100%)",
  "E-Commerce": "linear-gradient(135deg, #1a3a2a 0%, #0e5a3a 100%)",
  Logistics: "linear-gradient(135deg, #3a2a1a 0%, #5a3a0e 100%)",
  EdTech: "linear-gradient(135deg, #1a2a3a 0%, #0e4a5a 100%)",
};

export default function PortfolioFilter() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter((p) => p.tag === activeTag),
    [activeTag]
  );

  return (
    <>
      {/* Filter pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.625rem",
          justifyContent: "center",
          marginBottom: "3.5rem",
        }}
      >
        {ALL_TAGS.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              aria-pressed={isActive}
              style={{
                padding: "0.4375rem 1.125rem",
                borderRadius: "999px",
                border: isActive
                  ? "1px solid var(--color-accent)"
                  : "1px solid var(--color-border)",
                background: isActive
                  ? "rgba(255,107,74,0.15)"
                  : "rgba(255,255,255,0.04)",
                color: isActive
                  ? "var(--color-accent-light)"
                  : "var(--color-text-secondary)",
                fontSize: "0.8125rem",
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
              className="filter-pill"
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Single-column list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
        className="portfolio-list"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <style>{`
        .filter-pill:hover {
          border-color: rgba(255,107,74,0.5) !important;
          color: var(--color-text-primary) !important;
          background: rgba(255,107,74,0.08) !important;
        }
        @media (max-width: 640px) {
          .portfolio-card-inner { flex-direction: column !important; }
          .portfolio-card-image { width: 100% !important; height: 200px !important; border-radius: 0.875rem 0.875rem 0 0 !important; }
        }
      `}</style>
    </>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        border: "1px solid var(--color-border)",
        background: "var(--color-bg-card)",
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
      className="portfolio-card"
    >
      {/* ── Horizontal inner layout ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: "240px",
        }}
        className="portfolio-card-inner"
      >
        {/* Left: Featured image panel */}
        <div
          style={{
            width: "500px",
            flexShrink: 0,
            background: TAG_GRADIENTS[project.tag] ?? TAG_GRADIENTS.FinTech,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0.875rem 0.875rem 0.875rem 0.875rem",
          }}
          className="portfolio-card-image"
        >
          {project.featuredImage ? (
            <Image
              src={project.featuredImage}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="500px"
            />
          ) : (
            <ProjectIllustration id={project.id} />
          )}
          {/* Glow orb */}
          <div
            style={{
              position: "absolute",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,107,74,0.22) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Right: Content */}
        <div
          style={{
            flex: 1,
            padding: "2rem 2rem 1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            minWidth: 0,
          }}
        >
          {/* Meta row: tag + year */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                padding: "0.2rem 0.625rem",
                background: "rgba(255,107,74,0.1)",
                border: "1px solid rgba(255,107,74,0.25)",
                borderRadius: "999px",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "var(--color-accent-light)",
                textTransform: "uppercase",
              }}
            >
              {project.tag}
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-muted)",
                fontWeight: 500,
              }}
            >
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              margin: 0,
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              margin: 0,
              flex: 1,
            }}
          >
            {project.description}
          </p>

          {/* Outcome metric */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4375rem 0.875rem",
              background: "rgba(52,211,153,0.08)",
              border: "1px solid rgba(52,211,153,0.2)",
              borderRadius: "0.5rem",
              alignSelf: "flex-start",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path
                d="M2 9.5L5.5 6l2.5 2.5L12 3.5"
                stroke="#34D399"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#34D399" }}>
              {project.outcome}
            </span>
          </div>

          {/* View case study link */}
          <Link
            href={project.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-accent-light)",
              textDecoration: "none",
              transition: "gap 0.2s",
              alignSelf: "flex-start",
            }}
            className="portfolio-card-link"
            aria-label={`View case study: ${project.title}`}
          >
            View case study
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path
                d="M2 6.5h9M7 2.5l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        .portfolio-card:hover {
          border-color: rgba(255,107,74,0.35) !important;
          box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,107,74,0.1) !important;
        }
        .portfolio-card-link:hover { gap: 0.6rem !important; }
      `}</style>
    </article>
  );
}

/** Inline SVG illustrations per project ID — no placeholder images needed */
function ProjectIllustration({ id }: { id: string }) {
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
