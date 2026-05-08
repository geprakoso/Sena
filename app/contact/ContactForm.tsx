"use client";

import { Widget } from "@typeform/embed-react";

export default function ContactForm() {
  return (
    <div 
      style={{ 
        width: "100%", 
        height: "600px", 
        borderRadius: "1rem", 
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
      }}
    >
      <Widget 
        id="01KR3FD6K30EDCQJHARZXWDQJP" 
        style={{ width: "100%", height: "100%" }}
        className="my-form"
      />
    </div>
  );
}
