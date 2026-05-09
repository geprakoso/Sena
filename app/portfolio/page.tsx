import type { Metadata } from "next";
import Navbar from "@/app/components/layout/Navbar";
import Link from "next/link";
import Footer from "@/app/components/layout/Footer";
import PortfolioFilter from "./PortfolioFilter";

export const metadata: Metadata = {
  title: "Portfolio — SolveCore",
  description:
    "Explore SolveCore's portfolio — including our custom ERP system for Haen Komputer, delivering measurable business efficiency.",
  openGraph: {
    title: "Portfolio — SolveCore",
    description:
      "Real problems. Real impact. Browse our portfolio of custom software projects focusing on operational efficiency.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — SolveCore",
    description: "Real problems. Real impact. Browse our portfolio of software projects.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          id="portfolio-hero"
          aria-labelledby="portfolio-heading"
          className="hero-gradient"
          style={{
            paddingTop: "calc(68px + 5rem)",
            paddingBottom: "5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background orbs */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div
              style={{
                position: "absolute",
                width: "520px",
                height: "520px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,107,74,0.13) 0%, transparent 65%)",
                top: "-10%",
                right: "0%",
                filter: "blur(48px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(38,205,235,0.1) 0%, transparent 70%)",
                bottom: "0%",
                left: "-5%",
                filter: "blur(52px)",
              }}
            />
          </div>

          <div
            className="container-base"
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.875rem",
                border: "1px solid rgba(255,107,74,0.35)",
                borderRadius: "999px",
                marginBottom: "1.75rem",
                background: "rgba(255,107,74,0.08)",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                  animation: "pulse-dot 2s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "var(--color-accent-light)",
                  textTransform: "uppercase",
                }}
              >
                Our Work
              </span>
            </div>

            {/* Heading */}
            <h1
              id="portfolio-heading"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--color-text-primary)",
                margin: "0 0 1.25rem",
                maxWidth: "700px",
              }}
            >
              Real problems.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-accent-light) 0%, #FB7185 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Real impact.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                maxWidth: "540px",
                margin: "0 0 0",
              }}
            >
              Every project here started with a real business challenge. Explore how we turned those challenges into measurable outcomes.
            </p>
          </div>
        </section>

        {/* Subtle divider */}
        <div
          aria-hidden="true"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,107,74,0.3), transparent)",
            maxWidth: "640px",
            margin: "0 auto",
          }}
        />

        {/* ── Projects ─────────────────────────────────────── */}
        <section
          id="portfolio-projects"
          aria-label="Portfolio projects"
          style={{
            background: "var(--color-bg-primary)",
            padding: "4.5rem 0 var(--section-padding-y)",
          }}
        >
          <div className="container-base">
            {/* Client component handles filter + cards */}
            <PortfolioFilter />
          </div>
        </section>

        {/* ── CTA strip ────────────────────────────────────── */}
        <section
          aria-label="Start a project"
          style={{
            background: "var(--color-bg-secondary)",
            borderTop: "1px solid var(--color-border)",
            padding: "5rem 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,107,74,0.1) 0%, transparent 65%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              filter: "blur(48px)",
              pointerEvents: "none",
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
              style={{
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--color-text-primary)",
                margin: "0 0 1rem",
              }}
            >
              Want results like these?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                maxWidth: "480px",
                margin: "0 0 2.25rem",
              }}
            >
              Tell us about your challenge. We&apos;ll map out a clear path to a solution that delivers real impact.
            </p>
            <Link
              href="/contact"
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
                fontFamily: "inherit",
              }}
              className="portfolio-cta-btn"
            >
              Start a Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <style>{`
            .portfolio-cta-btn:hover {
              background: var(--color-accent-hover) !important;
              transform: translateY(-2px);
              box-shadow: 0 0 44px var(--color-accent-glow) !important;
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
