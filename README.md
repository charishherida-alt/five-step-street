# Five step street — interactive

This is the exported Claude Design interactive for ORI-06 (Why this course runs in order),
set up to run as a static site so it can be hosted on GitHub Pages.

## What's in here

- `index.html` — the interactive itself (was `Five step street.dc.html`, renamed so it
  loads automatically as the site's home page)
- `support.js` — the Claude Design runtime that renders the interactive in the browser
- `assets/` — the TAFE Gippsland design system (colours, type, spacing, shared
  components) that the interactive is built on
- `.nojekyll` — an extra safety net that tells GitHub Pages to skip its default Jekyll
  processing step entirely (not required anymore since nothing in here starts with an
  underscore, but harmless to keep)

None of the files or folders in this package start with `_` or `.` anymore (apart from
`.nojekyll` itself), specifically so GitHub Pages can never silently drop one during
its default build — that was the issue with the previous version of this zip.

Do not rename or move `support.js` or the `assets/` folder, and keep them alongside
`index.html` — the page loads them by relative path.

## Publish it on GitHub Pages

1. Create a new repository on GitHub (Public is simplest; a private repo also works if
   you're on a paid plan that supports Pages on private repos).
2. Upload everything in this folder to the repo root, keeping the folder structure intact
   (drag-and-drop on github.com preserves folder structure, or use `git add .` if you're
   using the command line).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch", pick the
   branch (usually `main`) and folder `/ (root)`, then save.
5. GitHub will give you a URL shortly after, typically:
   `https://<your-username>.github.io/<repo-name>/`
   That link opens `index.html` directly — no extra path needed.

## Note on external dependencies

The interactive loads React, ReactDOM and Babel from unpkg.com at runtime (this is how
Claude Design's runtime works, not something added for GitHub). That means the page
needs an internet connection to render, but it does not need any server-side code —
plain static hosting (GitHub Pages, Netlify, or opening `index.html` directly in a
browser) is enough.
