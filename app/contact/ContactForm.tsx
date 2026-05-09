"use client";

import Script from "next/script";

export default function ContactForm() {
  return (
    <div 
      style={{ 
        width: "100%", 
        height: "650px", 
        borderRadius: "1.5rem", 
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)",
        background: "#ffffff",
        position: "relative"
      }}
    >
      <div data-tf-live="01KR3FD6K30EDCQJHARZXWDQJP"></div>
      <Script 
        src="https://embed.typeform.com/next/embed.js" 
        strategy="afterInteractive"
      />
    </div>
  );
}

