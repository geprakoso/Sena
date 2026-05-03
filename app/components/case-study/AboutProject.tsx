import type { CaseStudyDetail } from "@/app/types";

export default function AboutProject({ study }: { study: CaseStudyDetail }) {
  return (
    <section
      aria-labelledby="about-heading"
      style={{
        background: "#fff",
        padding: "var(--section-padding-y) 0",
      }}
    >
      <div className="container-base">
        {/* Section label */}
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
          About the Project
        </p>
        <h2
          id="about-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-dark)",
            margin: "0 0 4rem",
          }}
        >
          From challenge to<br />transformation.
        </h2>

        {/* Stacked sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          <AboutBlock
            number="01"
            title="About the Client"
            text={study.clientDescription}
          />
          <AboutBlock
            number="02"
            title="The Idea"
            text={study.theIdea}
          />
          <AboutBlock
            number="03"
            title="The Challenge"
            text={study.theChallenge}
          />
          <AboutBlock
            number="04"
            title="The Result"
            text={study.theResult}
            accent
          />
        </div>
      </div>
    </section>
  );
}

function AboutBlock({
  number,
  title,
  text,
  accent,
}: {
  number: string;
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2.5rem",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: accent ? "var(--color-accent)" : "var(--color-text-dark-secondary)",
          textTransform: "uppercase",
          minWidth: "40px",
          marginTop: "0.25rem",
        }}
      >
        {number}
      </span>
      <div style={{ flex: 1, minWidth: "280px" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "var(--color-text-dark)",
            margin: "0 0 1rem",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            color: "var(--color-text-dark-secondary)",
            margin: 0,
            maxWidth: "680px",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
