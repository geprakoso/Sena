import type { Metadata } from "next";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us — Haen Software",
  description: "Get in touch with Haen Software. We're here to help you solve your business challenges with custom software solutions.",
};

import { getDictionary, getCurrentLang } from "@/lib/i18n";
import ContactForm from "./ContactForm";

export default async function ContactPage() {
  const dict = await getDictionary();
  const currentLang = await getCurrentLang();
  return (
    <>
      <Navbar dict={dict} currentLang={currentLang} />
      <main id="main-content" style={{ background: "#ffffff", minHeight: "100vh" }}>
        {/* ── Hero Section ────────────────────────────────── */}
        <section
          style={{
            padding: "calc(68px + 6rem) 0 4rem",
            background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
            textAlign: "center",
          }}
        >
          <div className="container-base">
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                color: "var(--color-text-dark)",
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                marginBottom: "1.5rem",
              }}
            >
              {dict?.contact_page?.heading_1 || "Let's build something"} <br />
              <span style={{ color: "var(--color-accent)" }}>{dict?.contact_page?.heading_2 || "extraordinary"}</span> {dict?.contact_page?.heading_3 || "together."}
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto 4rem",
                lineHeight: 1.6,
              }}
            >
              {dict?.contact_page?.subtext || "Have a project in mind? Or just want to say hello? We'd love to hear from you and see how we can help."}
            </p>

            {/* Contact Info Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                marginTop: "4rem",
                textAlign: "left",
              }}
            >
              <div style={cardStyle}>
                <h3 style={cardTitleStyle}>{dict?.contact_page?.contact_us || "Contact Us"}</h3>
                <a href="mailto:haensoftware@gmail.com" style={cardLinkStyle}>
                  haensoftware@gmail.com
                </a>
                <p style={cardDescStyle}>{dict?.contact_page?.contact_email_desc || "For general inquiries and project requests."}</p>
                < br />
                <a href="tel:(+62) 816-111-9046" style={cardLinkStyle}>
                  (+62) 816-111-9046
                </a>
                <p style={cardDescStyle}>{dict?.contact_page?.contact_phone_desc || "For quick response and warm chat."}</p>
              </div>

              <div style={cardStyle}>
                <h3 style={cardTitleStyle}>{dict?.contact_page?.working_hours || "Working Hours"}</h3>
                <p style={cardInfoStyle}>{dict?.contact_page?.working_days || "Monday - Saturday"}</p>
                <p style={cardInfoStyle}>{dict?.contact_page?.working_time || "9 AM - 5 PM"}</p>
                <p style={cardDescStyle}>{dict?.contact_page?.working_desc || "Available for support and consultations."}</p>
              </div>

              <div style={cardStyle}>
                <h3 style={cardTitleStyle}>{dict?.contact_page?.visit_us || "Visit Us"}</h3>
                <p style={cardInfoStyle}>
                  Jl. Muria Raya No.377 Blok B, RT.06/RW.07, <br />
                  Kayuapu Kulon, Gondangmanis, Kec. Bae, <br />
                  Kabupaten Kudus, Jawa Tengah 59327
                </p>
                <p style={cardDescStyle}>{dict?.contact_page?.visit_desc || "Our headquarters in Indonesia."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Typeform Section ────────────────────────────── */}
        <section
          style={{
            padding: "4rem 0 8rem",
            background: "#ffffff",
          }}
        >
          <div className="container-base" style={{ maxWidth: "1000px" }}>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}

const cardStyle = {
  padding: "2rem",
  background: "#ffffff",
  borderRadius: "1rem",
  border: "1px solid #f1f5f9",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
  transition: "transform 0.2s, box-shadow 0.2s",
};

const cardTitleStyle = {
  fontSize: "0.75rem",
  fontWeight: 700,
  color: "var(--color-accent)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  marginBottom: "1rem",
};

const cardLinkStyle = {
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "var(--color-text-dark)",
  textDecoration: "none",
  display: "block",
  marginBottom: "0.5rem",
};

const cardInfoStyle = {
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "var(--color-text-dark)",
  margin: "0 0 0.25rem",
};

const cardDescStyle = {
  fontSize: "0.875rem",
  color: "#64748b",
  marginTop: "1rem",
  lineHeight: 1.5,
};
