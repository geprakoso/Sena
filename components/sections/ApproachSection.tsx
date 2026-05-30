import type { ReactNode } from "react";
import { getApproachSteps } from "@/lib/content";
import type { ApproachStep } from "@/types";

export default function ApproachSection({ dict = {} }: { dict?: Record<string, any> }) {
  return (
    <section
      id="about"
      aria-labelledby="approach-heading"
      style={{
        background: "var(--color-bg-light)",
        padding: "var(--section-padding-y) 0",
      }}
    >
      <div className="container-base approach-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
      }}>
        {/* Left: Copy */}
        <div>
          <p style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "var(--color-accent)",
            textTransform: "uppercase",
            margin: "0 0 0.75rem",
          }}>
            {dict?.approach_section?.our_approach || "Cara Kami Bekerja"}
          </p>
          <h2
            id="approach-heading"
            style={{
              fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--color-text-dark)",
              margin: 0,
            }}
          >
            {dict?.approach_section?.heading || "Proses kerja yang terstruktur untuk memastikan software yang dibangun benar-benar sesuai dengan kebutuhan bisnis Anda."}
          </h2>
        </div>

        {/* Right: Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.25rem",
        }}>
          {getApproachSteps(dict).map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>

      {/* Connector row (desktop visual) */}
      <div
        aria-hidden="true"
        style={{
          maxWidth: "var(--container-max)",
          marginInline: "auto",
          paddingInline: "2rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "0",
          marginTop: "-1rem",
        }}
        className="step-connector"
      />

      <style>{`
        @media (max-width: 768px) {
          .approach-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function StepCard({ step }: { step: ApproachStep }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1.5px solid var(--color-border-light)",
        borderRadius: "0.875rem",
        padding: "1.5rem",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.2s",
      }}
      className="step-card"
    >
      <div style={{
        width: "40px",
        height: "40px",
        borderRadius: "0.625rem",
        background: "rgba(255,107,74,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "0.875rem",
      }}>
        <StepIcon name={step.icon} />
      </div>
      <p style={{
        fontSize: "0.75rem",
        fontWeight: 700,
        color: "var(--color-accent)",
        margin: "0 0 0.25rem",
        letterSpacing: "0.02em",
      }}>
        {step.number}.
      </p>
      <h3 style={{
        fontSize: "0.9375rem",
        fontWeight: 700,
        color: "var(--color-text-dark)",
        margin: "0 0 0.4rem",
        letterSpacing: "-0.01em",
      }}>
        {step.label}
      </h3>
      <p style={{
        fontSize: "0.8125rem",
        color: "var(--color-text-dark-secondary)",
        lineHeight: 1.6,
        margin: 0,
      }}>
        {step.description}
      </p>

      <style>{`
        .step-card:hover {
          border-color: rgba(255,107,74,0.25) !important;
          box-shadow: 0 6px 24px rgba(255,107,74,0.08) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

function StepIcon({ name }: { name: string }) {
  const stroke = "var(--color-accent)";
  const sw = "1.6";
  const s = 18;

  const icons: Record<string, ReactNode> = {
    search: (
      <svg width={s} height={s} viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="5" stroke={stroke} strokeWidth={sw} />
        <path d="M12 12L16 16" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
      </svg>
    ),
    lightbulb: (
      <svg width={s} height={s} viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2a5 5 0 013.54 8.54L12 12H6l-.54-1.46A5 5 0 019 2z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        <path d="M6.5 14h5M7.5 16h3" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
      </svg>
    ),
    code2: (
      <svg width={s} height={s} viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M6 6L2 9L6 12M12 6L16 9L12 12M10 4L8 14" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    rocket: (
      <svg width={s} height={s} viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2C9 2 13 4 13 9L9 16L5 9C5 4 9 2 9 2Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        <circle cx="9" cy="9" r="1.5" fill={stroke} />
      </svg>
    ),
  };
  return <>{icons[name] ?? null}</>;
}
