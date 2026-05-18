import Link from "next/link";

export default function HeroSection({ dict = {} }: { dict?: Record<string, any> }) {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="hero-gradient"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "80px",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background orbs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,74,0.12) 0%, transparent 70%)",
          top: "10%",
          right: "5%",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(38,205,235,0.1) 0%, transparent 70%)",
          bottom: "15%",
          left: "0%",
          filter: "blur(50px)",
        }} />
      </div>

      <div className="container-base" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        {/* Left: Copy */}
        <div style={{ opacity: 0, animation: "fadeInUp 0.7s ease-out 0.1s forwards" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 0.875rem",
            border: "1px solid rgba(255,107,74,0.35)",
            borderRadius: "999px",
            marginBottom: "1.75rem",
            background: "rgba(255,107,74,0.08)",
          }}>
            <span style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--color-accent)",
              animation: "pulse-dot 2s ease-in-out infinite",
            }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", color: "var(--color-accent-light)", textTransform: "uppercase" }}>
              {dict?.hero?.badge || "Software Development & Problem Solving"}
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
              margin: "0 0 1.5rem",
            }}
          >
            {dict?.hero?.heading || "We build software that solves real business problems."}
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: "1.0625rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
            maxWidth: "480px",
            margin: "0 0 2.5rem",
          }}>
            {dict?.hero?.subtext || "HaenSoftware is a software development agency that combines engineering excellence with problem-solving mindset to deliver custom solutions that drive measurable impact."}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.8rem 1.75rem",
                background: "var(--color-accent)",
                color: "#fff",
                borderRadius: "0.625rem",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                boxShadow: "0 0 28px var(--color-accent-glow)",
                transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
              }}
              className="hero-cta-primary"
            >
              {dict?.hero?.cta_primary || "Start a Project"}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link
              href="#case-studies"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.8rem 1.75rem",
                background: "transparent",
                color: "var(--color-text-primary)",
                borderRadius: "0.625rem",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                border: "1.5px solid var(--color-border)",
                transition: "border-color 0.2s, background 0.2s",
              }}
              className="hero-cta-secondary"
            >
              {dict?.hero?.cta_secondary || "Our Work"}
            </Link>
          </div>
        </div>

        {/* Right: Dashboard mockup */}
        <div
          className="animate-float"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.8s ease-out 0.3s forwards, float 5s ease-in-out 1s infinite",
          }}
          aria-hidden="true"
        >
          <DashboardMockup dict={dict} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #home > div { grid-template-columns: 1fr !important; }
          #home [aria-hidden="true"].animate-float { display: none; }
        }
        .hero-cta-primary:hover {
          background: var(--color-accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 0 36px var(--color-accent-glow) !important;
        }
        .hero-cta-secondary:hover {
          border-color: rgba(255,255,255,0.25) !important;
          background: rgba(255,255,255,0.04) !important;
        }
      `}</style>
    </section>
  );
}

function DashboardMockup({ dict }: { dict?: Record<string, any> }) {
  return (
    <div style={{
      background: "rgba(12, 26, 44, 0.85)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
      backdropFilter: "blur(12px)",
    }}>
      {/* Window chrome */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.875rem 1.25rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.03)",
      }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: "0.75rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
          {dict?.dashboard?.overview || "Overview"}
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", minHeight: "340px" }}>
        {/* Sidebar */}
        <div style={{
          borderRight: "1px solid rgba(255,255,255,0.06)",
          padding: "1rem 0",
          background: "rgba(255,255,255,0.02)",
        }}>
          {[
            dict?.dashboard?.overview || "Overview",
            dict?.dashboard?.analytics || "Analytics",
            dict?.dashboard?.projects || "Projects",
            dict?.dashboard?.users || "Users",
            dict?.dashboard?.billing || "Billing",
            dict?.dashboard?.settings || "Settings",
          ].map((item, i) => (
            <div key={item} style={{
              padding: "0.5rem 1rem",
              fontSize: "0.75rem",
              color: i === 0 ? "var(--color-accent-light)" : "rgba(255,255,255,0.4)",
              background: i === 0 ? "rgba(255,107,74,0.12)" : "transparent",
              borderLeft: i === 0 ? "2px solid var(--color-accent)" : "2px solid transparent",
              cursor: "default",
            }}>
              {item}
            </div>
          ))}
        </div>

        {/* Main panel */}
        <div style={{ padding: "1rem" }}>
          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.625rem", marginBottom: "0.875rem" }}>
            <StatCard label={dict?.dashboard?.performance || "Performance"} value="+24.5%" color="#34D399" mini />
            <StatCard label={dict?.dashboard?.users || "Users"} value="12,675" color="#22D3EE" mini />
            <StatCard label={dict?.dashboard?.revenue || "Revenue"} value="$98,540" color="#FB7185" mini />
          </div>

          {/* Charts area */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
            <div style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "0.5rem",
              padding: "0.75rem",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", margin: "0 0 0.5rem" }}>{dict?.dashboard?.recent_activity || "Recent Activity"}</p>
              {[
                dict?.dashboard?.activity_registered || "New user registered",
                dict?.dashboard?.activity_payment || "Payment received",
                dict?.dashboard?.activity_subscription || "Subscription updated",
                dict?.dashboard?.activity_report || "Report generated"
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
                  <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.55)" }}>{t}</span>
                  <span style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.25)" }}>{i + 1}{dict?.dashboard?.ago || "h ago"}</span>
                </div>
              ))}
            </div>
            <div style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "0.5rem",
              padding: "0.75rem",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", margin: "0 0 0.5rem" }}>{dict?.dashboard?.system_stability || "System Stability"}</p>
              <DonutChart value={99.9} dict={dict} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color, mini }: { label: string; value: string; color: string; mini?: boolean }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      borderRadius: "0.5rem",
      padding: mini ? "0.625rem" : "1rem",
      border: "1px solid rgba(255,255,255,0.06)",
    }}>
      <p style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", margin: "0 0 0.25rem" }}>{label}</p>
      <p style={{ fontSize: "0.875rem", fontWeight: 700, color, margin: 0 }}>{value}</p>
      <MiniSparkline color={color} />
    </div>
  );
}

function MiniSparkline({ color }: { color: string }) {
  const points = "0,16 10,12 20,14 30,8 40,10 50,4 60,6";
  return (
    <svg width="60" height="20" style={{ marginTop: "0.25rem", display: "block" }} aria-hidden="true">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function DonutChart({ value, dict }: { value: number, dict?: any }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  return (
    <div style={{ position: "relative", width: "72px", height: "72px" }}>
      <svg width="72" height="72" viewBox="0 0 72 72" aria-label={`${value}% uptime`}>
        <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
        <circle
          cx="36" cy="36" r={r}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="7"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 36 36)"
        />
      </svg>
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)" }}>{value}%</span>
        <span style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.35)" }}>{dict?.dashboard?.uptime || "Uptime"}</span>
      </div>
    </div>
  );
}
