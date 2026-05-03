import type { CaseStudyDetail } from "@/app/types";

export default function ArchitectureDetail({ study }: { study: CaseStudyDetail }) {
  return (
    <section
      aria-labelledby="architecture-heading"
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
          Business Architecture
        </p>
        <h2
          id="architecture-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-dark)",
            margin: "0 0 1.5rem",
          }}
        >
          How the solution works.
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
          {study.architectureIntro}
        </p>

        {/* Architecture diagram */}
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
            <BusinessArchitectureDiagram type={study.architectureType} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessArchitectureDiagram({ type }: { type: string }) {
  if (type === "microservices") {
    return (
      <svg width="100%" height="340" viewBox="0 0 900 340" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        {/* Clients */}
        <rect x="20" y="140" width="100" height="60" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="70" y="172" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontWeight="600">Mobile App</text>
        <rect x="20" y="220" width="100" height="60" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="70" y="252" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontWeight="600">Web Portal</text>
        {/* API Gateway */}
        <rect x="180" y="160" width="120" height="80" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="240" y="200" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontWeight="600">API Gateway</text>
        {/* Services */}
        <rect x="360" y="20" width="100" height="60" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="410" y="52" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Accounts</text>
        <rect x="360" y="100" width="100" height="60" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="410" y="132" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Payments</text>
        <rect x="360" y="180" width="100" height="60" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="410" y="212" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">KYC</text>
        <rect x="360" y="260" width="100" height="60" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="410" y="292" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Analytics</text>
        {/* Event Bus */}
        <rect x="520" y="140" width="100" height="60" rx="8" fill="rgba(254,188,46,0.12)" stroke="rgba(254,188,46,0.3)" />
        <text x="570" y="172" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontWeight="600">Event Bus</text>
        {/* Data */}
        <rect x="680" y="100" width="100" height="60" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="730" y="132" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">PostgreSQL</text>
        <rect x="680" y="180" width="100" height="60" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="730" y="212" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Redis Cache</text>
        {/* Arrows */}
        <line x1="120" y1="170" x2="180" y2="190" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="120" y1="250" x2="180" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="300" y1="180" x2="360" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="300" y1="200" x2="360" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="300" y1="210" x2="360" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="300" y1="220" x2="360" y2="290" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="460" y1="80" x2="520" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="460" y1="140" x2="520" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="460" y1="220" x2="520" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="460" y1="280" x2="520" y2="190" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="620" y1="170" x2="680" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="620" y1="180" x2="680" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "data-platform") {
    return (
      <svg width="100%" height="340" viewBox="0 0 900 340" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        {/* Clinics */}
        <rect x="20" y="40" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="68" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Clinic EHRs</text>
        <rect x="20" y="110" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="138" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Lab Systems</text>
        <rect x="20" y="180" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="208" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Billing APIs</text>
        <rect x="20" y="250" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="278" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Wearables</text>
        {/* Ingestion */}
        <rect x="200" y="120" width="120" height="80" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="260" y="160" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Ingestion</text>
        {/* Warehouse */}
        <rect x="380" y="60" width="140" height="80" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="450" y="100" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Data Warehouse</text>
        {/* Analytics */}
        <rect x="380" y="180" width="140" height="80" rx="8" fill="rgba(254,188,46,0.12)" stroke="rgba(254,188,46,0.3)" />
        <text x="450" y="220" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Analytics Engine</text>
        {/* Dashboard */}
        <rect x="600" y="120" width="120" height="80" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="660" y="160" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Dashboard</text>
        {/* Reports */}
        <rect x="780" y="60" width="100" height="50" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <text x="830" y="88" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">Reports</text>
        <rect x="780" y="130" width="100" height="50" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <text x="830" y="158" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">Alerts</text>
        <rect x="780" y="200" width="100" height="50" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <text x="830" y="228" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">Exports</text>
        {/* Arrows */}
        <line x1="140" y1="65" x2="200" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="140" y1="135" x2="200" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="140" y1="205" x2="200" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="140" y1="275" x2="200" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="320" y1="150" x2="380" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="320" y1="170" x2="380" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="520" y1="100" x2="600" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="520" y1="220" x2="600" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="720" y1="150" x2="780" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="720" y1="160" x2="780" y2="155" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="720" y1="170" x2="780" y2="225" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "cloud-scale") {
    return (
      <svg width="100%" height="340" viewBox="0 0 900 340" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        {/* CDN */}
        <rect x="20" y="130" width="120" height="60" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="162" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Cloudflare CDN</text>
        {/* Load Balancer */}
        <rect x="200" y="130" width="120" height="60" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="260" y="162" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Load Balancer</text>
        {/* Kubernetes */}
        <rect x="380" y="60" width="140" height="80" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="450" y="100" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Kubernetes Cluster</text>
        <rect x="390" y="180" width="60" height="40" rx="6" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.2)" />
        <text x="420" y="204" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Pod A</text>
        <rect x="460" y="180" width="60" height="40" rx="6" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.2)" />
        <text x="490" y="204" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Pod B</text>
        <rect x="390" y="230" width="60" height="40" rx="6" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.2)" />
        <text x="420" y="254" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Pod C</text>
        <rect x="460" y="230" width="60" height="40" rx="6" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.2)" />
        <text x="490" y="254" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Pod D</text>
        {/* Cache */}
        <rect x="580" y="60" width="120" height="60" rx="8" fill="rgba(254,188,46,0.12)" stroke="rgba(254,188,46,0.3)" />
        <text x="640" y="92" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Redis Cluster</text>
        {/* Database */}
        <rect x="580" y="150" width="120" height="60" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="640" y="182" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">PostgreSQL</text>
        {/* Replicas */}
        <rect x="580" y="240" width="120" height="60" rx="8" fill="rgba(96,165,250,0.08)" stroke="rgba(96,165,250,0.2)" />
        <text x="640" y="272" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10" fontWeight="600">Read Replicas</text>
        {/* Monitoring */}
        <rect x="760" y="100" width="120" height="60" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <text x="820" y="132" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">Prometheus</text>
        <rect x="760" y="190" width="120" height="60" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <text x="820" y="222" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">Grafana</text>
        {/* Arrows */}
        <line x1="140" y1="160" x2="200" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="320" y1="160" x2="380" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="520" y1="90" x2="580" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="520" y1="110" x2="580" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="640" y1="210" x2="640" y2="240" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="700" y1="90" x2="760" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="700" y1="180" x2="760" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "checkout-flow") {
    return (
      <svg width="100%" height="340" viewBox="0 0 900 340" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        {/* Cart */}
        <rect x="20" y="120" width="120" height="80" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="162" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Shopping Cart</text>
        {/* Checkout App */}
        <rect x="200" y="100" width="140" height="120" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="270" y="155" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Next.js Checkout</text>
        {/* Stripe */}
        <rect x="400" y="60" width="120" height="80" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="460" y="100" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Stripe</text>
        {/* Inventory */}
        <rect x="400" y="180" width="120" height="80" rx="8" fill="rgba(254,188,46,0.12)" stroke="rgba(254,188,46,0.3)" />
        <text x="460" y="220" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Redis Inventory</text>
        {/* Analytics */}
        <rect x="580" y="120" width="120" height="80" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="640" y="162" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">A/B Analytics</text>
        {/* DB */}
        <rect x="760" y="120" width="120" height="80" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <text x="820" y="162" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">PostgreSQL</text>
        {/* Arrows */}
        <line x1="140" y1="160" x2="200" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="340" y1="140" x2="400" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="340" y1="180" x2="400" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="520" y1="100" x2="580" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="520" y1="220" x2="580" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="700" y1="160" x2="760" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "iot-dashboard") {
    return (
      <svg width="100%" height="340" viewBox="0 0 900 340" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        {/* GPS Devices */}
        <rect x="20" y="40" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="68" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">GPS Telemetry</text>
        <rect x="20" y="110" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="138" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Sensors</text>
        <rect x="20" y="180" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="208" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Driver App</text>
        <rect x="20" y="250" width="120" height="50" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
        <text x="80" y="278" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Weather API</text>
        {/* IoT Core */}
        <rect x="200" y="120" width="120" height="80" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
        <text x="260" y="160" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">AWS IoT Core</text>
        {/* Event Pipeline */}
        <rect x="380" y="120" width="120" height="80" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
        <text x="440" y="160" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Event Pipeline</text>
        {/* TimescaleDB */}
        <rect x="560" y="60" width="120" height="60" rx="8" fill="rgba(254,188,46,0.12)" stroke="rgba(254,188,46,0.3)" />
        <text x="620" y="92" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">TimescaleDB</text>
        {/* Optimizer */}
        <rect x="560" y="150" width="120" height="60" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
        <text x="620" y="182" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Route Optimizer</text>
        {/* Dashboard */}
        <rect x="560" y="240" width="120" height="60" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <text x="620" y="272" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">Dashboard</text>
        {/* Mapbox */}
        <rect x="760" y="60" width="120" height="60" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <text x="820" y="92" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">Mapbox</text>
        {/* Customer */}
        <rect x="760" y="150" width="120" height="60" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <text x="820" y="182" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">ETA Portal</text>
        {/* Arrows */}
        <line x1="140" y1="65" x2="200" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="140" y1="135" x2="200" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="140" y1="205" x2="200" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="140" y1="275" x2="200" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="320" y1="160" x2="380" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="500" y1="140" x2="560" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="500" y1="170" x2="560" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="680" y1="90" x2="760" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="680" y1="180" x2="760" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="500" y1="180" x2="560" y2="270" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </svg>
    );
  }

  // ai-platform (default)
  return (
    <svg width="100%" height="340" viewBox="0 0 900 340" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
      {/* LMS */}
      <rect x="20" y="120" width="120" height="80" rx="8" fill="rgba(79,110,247,0.12)" stroke="rgba(79,110,247,0.3)" />
      <text x="80" y="162" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">LMS Integration</text>
      {/* Integration Layer */}
      <rect x="200" y="120" width="120" height="80" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
      <text x="260" y="162" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">FastAPI Layer</text>
      {/* Adaptive Engine */}
      <rect x="380" y="60" width="140" height="80" rx="8" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" />
      <text x="450" y="100" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Adaptive Engine</text>
      {/* ML Model */}
      <rect x="380" y="180" width="140" height="80" rx="8" fill="rgba(254,188,46,0.12)" stroke="rgba(254,188,46,0.3)" />
      <text x="450" y="220" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">ML Model</text>
      {/* Next.js Frontend */}
      <rect x="580" y="120" width="120" height="80" rx="8" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.3)" />
      <text x="640" y="162" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600">Next.js App</text>
      {/* Cache & DB */}
      <rect x="760" y="60" width="120" height="60" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      <text x="820" y="92" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">Redis Cache</text>
      <rect x="760" y="150" width="120" height="60" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      <text x="820" y="182" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">PostgreSQL</text>
      {/* Arrows */}
      <line x1="140" y1="160" x2="200" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="320" y1="140" x2="380" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="320" y1="180" x2="380" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="520" y1="100" x2="580" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="520" y1="220" x2="580" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="700" y1="140" x2="760" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="700" y1="170" x2="760" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
    </svg>
  );
}
