import type { ReactNode } from "react";
import Link from "next/link";
import { SERVICES } from "@/app/data/content";
import type { Service } from "@/app/types";

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{
        background: "#fff",
        padding: "var(--section-padding-y) 0",
      }}
    >
      <div className="container-base">
        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
          marginBottom: "3.5rem",
        }}
          className="services-header"
        >
          <div>
            <p style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--color-accent)",
              textTransform: "uppercase",
              margin: "0 0 0.75rem",
            }}>
              What We Do
            </p>
            <h2
              id="services-heading"
              style={{
                fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "var(--color-text-dark)",
                margin: 0,
              }}
            >
              End-to-end services to build, scale and optimize your software.
            </h2>
          </div>

          <div style={{ paddingTop: "2.25rem" }}>
            <p style={{
              fontSize: "1rem",
              color: "var(--color-text-dark-secondary)",
              lineHeight: 1.7,
              margin: 0,
            }}>
              From idea to launch and beyond, we help you turn challenges into reliable, scalable and future-ready digital solutions.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
          className="services-grid"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-header { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      style={{
        padding: "2rem 1.75rem",
        borderRadius: "0.875rem",
        border: "1.5px solid var(--color-border-light)",
        background: "var(--color-bg-light-card)",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.2s",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
      className="service-card"
    >
      {/* Icon */}
      <div style={{
        width: "48px",
        height: "48px",
        borderRadius: "0.75rem",
        background: "rgba(255,107,74,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <ServiceIcon name={service.icon} />
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontSize: "1.0625rem",
          fontWeight: 700,
          color: "var(--color-text-dark)",
          margin: "0 0 0.5rem",
          lineHeight: 1.3,
          letterSpacing: "-0.015em",
        }}>
          {service.title}
        </h3>
        <p style={{
          fontSize: "0.875rem",
          color: "var(--color-text-dark-secondary)",
          lineHeight: 1.65,
          margin: 0,
        }}>
          {service.description}
        </p>
      </div>

      {/* Link */}
      <Link
        href={service.href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "var(--color-accent)",
          textDecoration: "none",
          transition: "gap 0.2s",
        }}
        className="service-link"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <style>{`
        .service-card:hover {
          border-color: rgba(255,107,74,0.3) !important;
          box-shadow: 0 8px 32px rgba(255,107,74,0.10) !important;
          transform: translateY(-3px);
        }
        .service-link:hover { gap: 0.6rem !important; }
      `}</style>
    </article>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const size = 22;
  const stroke = "var(--color-accent)";
  const sw = "1.7";

  const icons: Record<string, ReactNode> = {
    code: (
      <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M7 7L2 11L7 15M15 7L20 11L15 15M13 4L9 18" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    puzzle: (
      <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M10 4H6a2 2 0 00-2 2v4M10 4a2 2 0 104 0M10 4v4M4 10v4a2 2 0 002 2h4M14 4v4h4a2 2 0 012 2v4a2 2 0 01-2 2h-4M10 18v-4M6 18a2 2 0 01-2-2v-2" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    cloud: (
      <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M16 15a4 4 0 00-8 0M6 15a5 5 0 11.7-9.9A5.5 5.5 0 0117 10a3 3 0 01-1 5.8" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
      </svg>
    ),
    chart: (
      <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="12" width="3" height="7" rx="1" fill={stroke} />
        <rect x="9" y="8" width="3" height="11" rx="1" fill={stroke} opacity="0.7" />
        <rect x="15" y="4" width="3" height="15" rx="1" fill={stroke} opacity="0.4" />
      </svg>
    ),
  };
  return <>{icons[name] ?? null}</>;
}
