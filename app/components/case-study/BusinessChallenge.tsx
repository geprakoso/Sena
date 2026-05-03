import type { CaseStudyDetail } from "@/app/types";

export default function BusinessChallenge({ study }: { study: CaseStudyDetail }) {
  return (
    <section
      aria-labelledby="challenge-heading"
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
          Business Challenge
        </p>
        <h2
          id="challenge-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-dark)",
            margin: "0 0 1.5rem",
          }}
        >
          What needed to change.
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
          {study.businessChallenge.intro}
        </p>

        {/* Problem bullets */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 3.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {study.businessChallenge.problems.map((problem, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "var(--color-text-dark)",
              }}
            >
              <span
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "rgba(79,110,247,0.1)",
                  border: "1.5px solid rgba(79,110,247,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5l2 2 4-4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {problem}
            </li>
          ))}
        </ul>

        {/* Optional highlight cards */}
        {study.businessChallenge.highlights && study.businessChallenge.highlights.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="challenge-highlights"
          >
            {study.businessChallenge.highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "var(--color-text-dark)",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {h.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    lineHeight: 1.6,
                    color: "var(--color-text-dark-secondary)",
                    margin: 0,
                  }}
                >
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .challenge-highlights { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
