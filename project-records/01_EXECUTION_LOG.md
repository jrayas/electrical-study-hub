# Project Execution & Change Log

All major architectural steps, commands executed, and file updates are recorded here in chronological order.

---

## 🚀 Live Deployment Information
- **Live Website**: [https://jrayas.github.io/electrical-study-hub/](https://jrayas.github.io/electrical-study-hub/)
- **Electrical Bookshelf**: [https://jrayas.github.io/electrical-study-hub/electrical/](https://jrayas.github.io/electrical-study-hub/electrical/)
- **GitHub Repository**: [https://github.com/jrayas/electrical-study-hub](https://github.com/jrayas/electrical-study-hub)
- **CI/CD Pipeline**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Status**: 🟢 Healthy, Deployed, and Verified (HTTP 200 OK across all endpoints)

---

## [Phase 1] - Project Initialisation & Scaffolding
- Initialized `@astrojs/starlight` base documentation template.
- Configured Git tracking on `main` branch.
- Created `project-records/` directory with full specifications.

---

## [Phase 2] - PDF.js Engine & Hypothesis Setup
- Downloaded official Mozilla PDF.js generic pre-built archive (`v6.3.289`).
- Extracted into `public/pdfjs/`.
- Configured CSP and injected Hypothesis annotation engine into `public/pdfjs/web/viewer.html`.

---

## [Phase 3] - Content Architecture & Shift to "Alternative 2" (Zero MDX)
- **Problem Identified**: Requiring an `.mdx` file for every single PDF introduces friction.
- **Architectural Shift**: Transitioned to **Alternative 2: Digital Bookshelf & Direct Full-Screen Viewer**.
  1. Built `src/components/PdfBookshelf.astro`:
     - Dynamically scans `public/study-files/[domain]/` at build time.
     - Automatically generates document cards with clean titles, formatted file sizes, download buttons, and direct 100% full-screen viewer launch links.
  2. Deleted obsolete MDX study wrappers (`circuit-analysis.mdx`, `power-systems.mdx`, `study-reader.mdx`).
  3. Transformed `src/content/docs/electrical/index.mdx` into the dynamic Bookshelf dashboard.
  4. Streamlined `astro.config.mjs` sidebar navigation.
  5. Workflow to add new books is now purely file-based: drop `.pdf` into `public/study-files/<domain>/` $\rightarrow$ push to GitHub.

---

## [Phase 4] - Deployment & GitHub Actions
- Created `.github/workflows/deploy.yml` with Node.js 22.
- Created remote GitHub repository `jrayas/electrical-study-hub`.
- Configured automated GitHub Pages deployment.
