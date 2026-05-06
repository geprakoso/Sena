import type { CaseStudyDetail } from "@/app/types";

export default function ResultsSection({ study }: { study: CaseStudyDetail }) {
  return (
    <section
      aria-labelledby="results-heading"
      style={{
        background: "var(--color-bg-primary)",
        padding: "var(--section-padding-y) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79,110,247,0.12) 0%, transparent 65%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(48px)",
          }}
        />
      </div>

      <div className="container-base" style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "var(--color-accent-light)",
            textTransform: "uppercase",
            margin: "0 0 0.75rem",
          }}
        >
          Results
        </p>
        <h2
          id="results-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-primary)",
            margin: "0 0 4rem",
          }}
        >
          Measurable impact.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
          className="results-grid"
        >
          {study.results.map((result, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1rem",
                padding: "2rem 1.5rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "140px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              className="result-card"
            >
              <div
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: "var(--color-text-primary)",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.03em",
                }}
              >
                {result.prefix}
                {result.value}
                {result.suffix}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-text-secondary)",
                  letterSpacing: "0.02em",
                }}
              >
                {result.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .results-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .results-grid { grid-template-columns: 1fr !important; }
        }
        .result-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.25);
        }
      `}</style>
    </section>
  );
}
