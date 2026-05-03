import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      style={{
        background: "var(--color-bg-primary)",
        padding: "var(--section-padding-y) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs — mirrors the Hero pattern */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,110,247,0.14) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(48px)",
        }} />
        <div style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,55,200,0.10) 0%, transparent 70%)",
          top: "20%",
          right: "10%",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,110,247,0.08) 0%, transparent 70%)",
          bottom: "15%",
          left: "8%",
          filter: "blur(36px)",
        }} />
      </div>

      {/* Subtle top border line */}
      <div aria-hidden="true" style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "560px",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(79,110,247,0.4), transparent)",
      }} />

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
        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.375rem 0.875rem",
          border: "1px solid rgba(79,110,247,0.3)",
          borderRadius: "999px",
          background: "rgba(79,110,247,0.07)",
          marginBottom: "1.75rem",
        }}>
          <span style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "var(--color-accent)",
            animation: "pulse-dot 2s ease-in-out infinite",
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--color-accent-light)",
            textTransform: "uppercase",
          }}>
            Let&apos;s Work Together
          </span>
        </div>

        {/* Headline */}
        <h2
          id="cta-heading"
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
          <span style={{
            background: "linear-gradient(135deg, var(--color-accent-light) 0%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            that matters?
          </span>
        </h2>

        {/* Subtext */}
        <p style={{
          fontSize: "1.0625rem",
          color: "var(--color-text-secondary)",
          lineHeight: 1.7,
          maxWidth: "520px",
          margin: "0 0 2.75rem",
        }}>
          Tell us about your challenge. We&apos;ll bring clarity, the right technology, and a team that genuinely cares about your outcome.
        </p>

        {/* Action buttons */}
        <div style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "3.5rem",
        }}>
          <Link
            href="mailto:hello@haensoftware.io"
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
            className="cta-primary-btn"
          >
            Start a Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="#case-studies"
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
            className="cta-secondary-btn"
          >
            View Our Work
          </Link>
        </div>

        {/* Trust signals */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {TRUST_SIGNALS.map((signal) => (
            <div key={signal.label} style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <div style={{
                width: "32px",
                height: "32px",
                borderRadius: "0.5rem",
                background: "rgba(79,110,247,0.1)",
                border: "1px solid rgba(79,110,247,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <TrustIcon name={signal.icon} />
              </div>
              <span style={{
                fontSize: "0.8125rem",
                color: "var(--color-text-muted)",
                fontWeight: 500,
              }}>
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cta-primary-btn:hover {
          background: var(--color-accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 0 44px var(--color-accent-glow) !important;
        }
        .cta-secondary-btn:hover {
          border-color: rgba(255,255,255,0.2) !important;
          background: rgba(255,255,255,0.04) !important;
        }
      `}</style>
    </section>
  );
}

const TRUST_SIGNALS = [
  { icon: "shield", label: "No long-term lock-in" },
  { icon: "clock", label: "Response within 24h" },
  { icon: "star", label: "Trusted by 30+ companies" },
];

function TrustIcon({ name }: { name: string }) {
  const stroke = "var(--color-accent-light)";
  const sw = "1.5";
  const s = 15;

  if (name === "shield") return (
    <svg width={s} height={s} viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M7.5 1.5L13 4v4c0 3-2.5 5-5.5 5.5C4.5 13 2 11 2 8V4l5.5-2.5z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
      <path d="M5 7.5l1.5 1.5L10 5.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  if (name === "clock") return (
    <svg width={s} height={s} viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="5.5" stroke={stroke} strokeWidth={sw} />
      <path d="M7.5 4.5V7.5L9.5 9" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <svg width={s} height={s} viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M7.5 1l1.7 3.5L13 5.2l-2.75 2.7.65 3.8L7.5 10l-3.4 1.7.65-3.8L2 5.2l3.8-.7L7.5 1z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
    </svg>
  );
}
