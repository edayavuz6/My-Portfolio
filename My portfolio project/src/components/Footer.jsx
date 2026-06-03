export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-16 py-6 text-xs border-t"
      style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
    >
      <span
        className="font-display text-lg font-bold italic"
        style={{ color: "var(--text)" }}
      >
        edadev<em className="grad-text not-italic">.</em>
      </span>
      <span>© 2026 Eda Yavuz — All rights reserved</span>
      <span>Built with React & Tailwind CSS</span>
    </footer>
  );
}
