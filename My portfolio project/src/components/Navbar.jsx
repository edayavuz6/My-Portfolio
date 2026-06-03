export default function Navbar({ dark, setDark }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-4 border-b"
      style={{
        background: dark ? "rgba(13,11,26,0.88)" : "rgba(248,246,255,0.88)",
        backdropFilter: "blur(20px)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="font-display text-2xl font-bold italic"
        style={{ color: "var(--text)" }}
      >
        edadev<span style={{ color: "var(--neon-pink)" }}>.</span>
      </div>

      <ul className="hidden md:flex gap-10 list-none">
        {["Home", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium uppercase tracking-widest relative group"
              style={{ color: "var(--text-muted)" }}
            >
              {item}
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, var(--neon-purple), var(--neon-pink))",
                }}
              />
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setDark(!dark)}
        className="w-10 h-10 rounded-full flex items-center justify-center border text-base transition-all"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
          color: "var(--text-muted)",
        }}
        aria-label="Toggle theme"
      >
        {dark ? "☀" : "☾"}
      </button>
    </nav>
  );
}
