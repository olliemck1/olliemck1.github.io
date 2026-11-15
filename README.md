# olliemck.me — Developer & Systems Portfolio

Personal developer portfolio and interactive systems telemetry web application for **Oliver McKenna**, second-year Mathematics & Computer Science undergraduate at Durham University.

Hosted on [olliemck.me](https://olliemck.me) via GitHub Pages (`olliemck1.github.io`).

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation & Transitions:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Aesthetic:** Linear & Raycast-inspired obsidian dark mode (`#09080D` / `#111018`) with electric violet accents (`#8B5CF6`) and emerald availability indicator (`#10B981`)

## Features

- **4-Column Bento Grid Layout:** Responsive grid highlighting identity, academic profile, telemetry hub, concurrent C tools, and homelab infrastructure.
- **Interactive `zsh` Terminal (`ollie@durham:~ — zsh`):**
  - Pre-populated `neofetch` ASCII emblem & hardware specs
  - Virtual filesystem with `help`, `whoami`, `ls`, `cat`, `hexdump -C cv.bin`, `ping thinkcentre`, `clear`, and LaTeX outputs
  - Real keyboard input with command history navigation (`Up`/`Down`) and `Tab` completion
  - Fullscreen expansion toggle (`⤢`)
  - Clickable command shortcuts
- **Slide-Over Detail Drawers:** Rich deep-dive drawers with architecture diagrams, technical hurdles, and metrics.
- **Global `Cmd+K` / `Ctrl+K` Command Palette:** Modal quick navigation across projects, terminal executions, actions, and links.
- **Print CV Support:** Dedicated `@media print` stylesheet formatting an academic/technical CV.
- **Automated CI/CD:** GitHub Actions workflow deploying to GitHub Pages on push to `main`.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
