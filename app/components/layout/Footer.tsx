import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border)",
        padding: "4rem 0 2rem",
      }}
    >
      <div className="container-base">
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="SolveCore home"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "1rem" }}
            >
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="7" fill="var(--color-accent)" />
                <path d="M8 14L12 10L16 14L20 10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 18L12 14L16 18L20 14" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: "1.0625rem", color: "var(--color-text-primary)", letterSpacing: "-0.02em" }}>SolveCore</span>
            </Link>
            <p style={{
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              maxWidth: "280px",
              margin: "0 0 1.5rem",
            }}>
              A software development agency that combines engineering excellence with problem-solving mindset.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["twitter", "linkedin", "github"].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform}`}
                  aria-label={`SolveCore on ${platform}`}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-text-muted)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  className="social-icon"
                >
                  <SocialIcon name={platform} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services" links={[
            { label: "Custom Software", href: "#services" },
            { label: "Problem Solving", href: "#services" },
            { label: "Cloud & DevOps", href: "#services" },
            { label: "Product Development", href: "#services" },
          ]} />

          <FooterColumn title="Company" links={[
            { label: "About Us", href: "#about" },
            { label: "Case Studies", href: "#case-studies" },
            { label: "Blog", href: "#blog" },
            { label: "Careers", href: "#careers" },
          ]} />

          <FooterColumn title="Contact" links={[
            { label: "hello@solvecore.io", href: "mailto:hello@solvecore.io" },
            { label: "+1 (555) 000-0000", href: "tel:+15550000000" },
            { label: "San Francisco, CA", href: "#contact" },
          ]} />
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", margin: 0 }}>
            &copy; {year} SolveCore. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text) => (
              <Link
                key={text}
                href="#"
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="footer-legal-link"
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        .social-icon:hover { border-color: rgba(255,255,255,0.2) !important; color: var(--color-text-primary) !important; }
        .footer-legal-link:hover { color: var(--color-text-secondary) !important; }
      `}</style>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 style={{
        fontSize: "0.8125rem",
        fontWeight: 700,
        color: "var(--color-text-primary)",
        margin: "0 0 1rem",
        letterSpacing: "0.02em",
      }}>
        {title}
      </h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              style={{
                fontSize: "0.875rem",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              className="footer-link"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <style>{`.footer-link:hover { color: var(--color-text-primary) !important; }`}</style>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  const s = 16;
  if (name === "twitter") return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.5 2h-2L8 6 5 2H1.5l4.5 6-4.5 6h2.5L8 10l3 4H14.5l-4.5-6 4-6z" />
    </svg>
  );
  if (name === "linkedin") return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M2 3.5A1.5 1.5 0 113.5 5 1.5 1.5 0 012 3.5zM2.5 6H4.5V14H2.5V6zm3.5 0H8v1.1A2.8 2.8 0 0110.5 6c2 0 3.5 1.3 3.5 4V14H12v-3.7c0-1-.4-1.8-1.4-1.8s-1.6.7-1.6 1.8V14H7V6z" />
    </svg>
  );
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}
