const contacts = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/edayavuz6",
    hoverColor: "#a855f7",
    hoverBg: "rgba(168,85,247,0.12)",
    svg: (
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eda-yavuz-646011377/",
    hoverColor: "#38bdf8",
    hoverBg: "rgba(56,189,248,0.12)",
    svg: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    key: "email",
    label: "Email",
    href: "mailto:edayavuzcontact@gmail.com",
    hoverColor: "#ff6b9d",
    hoverBg: "rgba(255,107,157,0.12)",
    svg: (
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    ),
  },
];

import { useState } from "react";

function SocialCard({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.href}
      target={item.key !== "email" ? "_blank" : undefined}
      rel="noreferrer"
      className="flex flex-col items-center gap-3 rounded-2xl border-[1.5px] transition-all duration-300"
      style={{
        width: "110px",
        padding: "1.5rem 1rem",
        background: "var(--surface)",
        borderColor: hovered ? item.hoverColor : "var(--border)",
        boxShadow: hovered
          ? `0 8px 30px ${item.hoverColor}50`
          : "var(--shadow)",
        transform: hovered ? "translateY(-6px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-13 h-13 rounded-full flex items-center justify-center p-3 transition-all duration-300"
        style={{
          width: "52px",
          height: "52px",
          background: hovered ? item.hoverBg : "var(--bg2)",
          color: hovered ? item.hoverColor : "var(--text-muted)",
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          {item.svg}
        </svg>
      </div>
      <span
        className="text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-muted)" }}
      >
        {item.label}
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-16 max-w-[1300px] mx-auto text-center"
    >
      <div className="fade-up mb-12">
        <span className="section-tag mb-3 inline-block">Contact</span>
        <h2
          className="font-display font-bold tracking-tight mb-2"
          style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "var(--text)" }}
        >
          Let's{" "}
          <em className="font-light not-italic grad-text">Work Together</em>
        </h2>
        <p
          className="text-sm font-light"
          style={{ color: "var(--text-muted)" }}
        >
          Have a project in mind? Let's talk.
        </p>
      </div>
      <div className="flex justify-center gap-8 flex-wrap mb-6 fade-up delay-1">
        {contacts.map((c) => (
          <SocialCard key={c.key} item={c} />
        ))}
      </div>
      <p
        className="text-xs fade-up delay-2"
        style={{ color: "var(--text-muted)" }}
      >
        Click Email to open your mail app and reach me at{" "}
        <strong className="grad-text">edayavuzcontact@gmail.com</strong>
      </p>
    </section>
  );
}
