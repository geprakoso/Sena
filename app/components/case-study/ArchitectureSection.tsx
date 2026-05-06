import type { CaseStudyDetail } from "@/app/types";
import Image from "next/image";

export default function ArchitectureSection({ study }: { study: CaseStudyDetail }) {
  return (
    <section
      aria-labelledby="system-arch-heading"
      style={{
        background: "#fff",
        padding: "var(--section-padding-y) 0",
      }}
    >
      <div className="container-base">
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
          System Architecture
        </p>
        <h2
          id="system-arch-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-dark)",
            margin: "0 0 1.5rem",
          }}
        >
          Built for scale and reliability.
        </h2>
        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            color: "var(--color-text-dark-secondary)",
            margin: "0 0 3.5rem",
            maxWidth: "720px",
          }}
        >
          The technical architecture was designed with resilience, observability, and
          security as first-class concerns. Every component is redundant, monitored, and
          automatically recoverable.
        </p>

        <div
          style={{
            width: "100%",
            background: "var(--color-bg-primary)",
            borderRadius: "1rem",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
          }}
        >
          <div style={{ padding: "2rem" }}>
            {study.systemArchitectureImage ? (
              <div style={{ position: "relative", width: "100%", maxWidth: "900px", margin: "0 auto" }}>
                <Image
                  src={study.systemArchitectureImage}
                  alt={`${study.title} system architecture`}
                  width={900}
                  height={360}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ) : (
              <SystemArchitectureDiagram type={study.architectureType} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemArchitectureDiagram({ type }: { type: string }) {
  if (type === "microservices") {
    return (
      <svg width="100%" height="360" viewBox="0 0 900 360" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        <rect x="20" y="20" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="48" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Client Apps</text>
        <rect x="20" y="90" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="118" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Partner APIs</text>
        <rect x="20" y="160" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="188" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Admin Portal</text>
        <rect x="20" y="230" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="258" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Mobile</text>
        <rect x="20" y="300" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="328" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Webhooks</text>

        <rect x="200" y="100" width="120" height="80" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="260" y="140" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">API Gateway</text>

        <rect x="380" y="20" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="430" y="48" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="600">Auth Service</text>
        <rect x="380" y="90" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="430" y="118" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="600">Payments</text>
        <rect x="380" y="160" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="430" y="188" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="600">Accounts</text>
        <rect x="380" y="230" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="430" y="258" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="600">Notifications</text>
        <rect x="380" y="300" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="430" y="328" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="600">Reports</text>

        <rect x="540" y="100" width="120" height="80" rx="8" fill="rgba(254,188,46,0.12)" stroke="rgba(254,188,46,0.3)" />
        <text x="600" y="140" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Message Bus</text>

        <rect x="720" y="20" width="120" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="780" y="48" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">PostgreSQL</text>
        <rect x="720" y="90" width="120" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="780" y="118" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Redis</text>
        <rect x="720" y="160" width="120" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="780" y="188" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">S3 Storage</text>
        <rect x="720" y="230" width="120" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="780" y="258" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Elasticsearch</text>
        <rect x="720" y="300" width="120" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="780" y="328" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Prometheus</text>

        <line x1="140" y1="45" x2="200" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="140" y1="115" x2="200" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="140" y1="185" x2="200" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="140" y1="255" x2="200" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="140" y1="325" x2="200" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="320" y1="140" x2="380" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="320" y1="150" x2="380" y2="115" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="320" y1="160" x2="380" y2="185" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="320" y1="170" x2="380" y2="255" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="320" y1="180" x2="380" y2="325" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="480" y1="45" x2="540" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="480" y1="115" x2="540" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="480" y1="185" x2="540" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="480" y1="255" x2="540" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="480" y1="325" x2="540" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="660" y1="130" x2="720" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="660" y1="140" x2="720" y2="115" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="660" y1="150" x2="720" y2="185" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="660" y1="160" x2="720" y2="255" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="660" y1="170" x2="720" y2="325" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "tall-stack-erp") {
    return (
      <svg width="100%" height="360" viewBox="0 0 900 360" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        {/* TALL Stack layers */}
        <rect x="20" y="20" width="120" height="50" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="80" y="48" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Tailwind CSS</text>
        <rect x="20" y="90" width="120" height="50" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="80" y="118" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Alpine.js</text>
        <rect x="20" y="160" width="120" height="50" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="80" y="188" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Laravel</text>
        <rect x="20" y="230" width="120" height="50" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="80" y="258" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Livewire</text>
        <rect x="20" y="300" width="120" height="50" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="80" y="328" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">FilamentPHP</text>

        {/* Application layer */}
        <rect x="200" y="100" width="140" height="80" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="270" y="140" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Application</text>
        <text x="270" y="158" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">POS | Procurement | Inventory | Service | HR</text>

        {/* Business Logic layer */}
        <rect x="400" y="60" width="140" height="60" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="470" y="95" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Service Classes</text>
        <rect x="400" y="150" width="140" height="60" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="470" y="185" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Action Classes</text>
        <rect x="400" y="240" width="140" height="60" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="470" y="275" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Laravel Policies (RBAC)</text>

        {/* Data layer */}
        <rect x="600" y="100" width="120" height="80" rx="8" fill="rgba(254,188,46,0.12)" stroke="rgba(254,188,46,0.3)" />
        <text x="660" y="140" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">MySQL</text>
        <text x="660" y="158" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">Eloquent Models</text>
        <rect x="600" y="210" width="120" height="60" rx="8" fill="rgba(254,188,46,0.12)" stroke="rgba(254,188,46,0.3)" />
        <text x="660" y="245" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Redis</text>
        <text x="660" y="260" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">Caching</text>

        {/* Infrastructure */}
        <rect x="780" y="100" width="100" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="830" y="128" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Docker</text>
        <rect x="780" y="170" width="100" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="830" y="198" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Vite</text>
        <rect x="780" y="240" width="100" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="830" y="268" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">PWA</text>

        {/* Arrows */}
        <line x1="140" y1="45" x2="200" y2="130" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" />
        <line x1="140" y1="115" x2="200" y2="150" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" />
        <line x1="140" y1="185" x2="200" y2="170" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" />
        <line x1="140" y1="255" x2="200" y2="190" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" />
        <line x1="140" y1="325" x2="200" y2="210" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" />
        <line x1="340" y1="140" x2="400" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="340" y1="150" x2="400" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="340" y1="170" x2="400" y2="270" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="540" y1="90" x2="600" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="540" y1="180" x2="600" y2="240" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="720" y1="130" x2="780" y2="125" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="720" y1="170" x2="780" y2="195" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="720" y1="240" x2="780" y2="265" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg width="100%" height="360" viewBox="0 0 900 360" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
      <rect x="20" y="20" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
      <text x="80" y="48" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Users</text>
      <rect x="20" y="90" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
      <text x="80" y="118" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">API Clients</text>
      <rect x="20" y="160" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
      <text x="80" y="188" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Admin</text>
      <rect x="20" y="230" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
      <text x="80" y="258" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Integrations</text>
      <rect x="20" y="300" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
      <text x="80" y="328" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Mobile</text>

      <rect x="200" y="100" width="120" height="80" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
      <text x="260" y="140" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Gateway</text>

      <rect x="380" y="20" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
      <text x="430" y="48" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="600">Service A</text>
      <rect x="380" y="90" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
      <text x="430" y="118" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="600">Service B</text>
      <rect x="380" y="160" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
      <text x="430" y="188" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="600">Service C</text>
      <rect x="380" y="230" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
      <text x="430" y="258" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="600">Service D</text>
      <rect x="380" y="300" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
      <text x="430" y="328" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="600">Service E</text>

      <rect x="540" y="100" width="120" height="80" rx="8" fill="rgba(254,188,46,0.12)" stroke="rgba(254,188,46,0.3)" />
      <text x="600" y="140" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Event Bus</text>

      <rect x="720" y="20" width="120" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
      <text x="780" y="48" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Database</text>
      <rect x="720" y="90" width="120" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
      <text x="780" y="118" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Cache</text>
      <rect x="720" y="160" width="120" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
      <text x="780" y="188" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Storage</text>
      <rect x="720" y="230" width="120" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
      <text x="780" y="258" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Search</text>
      <rect x="720" y="300" width="120" height="50" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
      <text x="780" y="328" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Monitor</text>

      <line x1="140" y1="45" x2="200" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="140" y1="115" x2="200" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="140" y1="185" x2="200" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="140" y1="255" x2="200" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="140" y1="325" x2="200" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="320" y1="140" x2="380" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="320" y1="150" x2="380" y2="115" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="320" y1="160" x2="380" y2="185" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="320" y1="170" x2="380" y2="255" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="320" y1="180" x2="380" y2="325" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="480" y1="45" x2="540" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="480" y1="115" x2="540" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="480" y1="185" x2="540" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="480" y1="255" x2="540" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="480" y1="325" x2="540" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="660" y1="130" x2="720" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="660" y1="140" x2="720" y2="115" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="660" y1="150" x2="720" y2="185" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="660" y1="160" x2="720" y2="255" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="660" y1="170" x2="720" y2="325" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
    </svg>
  );
}
