import type { ReactNode } from "react";
import { TRUSTED_COMPANIES } from "@/app/data/content";

export default function TrustedBy() {
  return (
    <section
      aria-label="Trusted by innovative companies"
      style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "2.5rem 0",
      }}
    >
      <div className="container-base">
        <p style={{
          textAlign: "center",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: "var(--color-text-muted)",
          textTransform: "uppercase",
          margin: "0 0 1.75rem",
        }}>
          Trusted by Innovative Companies
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem 2.5rem",
        }}>
          {TRUSTED_COMPANIES.map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                border: "1px solid var(--color-border)",
                borderRadius: "0.5rem",
                background: "var(--color-bg-card)",
                transition: "border-color 0.2s, background 0.2s",
              }}
              className="company-pill"
            >
              <CompanyIcon name={name} />
              <span style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "-0.01em",
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .company-pill:hover {
          border-color: rgba(255,255,255,0.15) !important;
          background: var(--color-bg-card-hover) !important;
        }
      `}</style>
    </section>
  );
}

/** Simple geometric icon per company to avoid placeholder images */
function CompanyIcon({ name }: { name: string }) {
  const icons: Record<string, ReactNode> = {
    Finova: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 12L6 8L8 10L12 4L14 6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    zenith: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
        <path d="M5 11L11 5M5 5h6M5 11h6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    Payliance: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
      </svg>
    ),
    Healthify: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 13C8 13 2 9.5 2 5.5A3.5 3.5 0 018 3.5 3.5 3.5 0 0114 5.5C14 9.5 8 13 8 13Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
      </svg>
    ),
    DataPeak: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 12L6 7L9 10L13 4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="13" cy="4" r="1.5" fill="rgba(255,255,255,0.4)" />
      </svg>
    ),
    Taskora: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
        <path d="M5.5 8L7 9.5L10.5 6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };
  return <>{icons[name] ?? null}</>;
}
