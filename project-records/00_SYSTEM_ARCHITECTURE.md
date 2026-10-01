# System Architecture Specification: Digital Garden & Study Hub

## 1. Project Overview
A web-hosted digital garden and engineering study hub designed for deep document reading, active annotation, and modular domain-based knowledge structuring.

## 2. Core Technology Stack
- **Framework**: [Astro](https://astro.build/) with the `@astrojs/starlight` documentation integration.
- **PDF Engine**: [Mozilla PDF.js](https://mozilla.github.io/pdf.js/) (Generic release), served statically from `public/pdfjs/`.
- **Annotation Layer**: [Hypothesis](https://hypothes.is/) injected via `<script src="https://hypothes.is/embed.js" async></script>` into `public/pdfjs/web/viewer.html`.
- **Content Format**: Markdown / MDX (`.mdx`) in `src/content/docs/`.
- **Math & Equations**: KaTeX / MathJax syntax supported natively in Astro.
- **Search**: Built-in Pagefind search engine (client-side, zero-configuration).
- **Hosting**: GitHub Pages via automated GitHub Actions CI/CD.

## 3. Directory Layout
```
Gemini PDF/
├── project-records/                  # Master project tracking & documentation
│   ├── 00_SYSTEM_ARCHITECTURE.md     # Architecture specifications
│   ├── 01_EXECUTION_LOG.md           # Step-by-step changelog and commands
│   └── 02_TEMPLATE_USAGE_GUIDE.md    # Guide for cloning and creating new domains
├── public/
│   ├── pdfjs/                        # Mozilla PDF.js viewer, worker, and assets
│   │   ├── build/
│   │   └── web/
│   │       └── viewer.html           # Injected with Hypothesis script
│   └── study-files/                  # Raw PDF documents
│       ├── _templates/               # Sample reference PDF for template cloning
│       └── electrical/               # PDFs for electrical engineering modules
├── src/
│   └── content/
│       └── docs/
│           ├── index.mdx             # Homepage dashboard
│           ├── _templates/           # Blueprint templates for new domains
│           │   ├── domain-index.mdx  # Domain landing page template
│           │   └── study-reader.mdx  # Reader subpage template
│           └── electrical/           # Active domain
│               ├── index.mdx         # Electrical domain dashboard
│               └── *.mdx             # Study guide subpages embedding PDF.js
├── astro.config.mjs                  # Starlight navigation, sidebar, and config
└── package.json                      # Project dependencies and scripts
```

## 4. The PDF.js + Hypothesis Integration Mechanism
1. Raw PDFs are stored in `public/study-files/<domain>/<filename>.pdf`.
2. When Astro builds the site, contents of `public/` are served at the root URL path `/`.
3. In any `.mdx` file, an `iframe` is embedded:
   ```html
   <iframe 
     src="/pdfjs/web/viewer.html?file=/study-files/electrical/sample.pdf#view=FitH" 
     width="100%" 
     height="850px" 
     style="border: none; border-radius: 8px;" 
     allowfullscreen>
   </iframe>
   ```
4. `viewer.html` loads Mozilla PDF.js to render the PDF client-side.
5. Hypothesis (`embed.js`) hooks into the rendered PDF canvas/text layer inside the iframe, giving the user full annotation, highlighting, and notebook capabilities.
