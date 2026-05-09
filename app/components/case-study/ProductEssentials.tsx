import type { CaseStudyDetail } from "@/app/types";

type FeatureGroup = { title: string; items: string[] };

function isFeatureGroup(f: string | FeatureGroup): f is FeatureGroup {
  return typeof f === "object" && "title" in f && "items" in f;
}

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 6l2.5 2.5 4.5-4.5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BulletIcon = () => (
  <span
    style={{
      display: "inline-block",
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: "var(--color-accent)",
      flexShrink: 0,
      marginTop: "9px",
    }}
  />
);

export default function ProductEssentials({ study }: { study: CaseStudyDetail }) {
  const hasGroups = study.productFeatures.some(isFeatureGroup);

  return (
    <section
      aria-labelledby="product-heading"
      style={{
        background: "var(--color-bg-light)",
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
          Product Essentials
        </p>
        <h2
          id="product-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-dark)",
            margin: "0 0 1.5rem",
          }}
        >
          What we shipped.
        </h2>
        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            color: "var(--color-text-dark-secondary)",
            margin: "0 0 3rem",
            maxWidth: "720px",
          }}
        >
          The final product was designed around the user. Every feature was built
          to solve a specific pain point identified during discovery.
        </p>

        {hasGroups ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
              margin: "0 0 4rem",
            }}
          >
            {study.productFeatures.filter(isFeatureGroup).map((group, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  padding: "1.5rem",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--color-text-dark)",
                    margin: "0 0 1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {group.title}
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                  }}
                >
                  {group.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        fontSize: "0.9rem",
                        lineHeight: 1.55,
                        color: "var(--color-text-dark-secondary)",
                      }}
                    >
                      <BulletIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 4rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {study.productFeatures.map((feature, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  fontSize: "1.0625rem",
                  lineHeight: 1.6,
                  color: "var(--color-text-dark)",
                }}
              >
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "6px",
                    background: "rgba(255,107,74,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <CheckIcon />
                </span>
                {typeof feature === "string" ? feature : feature.title}
              </li>
            ))}
          </ul>
        )}

        <div
          style={{
            width: "100%",
            background: study.productImage ? "transparent" : "var(--color-bg-primary)",
            borderRadius: "1rem",
            border: study.productImage ? "1px solid rgba(0, 0, 0, 0.11)" : "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
            boxShadow: study.productImage ? "0 24px 80px rgba(0, 0, 0, 0.07)" : "0 24px 80px rgba(0,0,0,0.35)",
          }}
        >
          {study.productImage ? (
            <img
              src={study.productImage}
              alt={`${study.title} dashboard`}
              className="case-study-image-hover"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          ) : (
            <div style={{ padding: "2rem" }}>
              <ProductUIMockup type={study.architectureType} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProductUIMockup({ type }: { type: string }) {
  if (type === "microservices") {
    return (
      <svg width="100%" height="320" viewBox="0 0 900 320" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        <rect x="0" y="0" width="280" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="16" y="16" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="16" y="40" width="248" height="8" rx="4" fill="rgba(255,107,74,0.2)" />
        <rect x="16" y="60" width="220" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="80" width="240" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="110" width="248" height="60" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="30" y="130" width="80" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="30" y="146" width="120" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="190" width="248" height="60" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="30" y="210" width="80" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="30" y="226" width="120" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

        <rect x="300" y="0" width="280" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="316" y="16" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <polyline points="316,280 356,240 396,260 436,220 476,240 516,200 556,220" stroke="#22D3EE" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="316" y="60" width="248" height="120" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="330" y="80" width="100" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="330" y="96" width="140" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="330" y="112" width="120" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

        <rect x="600" y="0" width="300" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="616" y="16" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="616" y="44" width="268" height="40" rx="6" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.2)" />
        <rect x="630" y="60" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="616" y="100" width="268" height="40" rx="6" fill="rgba(254,188,46,0.1)" stroke="rgba(254,188,46,0.2)" />
        <rect x="630" y="116" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="616" y="156" width="268" height="40" rx="6" fill="rgba(251,113,133,0.1)" stroke="rgba(251,113,133,0.2)" />
        <rect x="630" y="172" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="616" y="212" width="268" height="40" rx="6" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.2)" />
        <rect x="630" y="228" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      </svg>
    );
  }

  if (type === "data-platform") {
    return (
      <svg width="100%" height="320" viewBox="0 0 900 320" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        <rect x="0" y="0" width="440" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="16" y="16" width="160" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="16" y="44" width="408" height="8" rx="4" fill="rgba(255,107,74,0.2)" />
        <rect x="16" y="64" width="380" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="84" width="400" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="110" width="408" height="80" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="30" y="130" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="30" y="146" width="160" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="210" width="408" height="80" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="30" y="230" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="30" y="246" width="160" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

        <rect x="472" y="0" width="428" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="488" y="16" width="160" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <polyline points="488,280 528,250 568,270 608,230 648,250 688,210 728,230 768,200 808,220 848,190 888,210" stroke="#34D399" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="488" y="60" width="396" height="120" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="502" y="80" width="140" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="502" y="96" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="502" y="112" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="502" y="128" width="160" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      </svg>
    );
  }

  if (type === "cloud-scale") {
    return (
      <svg width="100%" height="320" viewBox="0 0 900 320" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        <rect x="0" y="0" width="900" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="16" y="16" width="200" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="16" y="44" width="868" height="8" rx="4" fill="rgba(255,107,74,0.2)" />
        <rect x="16" y="64" width="840" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="84" width="860" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="110" width="420" height="80" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="30" y="130" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="30" y="146" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="210" width="420" height="80" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="30" y="230" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="30" y="246" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="464" y="110" width="420" height="180" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="478" y="130" width="180" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="478" y="146" width="240" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="478" y="162" width="220" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="478" y="178" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="478" y="194" width="240" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="478" y="210" width="220" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="478" y="226" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="478" y="242" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="478" y="258" width="160" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      </svg>
    );
  }

  if (type === "checkout-flow") {
    return (
      <svg width="100%" height="320" viewBox="0 0 900 320" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        <rect x="200" y="0" width="500" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="224" y="16" width="200" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="224" y="44" width="452" height="8" rx="4" fill="rgba(255,107,74,0.2)" />
        <rect x="224" y="64" width="424" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="224" y="84" width="444" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="224" y="110" width="452" height="50" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="238" y="130" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="224" y="176" width="452" height="50" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
        <rect x="238" y="196" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="224" y="242" width="452" height="50" rx="6" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.2)" />
        <rect x="238" y="262" width="120" height="6" rx="3" fill="rgba(255,255,255,0.9)" />
      </svg>
    );
  }

  if (type === "iot-dashboard") {
    return (
      <svg width="100%" height="320" viewBox="0 0 900 320" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        <rect x="0" y="0" width="580" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="16" y="16" width="160" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <line x1="16" y1="70" x2="564" y2="70" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="16" y1="140" x2="564" y2="140" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="16" y1="210" x2="564" y2="210" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="16" y1="280" x2="564" y2="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="150" y1="70" x2="150" y2="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="290" y1="70" x2="290" y2="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="430" y1="70" x2="430" y2="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <circle cx="180" cy="110" r="6" fill="#34D399" />
        <circle cx="340" cy="180" r="6" fill="#34D399" />
        <circle cx="500" cy="100" r="6" fill="#febc2e" />
        <circle cx="220" cy="240" r="6" fill="#34D399" />
        <circle cx="380" cy="250" r="6" fill="#ff5f57" />
        <polyline points="180,110 220,130 290,150 340,180" stroke="rgba(52,211,153,0.4)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <polyline points="340,180 380,200 430,170 500,130 500,100" stroke="rgba(254,188,46,0.4)" strokeWidth="2" fill="none" strokeDasharray="4 4" />

        <rect x="604" y="0" width="296" height="150" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="620" y="16" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="620" y="44" width="264" height="40" rx="6" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.2)" />
        <rect x="634" y="60" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="620" y="100" width="264" height="40" rx="6" fill="rgba(254,188,46,0.1)" stroke="rgba(254,188,46,0.2)" />
        <rect x="634" y="116" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />

        <rect x="604" y="170" width="296" height="150" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="620" y="186" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="620" y="214" width="264" height="40" rx="6" fill="rgba(255,107,74,0.1)" stroke="rgba(255,107,74,0.2)" />
        <rect x="634" y="230" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="620" y="270" width="264" height="40" rx="6" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.2)" />
        <rect x="634" y="286" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      </svg>
    );
  }

  // ai-platform
  return (
    <svg width="100%" height="320" viewBox="0 0 900 320" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
      <rect x="0" y="0" width="280" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="16" y="16" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="16" y="44" width="248" height="8" rx="4" fill="rgba(255,107,74,0.2)" />
      <rect x="16" y="64" width="220" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="84" width="240" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="110" width="248" height="60" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
      <rect x="30" y="130" width="80" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="30" y="146" width="120" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="190" width="248" height="60" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
      <rect x="30" y="210" width="80" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="30" y="226" width="120" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

      <rect x="300" y="0" width="280" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="316" y="16" width="120" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <circle cx="440" cy="160" r="60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
      <circle cx="440" cy="160" r="60" fill="none" stroke="var(--color-accent)" strokeWidth="12" strokeDasharray="280 377" strokeLinecap="round" transform="rotate(-90 440 160)" />
      <text x="440" y="156" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="20" fontWeight="700">82%</text>
      <text x="440" y="176" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Mastery Score</text>
      <rect x="316" y="240" width="248" height="60" rx="6" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.2)" />
      <rect x="330" y="260" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="330" y="276" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

      <rect x="600" y="0" width="300" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="616" y="16" width="160" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="616" y="44" width="268" height="40" rx="6" fill="rgba(255,107,74,0.1)" stroke="rgba(255,107,74,0.2)" />
      <rect x="630" y="60" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="616" y="100" width="268" height="40" rx="6" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.2)" />
      <rect x="630" y="116" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="616" y="156" width="268" height="40" rx="6" fill="rgba(254,188,46,0.1)" stroke="rgba(254,188,46,0.2)" />
      <rect x="630" y="172" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="616" y="212" width="268" height="40" rx="6" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.2)" />
      <rect x="630" y="228" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="616" y="268" width="268" height="40" rx="6" fill="rgba(251,113,133,0.1)" stroke="rgba(251,113,133,0.2)" />
      <rect x="630" y="284" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
    </svg>
  );

  if (type === "tall-stack-erp") {
    return (
      <svg width="100%" height="320" viewBox="0 0 900 320" fill="none" aria-hidden="true" style={{ maxWidth: "900px", margin: "0 auto", display: "block" }}>
        {/* Sidebar */}
        <rect x="0" y="0" width="160" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="16" y="16" width="60" height="8" rx="4" fill="rgba(52,211,153,0.35)" />
        <rect x="16" y="36" width="128" height="6" rx="3" fill="rgba(52,211,153,0.2)" />
        <rect x="16" y="52" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="68" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="84" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="100" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="124" width="128" height="6" rx="3" fill="rgba(255,107,74,0.2)" />
        <rect x="16" y="140" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="156" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="180" width="128" height="6" rx="3" fill="rgba(251,113,133,0.2)" />
        <rect x="16" y="196" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="212" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="236" width="128" height="6" rx="3" fill="rgba(254,188,46,0.2)" />
        <rect x="16" y="252" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="268" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="284" width="128" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

        {/* Main content - table */}
        <rect x="176" y="0" width="500" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="192" y="16" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="480" y="16" width="80" height="24" rx="6" fill="rgba(52,211,153,0.2)" stroke="rgba(52,211,153,0.3)" />
        <rect x="494" y="26" width="52" height="6" rx="3" fill="rgba(255,255,255,0.8)" />
        <rect x="192" y="52" width="468" height="1" fill="rgba(255,255,255,0.06)" />
        <rect x="192" y="68" width="468" height="6" rx="3" fill="rgba(255,107,74,0.18)" />
        <rect x="192" y="84" width="440" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="192" y="100" width="420" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="192" y="116" width="450" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="192" y="132" width="400" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="192" y="148" width="430" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="192" y="164" width="380" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="192" y="188" width="100" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="192" y="210" width="468" height="40" rx="6" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.15)" />
        <rect x="206" y="226" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="340" y="226" width="160" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="192" y="264" width="468" height="40" rx="6" fill="rgba(254,188,46,0.06)" stroke="rgba(254,188,46,0.15)" />
        <rect x="206" y="280" width="100" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="320" y="280" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

        {/* Right panel - metrics */}
        <rect x="692" y="0" width="208" height="320" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="708" y="16" width="80" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <circle cx="796" cy="80" r="40" fill="none" stroke="rgba(52,211,153,0.15)" strokeWidth="10" />
        <circle cx="796" cy="80" r="40" fill="none" stroke="rgba(52,211,153,0.6)" strokeWidth="10" strokeDasharray="170 252" strokeLinecap="round" transform="rotate(-90 796 80)" />
        <text x="796" y="78" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="14" fontWeight="700">40%</text>
        <text x="796" y="94" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">Efficiency</text>
        <rect x="708" y="140" width="176" height="40" rx="6" fill="rgba(255,107,74,0.08)" stroke="rgba(255,107,74,0.15)" />
        <rect x="722" y="154" width="80" height="6" rx="3" fill="rgba(255,107,74,0.3)" />
        <rect x="810" y="154" width="60" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="708" y="194" width="176" height="40" rx="6" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.15)" />
        <rect x="722" y="208" width="80" height="6" rx="3" fill="rgba(52,211,153,0.3)" />
        <rect x="810" y="208" width="60" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="708" y="248" width="176" height="40" rx="6" fill="rgba(251,113,133,0.08)" stroke="rgba(251,113,133,0.15)" />
        <rect x="722" y="262" width="80" height="6" rx="3" fill="rgba(251,113,133,0.3)" />
        <rect x="810" y="262" width="60" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      </svg>
    );
  }
}
