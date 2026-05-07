import type { CaseStudyDetail } from "@/app/types";

const STEPS = [
  { num: "01", title: "Discovery" },
  { num: "02", title: "UI/UX Design" },
  { num: "03", title: "Development" },
  { num: "04", title: "Testing" },
  { num: "05", title: "Deployment" },
];

export default function DevTimeline({ study }: { study: CaseStudyDetail }) {
  return (
    <section
      aria-labelledby="timeline-heading"
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
          Development in Detail
        </p>
        <h2
          id="timeline-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-dark)",
            margin: "0 0 4rem",
          }}
        >
          How we built it.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {study.devTimeline.map((step, i) => {
            const stepMeta = STEPS[i];
            return (
              <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
                {/* Timeline column */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "48px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "var(--color-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#fff",
                      boxShadow: "0 0 20px rgba(255,107,74,0.25)",
                      zIndex: 2,
                    }}
                  >
                    {stepMeta.num}
                  </div>
                  {i !== study.devTimeline.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        flex: 1,
                        background: "linear-gradient(180deg, var(--color-accent) 0%, rgba(255,107,74,0.1) 100%)",
                        marginTop: "8px",
                        minHeight: "60px",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  style={{
                    paddingBottom: i !== study.devTimeline.length - 1 ? "3.5rem" : "0",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      flexWrap: "wrap",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--color-text-dark)",
                        margin: 0,
                      }}
                    >
                      {stepMeta.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                        background: "rgba(255,107,74,0.08)",
                        padding: "0.25rem 0.625rem",
                        borderRadius: "999px",
                        border: "1px solid rgba(255,107,74,0.2)",
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "var(--color-text-dark-secondary)",
                      margin: 0,
                      maxWidth: "640px",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
