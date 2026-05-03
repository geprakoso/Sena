import type { CaseStudyDetail } from "@/app/types";

export default function TechStack({ study }: { study: CaseStudyDetail }) {
  return (
    <section
      aria-labelledby="tech-heading"
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
          Technology Used
        </p>
        <h2
          id="tech-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-dark)",
            margin: "0 0 3rem",
          }}
        >
          The stack behind the solution.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1rem",
          }}
          className="tech-grid"
        >
          {study.techStack.map((tech, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid var(--color-border-light)",
                borderRadius: "0.75rem",
                padding: "1.25rem 1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                textAlign: "center",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              className="tech-card"
            >
              <TechIcon name={tech.name} />
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-text-dark)",
                }}
              >
                {tech.name}
              </span>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  color: "var(--color-text-dark-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .tech-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}

function TechIcon({ name }: { name: string }) {
  const initials = name.slice(0, 2).toUpperCase();
  const colors: Record<string, string> = {
    Next: "#fff",
    Re: "#61dafb",
    No: "#339933",
    Go: "#00add8",
    Py: "#ffd43b",
    Fa: "#009688",
    Po: "#336791",
    Cl: "#ffcc01",
    Re2: "#dc382d",
    Ka: "#231f20",
    Do: "#2496ed",
    Ku: "#326ce5",
    AW: "#ff9900",
    Te: "#7b42bc",
    Pr: "#e6522c",
    Gr: "#f46800",
    Cl2: "#f38020",
    La: "#ff9900",
    Ve: "#000",
    Da: "#632ca6",
    St: "#635bff",
    Ma: "#4264fb",
    We: "#fff",
    Ti: "#e31937",
    Te2: "#db5860",
  };

  const bgColors: Record<string, string> = {
    Next: "#0f172a",
    Re: "rgba(97,218,251,0.12)",
    No: "rgba(51,153,51,0.12)",
    Go: "rgba(0,173,216,0.12)",
    Py: "rgba(255,212,59,0.12)",
    Fa: "rgba(0,150,136,0.12)",
    Po: "rgba(51,103,145,0.12)",
    Cl: "rgba(255,204,1,0.12)",
    Re2: "rgba(220,56,45,0.12)",
    Ka: "rgba(255,255,255,0.08)",
    Do: "rgba(36,150,237,0.12)",
    Ku: "rgba(50,108,229,0.12)",
    AW: "rgba(255,153,0,0.12)",
    Te: "rgba(123,66,188,0.12)",
    Pr: "rgba(230,82,44,0.12)",
    Gr: "rgba(244,104,0,0.12)",
    Cl2: "rgba(243,128,32,0.12)",
    La: "rgba(255,153,0,0.12)",
    Ve: "rgba(255,255,255,0.08)",
    Da: "rgba(99,44,166,0.12)",
    St: "rgba(99,91,255,0.12)",
    Ma: "rgba(66,100,251,0.12)",
    We: "rgba(255,255,255,0.08)",
    Ti: "rgba(227,25,55,0.12)",
    Te2: "rgba(219,88,96,0.12)",
  };

  const key = Object.keys(colors).find((k) => name.toLowerCase().startsWith(k.toLowerCase())) || "Next";

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "0.625rem",
        background: bgColors[key] || "rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.75rem",
        fontWeight: 700,
        color: colors[key] || "var(--color-text-dark)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {initials}
    </div>
  );
}
