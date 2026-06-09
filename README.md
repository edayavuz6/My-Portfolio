
# ⚡ Eda Yavuz — Developer Portfolio

**Premium Frontend Developer Portfolio · Built with React, Tailwind CSS & Framer Motion**

<br />

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br />

[🌐 Live Demo](https://edayavuz6-portfolio.vercel.app) · [📧 Contact Me](mailto:edayavuzcontact@gmail.com) · [💼 LinkedIn](https://www.linkedin.com/in/eda-yavuz-646011377/)

</div>

---

## 📸 Preview

| Dark Mode | Light Mode |
|---|---|
| Deep navy/black with purple-pink accents | Clean white with subtle gradients |

> Inspired by the design philosophy of **Linear**, **Vercel**, **Stripe**, and **Awwwards**-winning portfolios.

---

## ✨ Features

### 🎨 Design & Aesthetics
- **Dark / Light Mode** — Smooth `0.4s` theme transition, preference saved to `localStorage`
- **Glassmorphism** — Frosted glass effects on cards, floating elements and overlays
- **Gradient Accents** — Purple → Pink → Cyan gradient system throughout
- **Noise Texture** — Subtle film grain overlay for depth and premium feel
- **Grid Background** — Subtle dot/line grid inspired by Linear and Vercel
- **Premium Typography** — Syne (display) + Inter (body) for editorial hierarchy

### 🧭 Navigation
- **Animated Navbar** — Slides in on load with Framer Motion entrance animation
- **Scroll-aware** — Becomes glass/blurred on scroll with smooth transition
- **Active state** — Current section highlighted automatically
- **Responsive** — Hamburger menu on mobile with animated drawer

### 🦸 Hero Section
- **Mouse Parallax** — Avatar and background elements follow cursor movement via `useSpring`
- **Animated Title** — Each word animates in independently with staggered delay
- **Floating Cards** — 4 skill cards orbit around the avatar with entrance animations
- **Status Badge** — Animated pulsing "Available for work" indicator
- **Social Links** — GitHub, LinkedIn, Email icon buttons with hover effects
- **Scroll Indicator** — Animated arrow with looping motion

### 👩‍💻 About Section
- **Career Timeline** — Visual vertical timeline with gradient connector lines
- **Animated Stats** — Counter cards: Projects, Hours, Lines of Code, Tech Stacks
- **"What I Bring" Card** — Value proposition list with gradient top border
- **Scroll Reveal** — All elements animate in when scrolled into view via `useInView`

### 🛠️ Skills Section
- **Infinite Marquee** — Two rows of skill pills scrolling in opposite directions
- **Neon Hover Effects** — Each skill pill glows with its brand color on hover
- **Feature Cards** — Frontend Engineering, Email Development, UI/UX Design breakdowns
- **All skills included** — HTML, CSS, JS, React, Tailwind, Bootstrap, Figma, Git, GitHub, MJML, WordPress, VS Code

### 🗂️ Projects Section
- **Filter System** — Filter by All / React / JavaScript / MJML / HTML / Email
- **AnimatePresence** — Smooth layout transitions when filtering
- **Hover Preview Overlay** — "View Live" and "GitHub" buttons appear on card hover
- **Featured Badge** — Highlighted projects marked with gradient badge
- **Image Zoom** — Subtle scale animation on product image hover
- **8 Real Projects** — All with live demos and GitHub links

### 📬 Contact Section
- **Copy Email** — One-click clipboard copy with visual confirmation
- **Availability Status** — Animated pulsing green dot
- **Social Cards** — GitHub, LinkedIn, Email with brand-colored hover glows
- **Large CTA Card** — Glassmorphism card with radial glow and gradient top border

### ⚡ Animations (Framer Motion)
- Page entrance animations on all sections
- `useInView` scroll-triggered reveals across every component
- `useMotionValue` + `useSpring` for fluid mouse parallax
- `AnimatePresence` for smooth mount/unmount transitions
- `whileHover` and `whileTap` micro-interactions on all interactive elements
- Staggered animation delays for visual hierarchy

---

## 🏗️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18 | UI framework |
| [Vite](https://vitejs.dev) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animations & transitions |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | v4 | Tailwind v4 Vite plugin |
| [Google Fonts](https://fonts.google.com) | — | Syne + Inter typography |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── img/
│       ├── portfolio pp-.png     # Profile photo
│       ├── habit-tracker.png     # Project screenshots
│       ├── lumina-ai.png
│       ├── wealth-wise.png
│       ├── lectus-academy.png
│       ├── cine-flux.png
│       ├── serenity.png
│       ├── elenor.png
│       └── portfolio.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed nav — dark toggle, scroll-aware
│   │   ├── Hero.jsx          # Mouse parallax, floating cards, animated title
│   │   ├── About.jsx         # Timeline, stats, value proposition
│   │   ├── Skills.jsx        # Infinite marquee, neon hover effects
│   │   ├── Projects.jsx      # Filterable grid, hover preview overlay
│   │   ├── Contact.jsx       # Copy email, social cards, CTA
│   │   └── Footer.jsx        # Logo, nav links, copyright
│   ├── App.jsx               # Root — theme state, dark/light logic
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles, CSS vars, animations
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🗺️ Roadmap

- [ ] React Router — individual project detail pages
- [ ] Blog section — writing about frontend & email dev
- [ ] Cursor follower — custom animated cursor
- [ ] Page transition — smooth route-based transitions
- [ ] Contact form — functional form with email sending
- [ ] i18n — Turkish / English language toggle

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👩‍💻 Author

**Eda Yavuz** — Frontend & Email Template Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-edayavuz6--portfolio.vercel.app-8B5CF6?style=flat-square&logo=vercel)](https://edayavuz6-portfolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Eda_Yavuz-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/eda-yavuz-646011377/)
[![GitHub](https://img.shields.io/badge/GitHub-edayavuz6-181717?style=flat-square&logo=github)](https://github.com/edayavuz6)
[![Email](https://img.shields.io/badge/Email-edayavuzcontact%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:edayavuzcontact@gmail.com)

---

<div align="center">

Built with ❤️ using React, Tailwind CSS & Framer Motion

⭐ If you like this portfolio, please give it a star!

</div>

