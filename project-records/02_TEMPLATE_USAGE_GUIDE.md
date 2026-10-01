# Template Usage Guide: Adding New Domains & Study Files (Alternative 2: Zero MDX)

With the **Digital Bookshelf & Direct Full-Screen Viewer** architecture, you **never** need to create individual MDX files for your books or research papers.

---

## 1. Adding a New Study PDF to an Existing Domain

When you have a new PDF for an existing domain (e.g. `electrical`):

### Step 1: Drop the PDF
Place your raw PDF into the domain's public folder:
```
public/study-files/electrical/your-textbook.pdf
```

### Step 2: Push to GitHub
```powershell
git add .
git commit -m "add: new electrical textbook"
git push
```

**That's it!** The electrical bookshelf page (`/electrical`) will automatically detect the new file, format its title, show the file size, and create the direct full-screen reader link with Hypothesis annotation.

---

## 2. Adding an Entirely New Domain (e.g. Coding, Math, Science)

When you want to add a whole new subject:

### Step 1: Create the Storage Folder & Drop PDFs
Create a folder for the new domain under `public/study-files/` and add your PDFs:
```powershell
New-Item -ItemType Directory -Path "public/study-files/coding"
# Drop your coding PDFs into public/study-files/coding/
```

### Step 2: Create the Domain Dashboard (Only 1 File per Domain)
Create `src/content/docs/coding/index.mdx`:
```mdx
---
title: "💻 Computer Science & Coding Library"
description: "Direct full-screen PDF study library for computer science and coding."
---

import PdfBookshelf from '../../../components/PdfBookshelf.astro';

Welcome to the **Coding** study library.

<PdfBookshelf domain="coding" />
```

### Step 3: Register the Domain in `astro.config.mjs`
Add one line to the `sidebar` array:
```javascript
{ label: '💻 Coding Library', slug: 'coding' },
```

### Step 4: Push to GitHub
All PDFs in that folder are now live in your new digital library!
