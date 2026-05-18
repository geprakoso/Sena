"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { getNavItems } from "@/lib/content";

export default function Navbar({ dict = {}, currentLang = "en" }: { dict?: Record<string, any>, currentLang?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(currentLang.toUpperCase());
  const pathname = usePathname();
  const router = useRouter();

  const handleLangChange = (newLang: string) => {
    setLang(newLang);
    router.refresh();
  };

  useEffect(() => {
    document.cookie = `lang=${lang.toLowerCase()}; path=/; max-age=31536000`;
  }, [lang]);

  const navItems = getNavItems(dict);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Determine whether a nav item should appear active */
  function isActive(href: string): boolean {
    // exact-match for real routes (e.g. /portfolio)
    if (!href.startsWith("/#") && href !== "/") return pathname === href;
    // contact route
    if (href === "/contact") return pathname === "/contact";
    // home route
    if (href === "/") return pathname === "/";
    return false;
  }

  const isContactPage = pathname === "/contact";
  const useLightNav = isContactPage;

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, box-shadow 0.3s, border-color 0.3s",
        background: scrolled 
          ? "rgba(255, 255, 255, 0.9)" 
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.08)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div
        className="container-base"
        style={{ display: "flex", alignItems: "center", height: "68px", gap: "2rem" }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${process.env.NEXT_PUBLIC_LOGO_NAME || "Sena"} home`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <LogoIcon />
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.125rem",
              color: scrolled || useLightNav ? "var(--color-text-dark)" : "var(--color-text-primary)",
              letterSpacing: "-0.02em",
              transition: "color 0.3s",
            }}
          >
            {process.env.NEXT_PUBLIC_LOGO_NAME || "Sena Logo"}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: "0.375rem 0.875rem",
                  fontSize: "0.9rem",
                  color: active
                    ? "var(--color-accent)"
                    : (scrolled || useLightNav ? "var(--color-text-dark)" : "var(--color-text-secondary)"),
                  fontWeight: active ? 600 : 400,
                  textDecoration: "none",
                  borderRadius: "0.375rem",
                  transition: "all 0.2s",
                }}
                className={`nav-link ${(scrolled || useLightNav) ? 'nav-link-light' : ''}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          style={{
            padding: "0.5rem 1.25rem",
            background: "var(--color-accent)",
            color: "#fff",
            borderRadius: "0.5rem",
            fontWeight: 600,
            fontSize: "0.9rem",
            textDecoration: "none",
            flexShrink: 0,
            transition: "background 0.2s, transform 0.15s",
            boxShadow: "0 0 20px var(--color-accent-glow)",
          }}
          className="cta-btn"
        >
          {dict?.nav?.lets_talk || "Let's Talk"}
        </Link>

        {/* Language Switcher */}
        <div 
          className="lang-switcher"
          style={{
            display: "flex",
            alignItems: "center",
            background: scrolled || useLightNav ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.08)",
            padding: "2px",
            borderRadius: "999px",
            marginLeft: "0.5rem",
            border: `1px solid ${scrolled || useLightNav ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.15)"}`,
            flexShrink: 0,
          }}
        >
          {["EN", "ID"].map((l) => (
            <button
              key={l}
              onClick={() => handleLangChange(l)}
              style={{
                background: lang === l ? "var(--color-accent)" : "transparent",
                color: lang === l ? "#fff" : (scrolled || useLightNav ? "var(--color-text-dark)" : "var(--color-text-secondary)"),
                border: "none",
                padding: "0.25rem 0.6rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: scrolled || useLightNav ? "var(--color-text-dark)" : "var(--color-text-primary)",
          }}
          className="hamburger-btn"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: useLightNav ? "rgba(255, 255, 255, 0.98)" : "rgba(6, 17, 28, 0.97)",
            borderTop: "1px solid var(--color-border)",
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="mobile-menu"
        >
          <nav
            aria-label="Mobile navigation"
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: "0.75rem 1rem",
                    color: active
                      ? "var(--color-accent)"
                      : (scrolled || useLightNav ? "var(--color-text-dark)" : "var(--color-text-secondary)"),
                    fontWeight: active ? 600 : 400,
                    textDecoration: "none",
                    borderRadius: "0.5rem",
                    fontSize: "1rem",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "0.75rem",
                padding: "0.75rem 1rem",
                background: "var(--color-accent)",
                color: "#fff",
                borderRadius: "0.5rem",
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              {dict?.nav?.lets_talk || "Let's Talk"}
            </Link>

            {/* Mobile Language Switcher */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              marginTop: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--color-border)",
            }}>
              {["EN", "ID"].map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    handleLangChange(l);
                    setMenuOpen(false);
                  }}
                  style={{
                    background: lang === l ? "var(--color-accent)" : "transparent",
                    color: lang === l ? "#fff" : (useLightNav ? "var(--color-text-dark)" : "var(--color-text-secondary)"),
                    border: lang === l ? "none" : "1px solid var(--color-border)",
                    padding: "0.6rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    flex: 1,
                    transition: "all 0.2s",
                  }}
                >
                  {l === "EN" ? (dict?.nav?.english || "English") : (dict?.nav?.indonesia || "Indonesia")}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav[aria-label="Primary navigation"],
          .cta-btn,
          .lang-switcher { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        .nav-link:hover { color: var(--color-text-primary) !important; }
        .nav-link-light:hover { color: var(--color-accent) !important; }
        .nav-link-light.active { color: var(--color-accent) !important; }
        .cta-btn:hover { background: var(--color-accent-hover) !important; transform: translateY(-1px); }
      `}</style>
    </header>
  );
}

function LogoIcon() {
  const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL;

  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt=""
        width={28}
        height={28}
        style={{ objectFit: "contain" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="7" fill="var(--color-accent)" />
      <path
        d="M8 14L12 10L16 14L20 10"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 18L12 14L16 18L20 14"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {open ? (
        <>
          <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
