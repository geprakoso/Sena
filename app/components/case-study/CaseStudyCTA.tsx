import Link from "next/link";

export default function CaseStudyCTA() {
  return (
    <section
      aria-labelledby="case-cta-heading"
      style={{
        background: "var(--color-bg-primary)",
        padding: "var(--section-padding-y) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79,110,247,0.14) 0%, transparent 65%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(48px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,55,200,0.10) 0%, transparent 70%)",
            top: "20%",
            right: "10%",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Top border line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "560px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(79,110,247,0.4), transparent)",
        }}
      />

      <div
        className="container-base"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2
          id="case-cta-heading"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-primary)",
            margin: "0 0 1.25rem",
            maxWidth: "680px",
          }}
        >
          Ready to build something{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--color-accent-light) 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            that matters?
          </span>
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
            maxWidth: "520px",
            margin: "0 0 2.75rem",
          }}
        >
          Tell us about your challenge. We&apos;ll bring clarity, the right technology, and a team that genuinely cares about your outcome.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="mailto:hello@solvecore.io"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              background: "var(--color-accent)",
              color: "#fff",
              borderRadius: "0.625rem",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
              boxShadow: "0 0 32px var(--color-accent-glow)",
              transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
            }}
            className="case-cta-primary"
          >
            Start a Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              background: "transparent",
              color: "var(--color-text-primary)",
              borderRadius: "0.625rem",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textDecoration: "none",
              border: "1.5px solid var(--color-border)",
              transition: "border-color 0.2s, background 0.2s",
            }}
            className="case-cta-secondary"
          >
            Book Consultation
          </Link>
        </div>
      </div>

      <style>{`
        .case-cta-primary:hover {
          background: var(--color-accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 0 44px var(--color-accent-glow) !important;
        }
        .case-cta-secondary:hover {
          border-color: rgba(255,255,255,0.2) !important;
          background: rgba(255,255,255,0.04) !important;
        }
      `}</style>
    </section>
  );
}
