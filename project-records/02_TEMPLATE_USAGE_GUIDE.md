# Template Usage Guide: Adding New Domains & Study Files

This guide explains how to add a new domain (e.g. *Coding*, *Physics*, *Biology*) or a new study book/paper in under 60 seconds using the pre-configured template files.

---

## 1. Adding a New Study Guide to an Existing Domain

When you have a new PDF for an existing domain (e.g. `electrical`):

### Step 1: Drop the PDF
Place your raw PDF into the domain's public folder:
```
public/study-files/electrical/your-new-book.pdf
```

### Step 2: Copy the Reader Template
Copy `src/content/docs/_templates/study-reader.mdx` into your domain folder:
```
src/content/docs/electrical/your-new-topic.mdx
```

### Step 3: Update the Component & Frontmatter
In `your-new-topic.mdx`:
1. Change the `title` and `description` in the frontmatter.
2. Update the `<PdfViewer />` component tag:
   ```astro
   <PdfViewer file="/study-files/electrical/your-new-book.pdf" />
   ```
   *(The `PdfViewer` component automatically handles GitHub Pages subpath routing and local development).*
3. Add any chapter summaries, LaTeX formulas, or notes below.

---

## 2. Adding an Entirely New Domain (e.g., Coding, Science)

When you want to add a whole new subject:

### Step 1: Create the Storage Folder
Create a folder for the new domain under `public/study-files/`:
```powershell
New-Item -ItemType Directory -Path "public/study-files/coding"
```

### Step 2: Copy the Domain Template
Copy `src/content/docs/_templates/` to a new folder in `src/content/docs/`:
```powershell
Copy-Item -Recurse "src/content/docs/_templates" "src/content/docs/coding"
```

### Step 3: Register in `astro.config.mjs`
Add the new domain to the `sidebar` array in `astro.config.mjs`:
```javascript
{
  label: '💻 Coding',
  autogenerate: { directory: 'coding' },
}
```

### Step 4: Link on the Homepage
Add a card for the new domain on `src/content/docs/index.mdx`.
