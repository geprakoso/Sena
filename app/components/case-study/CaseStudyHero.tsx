import Link from "next/link";
import type { CaseStudyDetail } from "@/app/types";

export default function CaseStudyHero({ study }: { study: CaseStudyDetail }) {
  return (
    <section
      aria-labelledby="case-study-title"
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
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79,110,247,0.14) 0%, transparent 65%)",
            top: "-10%",
            right: "-5%",
            filter: "blur(52px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,55,200,0.1) 0%, transparent 70%)",
            bottom: "-5%",
            left: "-8%",
            filter: "blur(48px)",
          }}
        />
      </div>

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
        {/* Back link */}
        <div style={{ marginBottom: "2rem", alignSelf: "flex-start" }}>
          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            className="case-back-link"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M8 2L3 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Portfolio
          </Link>
        </div>

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 0.875rem",
            border: "1px solid rgba(79,110,247,0.35)",
            borderRadius: "999px",
            marginBottom: "1.75rem",
            background: "rgba(79,110,247,0.08)",
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
            {study.tag}
          </span>
        </div>

        {/* Title */}
        <h1
          id="case-study-title"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-primary)",
            margin: "0 0 1.25rem",
            maxWidth: "800px",
          }}
        >
          {study.title}
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 0 2.5rem",
          }}
        >
          {study.description}
        </p>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "3.5rem",
          }}
        >
          <MetaPill label="Industry" value={study.industry} />
          <MetaPill label="Timeline" value={study.timeline} />
          <MetaPill label="Team Size" value={study.teamSize} />
          <MetaPill label="Year" value={study.year} />
        </div>

        {/* Featured image */}
        <div
          style={{
            width: "100%",
            maxWidth: "960px",
            opacity: 0,
            animation: "fadeInUp 0.8s ease-out 0.2s forwards",
          }}
        >
          <FeaturedImage type={study.architectureType} />
        </div>
      </div>

      <style>{`
        .case-back-link:hover {
          color: var(--color-text-primary) !important;
        }
      `}</style>
    </section>
  );
}

function MetaPill({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.25rem",
        padding: "0.75rem 1.25rem",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "0.75rem",
        minWidth: "120px",
      }}
    >
      <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em", color: "var(--color-text-muted)", textTransform: "uppercase" }}>
        {label}
      </span>
      <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-text-primary)" }}>
        {value}
      </span>
    </div>
  );
}

function FeaturedImage({ type }: { type: string }) {
  return (
    <div
      style={{
        background: "rgba(13, 21, 38, 0.85)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Window chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.875rem 1.25rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: "0.75rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
          {type === "microservices" && "Platform Overview"}
          {type === "data-platform" && "Data Dashboard"}
          {type === "cloud-scale" && "Infrastructure Monitor"}
          {type === "checkout-flow" && "Checkout Flow"}
          {type === "iot-dashboard" && "Fleet Command"}
          {type === "ai-platform" && "Learning Analytics"}
          {type === "tall-stack-erp" && "Management System"}
        </span>
      </div>

      <div style={{ padding: "1.5rem", minHeight: "320px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {type === "microservices" && <FinTechMockup />}
        {type === "data-platform" && <HealthcareMockup />}
        {type === "cloud-scale" && <SaaSMockup />}
        {type === "checkout-flow" && <EcommerceMockup />}
        {type === "iot-dashboard" && <LogisticsMockup />}
        {type === "ai-platform" && <EdTechMockup />}
        {type === "tall-stack-erp" && <HaenKomputerMockup />}
      </div>
    </div>
  );
}

/* ─── Industry Mockups ─────────────────────────────────────────────────── */

function FinTechMockup() {
  return (
    <svg width="100%" height="280" viewBox="0 0 800 280" fill="none" aria-hidden="true" style={{ maxWidth: "800px" }}>
      {/* Sidebar */}
      <rect x="0" y="0" width="160" height="280" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="16" y="16" width="80" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="16" y="36" width="120" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="52" width="120" height="6" rx="3" fill="rgba(79,110,247,0.25)" />
      <rect x="16" y="68" width="100" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="84" width="110" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      {/* Main */}
      <rect x="176" y="0" width="310" height="130" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="192" y="16" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="192" y="36" width="60" height="24" rx="4" fill="rgba(79,110,247,0.15)" />
      <rect x="264" y="36" width="60" height="24" rx="4" fill="rgba(16,185,129,0.15)" />
      <rect x="336" y="36" width="60" height="24" rx="4" fill="rgba(167,139,250,0.15)" />
      <polyline points="192,110 232,90 272,100 312,70 352,80 392,60 432,70 472,50" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="176" y="150" width="310" height="130" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="192" y="166" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="192" y="186" width="278" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="192" y="200" width="250" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="192" y="214" width="260" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

      <rect x="504" y="0" width="296" height="280" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="520" y="16" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <circle cx="600" cy="120" r="60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
      <circle cx="600" cy="120" r="60" fill="none" stroke="var(--color-accent)" strokeWidth="12" strokeDasharray="280 377" strokeLinecap="round" transform="rotate(-90 600 120)" />
      <text x="600" y="118" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18" fontWeight="700">78%</text>
      <text x="600" y="138" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Savings Rate</text>
      <rect x="520" y="210" width="264" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="520" y="224" width="240" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="520" y="238" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
    </svg>
  );
}

function HealthcareMockup() {
  return (
    <svg width="100%" height="280" viewBox="0 0 800 280" fill="none" aria-hidden="true" style={{ maxWidth: "800px" }}>
      {/* Patient card */}
      <rect x="0" y="0" width="260" height="280" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <circle cx="60" cy="50" r="28" fill="rgba(79,110,247,0.15)" />
      <rect x="100" y="34" width="120" height="10" rx="5" fill="rgba(255,255,255,0.12)" />
      <rect x="100" y="52" width="80" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="100" width="228" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="116" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="132" width="210" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="160" width="228" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="176" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

      {/* Vitals */}
      <rect x="280" y="0" width="250" height="130" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="296" y="16" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <polyline points="296,100 326,80 356,90 386,60 416,70 446,50 476,60 506,40" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="506" y="110" fill="rgba(255,255,255,0.5)" fontSize="10">Live</text>

      <rect x="280" y="150" width="250" height="130" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="296" y="166" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="296" y="190" width="218" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="296" y="204" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="296" y="218" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="296" y="232" width="210" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

      {/* Analytics */}
      <rect x="550" y="0" width="250" height="280" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="566" y="16" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="566" y="40" width="218" height="60" rx="4" fill="rgba(79,110,247,0.08)" />
      <polyline points="576,80 606,65 636,72 666,50 696,58 726,45 756,52 776,38" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="566" y="120" width="218" height="60" rx="4" fill="rgba(16,185,129,0.08)" />
      <polyline points="576,160 606,150 636,155 666,140 696,145 726,135 756,140 776,130" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="566" y="200" width="218" height="60" rx="4" fill="rgba(167,139,250,0.08)" />
      <polyline points="576,240 606,230 636,235 666,220 696,225 726,215 756,220 776,210" stroke="#a78bfa" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SaaSMockup() {
  return (
    <svg width="100%" height="280" viewBox="0 0 800 280" fill="none" aria-hidden="true" style={{ maxWidth: "800px" }}>
      {/* Metrics */}
      <rect x="0" y="0" width="250" height="86" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="16" y="16" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <text x="16" y="56" fill="var(--color-accent-light)" fontSize="22" fontWeight="700">12.5K</text>
      <text x="16" y="74" fill="rgba(255,255,255,0.35)" fontSize="10">Active Users</text>

      <rect x="270" y="0" width="250" height="86" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="286" y="16" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <text x="286" y="56" fill="#10b981" fontSize="22" fontWeight="700">99.99%</text>
      <text x="286" y="74" fill="rgba(255,255,255,0.35)" fontSize="10">Uptime</text>

      <rect x="540" y="0" width="260" height="86" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="556" y="16" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <text x="556" y="56" fill="#a78bfa" fontSize="22" fontWeight="700">45ms</text>
      <text x="556" y="74" fill="rgba(255,255,255,0.35)" fontSize="10">P99 Latency</text>

      {/* Charts */}
      <rect x="0" y="106" width="390" height="174" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="16" y="122" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="16" y="146" width="358" height="8" rx="4" fill="rgba(79,110,247,0.2)" />
      <rect x="16" y="162" width="300" height="8" rx="4" fill="rgba(79,110,247,0.15)" />
      <rect x="16" y="178" width="340" height="8" rx="4" fill="rgba(79,110,247,0.18)" />
      <rect x="16" y="194" width="280" height="8" rx="4" fill="rgba(79,110,247,0.12)" />
      <rect x="16" y="210" width="320" height="8" rx="4" fill="rgba(79,110,247,0.15)" />
      <rect x="16" y="226" width="260" height="8" rx="4" fill="rgba(79,110,247,0.1)" />
      <rect x="16" y="242" width="290" height="8" rx="4" fill="rgba(79,110,247,0.12)" />
      <rect x="16" y="258" width="240" height="8" rx="4" fill="rgba(79,110,247,0.08)" />

      <rect x="414" y="106" width="386" height="174" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="430" y="122" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <polyline points="430,260 460,240 490,250 520,220 550,230 580,200 610,210 640,180 670,190 700,170 730,180 760,160 790,170" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="790" cy="170" r="4" fill="#60a5fa" />
    </svg>
  );
}

function EcommerceMockup() {
  return (
    <svg width="100%" height="280" viewBox="0 0 800 280" fill="none" aria-hidden="true" style={{ maxWidth: "800px" }}>
      {/* Checkout panel */}
      <rect x="180" y="0" width="440" height="280" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="204" y="20" width="120" height="10" rx="5" fill="rgba(255,255,255,0.15)" />
      {/* Progress */}
      <rect x="204" y="50" width="392" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="204" y="50" width="392" height="4" rx="2" fill="var(--color-accent)" />
      {/* Form fields */}
      <rect x="204" y="74" width="392" height="36" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="216" y="88" width="120" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="204" y="122" width="392" height="36" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="216" y="136" width="180" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="204" y="170" width="190" height="36" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="406" y="170" width="190" height="36" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      {/* Pay button */}
      <rect x="204" y="224" width="392" height="40" rx="8" fill="var(--color-accent)" />
      <rect x="340" y="238" width="120" height="10" rx="5" fill="rgba(255,255,255,0.9)" />
      {/* Sidebar summary */}
      <rect x="0" y="40" width="160" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
      <rect x="16" y="60" width="80" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
      <rect x="16" y="84" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="100" width="100" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="130" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="146" width="80" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="176" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="192" width="110" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

      <rect x="640" y="40" width="160" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
      <rect x="656" y="60" width="80" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
      <rect x="656" y="84" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="656" y="100" width="100" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="656" y="130" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="656" y="146" width="80" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
    </svg>
  );
}

function LogisticsMockup() {
  return (
    <svg width="100%" height="280" viewBox="0 0 800 280" fill="none" aria-hidden="true" style={{ maxWidth: "800px" }}>
      {/* Map area */}
      <rect x="0" y="0" width="520" height="280" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="16" y="16" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      {/* Map grid lines */}
      <line x1="16" y1="60" x2="504" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="16" y1="120" x2="504" y2="120" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="16" y1="180" x2="504" y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="16" y1="240" x2="504" y2="240" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="130" y1="60" x2="130" y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="260" y1="60" x2="260" y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="390" y1="60" x2="390" y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      {/* Vehicle dots */}
      <circle cx="160" cy="100" r="5" fill="#10b981" />
      <circle cx="300" cy="150" r="5" fill="#10b981" />
      <circle cx="420" cy="90" r="5" fill="#febc2e" />
      <circle cx="220" cy="210" r="5" fill="#10b981" />
      <circle cx="350" cy="230" r="5" fill="#ff5f57" />
      {/* Route lines */}
      <polyline points="160,100 220,130 260,150 300,150" stroke="rgba(16,185,129,0.4)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
      <polyline points="300,150 350,180 420,150 420,90" stroke="rgba(254,188,46,0.4)" strokeWidth="2" fill="none" strokeDasharray="4 4" />

      {/* Sidebar stats */}
      <rect x="544" y="0" width="256" height="86" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="560" y="16" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <text x="560" y="56" fill="#10b981" fontSize="22" fontWeight="700">312</text>
      <text x="560" y="74" fill="rgba(255,255,255,0.35)" fontSize="10">Active Vehicles</text>

      <rect x="544" y="102" width="256" height="86" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="560" y="118" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <text x="560" y="158" fill="var(--color-accent-light)" fontSize="22" fontWeight="700">94%</text>
      <text x="560" y="176" fill="rgba(255,255,255,0.35)" fontSize="10">On-Time Rate</text>

      <rect x="544" y="204" width="256" height="76" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="560" y="220" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="560" y="240" width="224" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="560" y="252" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
    </svg>
  );
}

function EdTechMockup() {
  return (
    <svg width="100%" height="280" viewBox="0 0 800 280" fill="none" aria-hidden="true" style={{ maxWidth: "800px" }}>
      {/* Progress ring */}
      <rect x="0" y="0" width="260" height="280" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="16" y="16" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <circle cx="130" cy="140" r="70" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" />
      <circle cx="130" cy="140" r="70" fill="none" stroke="var(--color-accent)" strokeWidth="14" strokeDasharray="330 440" strokeLinecap="round" transform="rotate(-90 130 140)" />
      <text x="130" y="136" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="20" fontWeight="700">75%</text>
      <text x="130" y="156" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Course Progress</text>
      <rect x="16" y="230" width="228" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="244" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="258" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

      {/* Lesson cards */}
      <rect x="280" y="0" width="250" height="130" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="296" y="16" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="296" y="36" width="218" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="296" y="50" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="296" y="64" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="296" y="88" width="100" height="28" rx="6" fill="rgba(79,110,247,0.15)" />
      <rect x="310" y="98" width="72" height="8" rx="4" fill="var(--color-accent-light)" />

      <rect x="280" y="150" width="250" height="130" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="296" y="166" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="296" y="186" width="218" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="296" y="200" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="296" y="214" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="296" y="238" width="100" height="28" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" />

      {/* Teacher analytics */}
      <rect x="550" y="0" width="250" height="280" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="566" y="16" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="566" y="44" width="80" height="60" rx="4" fill="rgba(79,110,247,0.08)" />
      <rect x="580" y="80" width="52" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="658" y="44" width="80" height="60" rx="4" fill="rgba(16,185,129,0.08)" />
      <rect x="672" y="80" width="52" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="566" y="120" width="218" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="566" y="136" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="566" y="152" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="566" y="168" width="210" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="566" y="184" width="190" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="566" y="200" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="566" y="216" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="566" y="232" width="210" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="566" y="248" width="190" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
    </svg>
  );
}

function HaenKomputerMockup() {
  return (
    <svg width="100%" height="280" viewBox="0 0 800 280" fill="none" aria-hidden="true" style={{ maxWidth: "800px" }}>
      {/* Sidebar */}
      <rect x="0" y="0" width="140" height="280" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="16" y="16" width="60" height="8" rx="4" fill="rgba(16,185,129,0.35)" />
      <rect x="16" y="36" width="108" height="6" rx="3" fill="rgba(16,185,129,0.2)" />
      <rect x="16" y="52" width="108" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="68" width="108" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="84" width="108" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="100" width="108" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="116" width="108" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="132" width="108" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="156" width="108" height="6" rx="3" fill="rgba(79,110,247,0.2)" />
      <rect x="16" y="172" width="108" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="188" width="108" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

      {/* Main dashboard area */}
      <rect x="156" y="0" width="440" height="130" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="172" y="16" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      {/* Metric cards */}
      <rect x="172" y="36" width="96" height="70" rx="6" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.2)" />
      <text x="220" y="64" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="16" fontWeight="700">0</text>
      <text x="220" y="82" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">Stock In</text>
      <rect x="280" y="36" width="96" height="70" rx="6" fill="rgba(79,110,247,0.1)" stroke="rgba(79,110,247,0.2)" />
      <text x="328" y="64" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="16" fontWeight="700">0</text>
      <text x="328" y="82" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">Sales</text>
      <rect x="388" y="36" width="96" height="70" rx="6" fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.2)" />
      <text x="436" y="64" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="16" fontWeight="700">0</text>
      <text x="436" y="82" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">Revenue</text>
      <rect x="496" y="36" width="84" height="70" rx="6" fill="rgba(254,188,46,0.1)" stroke="rgba(254,188,46,0.2)" />
      <text x="538" y="64" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="16" fontWeight="700">0</text>
      <text x="538" y="82" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">Pending</text>

      {/* Table area */}
      <rect x="156" y="150" width="440" height="130" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="172" y="166" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="172" y="188" width="408" height="6" rx="3" fill="rgba(79,110,247,0.18)" />
      <rect x="172" y="204" width="380" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="172" y="220" width="400" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="172" y="236" width="360" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="172" y="252" width="340" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

      {/* Right panel */}
      <rect x="612" y="0" width="188" height="280" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="628" y="16" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <circle cx="706" cy="80" r="48" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="10" />
      <circle cx="706" cy="80" r="48" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="10" strokeDasharray="200 302" strokeLinecap="round" transform="rotate(-90 706 80)" />
      <text x="706" y="78" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="14" fontWeight="700">40%</text>
      <text x="706" y="94" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">Efficiency</text>
      <rect x="628" y="148" width="156" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="628" y="164" width="140" height="6" rx="3" fill="rgba(16,185,129,0.2)" />
      <rect x="628" y="180" width="130" height="6" rx="3" fill="rgba(79,110,247,0.2)" />
      <rect x="628" y="196" width="120" height="6" rx="3" fill="rgba(167,139,250,0.15)" />
      <rect x="628" y="220" width="156" height="30" rx="6" fill="rgba(16,185,129,0.15)" />
      <rect x="642" y="230" width="90" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="628" y="260" width="156" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="628" y="274" width="120" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
    </svg>
  );
}
