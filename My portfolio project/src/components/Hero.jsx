export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid items-center gap-16 pt-28 pb-16 px-16 mx-auto"
      style={{
        gridTemplateColumns: "1fr auto 1fr",
        maxWidth: "1300px",
      }}
    >
      {/* LEFT */}
      <div className="fade-up">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest text-white rounded-full px-4 py-1.5 mb-6"
          style={{
            background:
              "linear-gradient(135deg, var(--neon-purple), var(--neon-pink))",
            boxShadow: "0 4px 15px rgba(168,85,247,0.35)",
          }}
        >
          ✦ Available for freelance &amp; full-time
        </span>

        <h1
          className="font-display font-bold leading-[1.05] tracking-tight mb-5"
          style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", color: "var(--text)" }}
        >
          Frontend
          <br />
          &amp;{" "}
          <em className="font-light not-italic grad-text">
            Email Template
            <br />
            Developer
          </em>
        </h1>

        <p
          className="text-sm leading-relaxed mb-9 font-light max-w-sm"
          style={{ color: "var(--text-muted)" }}
        >
          I build clean, user-friendly web interfaces with React &amp; Tailwind
          CSS, and craft pixel-perfect email templates with MJML &amp; HTML. I
          don't just write code — I engineer solutions.
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl text-sm font-semibold tracking-wide text-white transition-all hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, var(--neon-purple), var(--neon-pink))",
              boxShadow: "0 4px 20px rgba(168,85,247,0.4)",
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-xl text-sm font-medium tracking-wide border transition-all"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--neon-green)";
              e.currentTarget.style.color = "var(--neon-green)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* CENTER — avatar */}
      <div className="fade-up delay-1 flex flex-col items-center">
        <div className="avatar-frame">
          <img
            src="img/portfolio pp-.png"
            alt="Eda Yavuz"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="flex items-center gap-2 mt-4 text-xs font-semibold tracking-wide"
          style={{ color: "var(--neon-green)" }}
        >
          <span
            className="badge-dot w-2 h-2 rounded-full inline-block"
            style={{
              background: "var(--neon-green)",
              boxShadow: "0 0 8px var(--neon-green)",
            }}
          />
          Open to work
        </div>
      </div>

      {/* RIGHT — about card */}
      <div className="fade-up delay-2">
        <div
          className="rounded-2xl p-8 relative overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow)",
            maxWidth: "360px",
          }}
        >
          {/* gradient top border */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background:
                "linear-gradient(90deg, var(--neon-purple), var(--neon-pink), var(--neon-green))",
            }}
          />

          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--neon-purple), var(--neon-pink))",
              }}
            >
              EY
            </div>
            <div>
              <div
                className="font-semibold text-sm"
                style={{ color: "var(--text)" }}
              >
                Eda Yavuz
              </div>
              <div
                className="text-xs font-medium"
                style={{ color: "var(--neon-purple)" }}
              >
                Frontend &amp; Email Dev.
              </div>
            </div>
          </div>

          <p
            className="text-sm leading-relaxed font-light mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            Hi! I'm Eda. My hunger for growth and innovative perspective always
            bring a fresh touch to my projects. If you're looking for a modern,
            aesthetic, and functional partner — you're in the right place. Let's
            build something great together!
          </p>

          <div
            className="flex gap-6 pt-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {[
              ["10+", "Projects"],
              ["10+", "Technologies"],
              ["1+", "Years Exp."],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl font-bold leading-none grad-text">
                  {n}
                </div>
                <div
                  className="text-xs uppercase tracking-widest mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
