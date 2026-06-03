const projects = [
  {
    title: "Habit Tracker",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A clean and functional web app built with HTML, CSS & JS to help users build consistency by tracking their daily habits.",
    img: "img/habit-tracker.png",
    link: "https://edayavuz6.github.io/Habit-Tracker/",
  },
  {
    title: "Lumina AI — SaaS Email Template",
    tags: ["MJML", "Email"],
    desc: "A premium, high-conversion SaaS email template crafted with MJML for flawless responsiveness across all email clients.",
    img: "img/lumina-ai.png",
    link: "https://edayavuz6.github.io/Lumina-AI--Premium-SaaS-Email-Template/",
  },
  {
    title: "WealthWise — Finance Tracker",
    tags: ["JavaScript", "Chart.js"],
    desc: "Vanilla JS finance tracker with Chart.js visualizations, PDF export, and dark/light theme support.",
    img: "img/wealth-wise.png",
    link: "https://edayavuz6.github.io/WealthWise-app/",
  },
  {
    title: "Lectus Academy — Welcome Email",
    tags: ["MJML", "Email"],
    desc: "A professional educational SaaS email template designed for cross-platform compatibility and high engagement.",
    img: "img/lectus-academy.png",
    link: "https://edayavuz6.github.io/Lectus-Academy-SaaS-email-template/",
  },
  {
    title: "CineFlux — Discover Cinema",
    tags: ["JavaScript", "TMDB API"],
    desc: "A premium movie discovery app built with vanilla HTML, CSS & JavaScript — powered by the TMDB API.",
    img: "img/cine-flux.png",
    link: "https://edayavuz6.github.io/CineFux/",
  },
  {
    title: "Serenity — Onboarding Email",
    tags: ["MJML", "Email"],
    desc: "A minimalist, responsive SaaS onboarding email template with optimized typographic hierarchy and cross-platform compatibility.",
    img: "img/serenity.png",
    link: "https://edayavuz6.github.io/Serenity-Saas-Email-Template/",
  },
  {
    title: "Project Name",
    tags: ["—"],
    desc: "Description coming soon.",
    img: null,
    link: "#",
    empty: true,
  },
  {
    title: "Project Name",
    tags: ["—"],
    desc: "Description coming soon.",
    img: null,
    link: "#",
    empty: true,
  },
  {
    title: "Project Name",
    tags: ["—"],
    desc: "Description coming soon.",
    img: null,
    link: "#",
    empty: true,
  },
  {
    title: "Project Name",
    tags: ["—"],
    desc: "Description coming soon.",
    img: null,
    link: "#",
    empty: true,
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden border-[1.5px] transition-all duration-300"
      style={{
        background: "var(--surface)",
        borderColor: hovered ? "var(--neon-purple)" : "var(--border)",
        boxShadow: hovered
          ? "0 12px 40px rgba(168,85,247,0.2)"
          : "var(--shadow)",
        transform: hovered ? "translateY(-6px)" : "none",
        opacity: project.empty ? 0.45 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="h-40 flex items-center justify-center border-b overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--bg2), var(--bg3))",
          borderColor: "var(--border)",
        }}
      >
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Coming Soon
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[0.65rem] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(124,58,237,0.1)",
                color: "var(--neon-purple)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <h3
          className="font-display font-semibold text-base mb-1.5"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-xs font-light leading-relaxed mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          {project.desc}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-bold uppercase tracking-wide grad-text inline-flex items-center gap-1.5 transition-all hover:gap-3"
        >
          View Live →
        </a>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-16 max-w-[1300px] mx-auto">
      <div className="text-center mb-14 fade-up">
        <span className="section-tag mb-3 inline-block">Work</span>
        <h2
          className="font-display font-bold tracking-tight mb-2"
          style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "var(--text)" }}
        >
          Featured <em className="font-light not-italic grad-text">Projects</em>
        </h2>
        <p
          className="text-sm font-light"
          style={{ color: "var(--text-muted)" }}
        >
          A selection of my recent work
        </p>
      </div>
      <div
        className="grid gap-5 fade-up delay-1"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
