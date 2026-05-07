import type { CaseStudyDetail } from "@/app/types";

export default function Testimonial({ study }: { study: CaseStudyDetail }) {
  return (
    <section
      aria-label="Client testimonial"
      style={{
        background: "var(--color-bg-light)",
        padding: "var(--section-padding-y) 0",
      }}
    >
      <div
        className="container-base"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Quote icon */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(255,107,74,0.1)",
            border: "1px solid rgba(255,107,74,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 10h3v3c0 1.5-1 2.5-2.5 2.5H4.5c-.5 0-1-.5-1-1v-1c0-1 .5-1.5 1.5-1.5H5v-3zm8 0h3v3c0 1.5-1 2.5-2.5 2.5h-1c-.5 0-1-.5-1-1v-1c0-1 .5-1.5 1.5-1.5h.5v-3z" fill="var(--color-accent)" />
          </svg>
        </div>

        <blockquote
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            fontWeight: 500,
            lineHeight: 1.5,
            color: "var(--color-text-dark)",
            maxWidth: "760px",
            margin: "0 0 2.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          &ldquo;{study.testimonial.quote}&rdquo;
        </blockquote>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-accent) 0%, #FB7185 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {study.testimonial.name.charAt(0)}
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: "var(--color-text-dark)",
              }}
            >
              {study.testimonial.name}
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-text-dark-secondary)",
              }}
            >
              {study.testimonial.role}, {study.testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
