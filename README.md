# Kaitlyn Huynh Portfolio (GitHub Pages)

A modern, futuristic, static personal portfolio website built with HTML5, CSS3, and vanilla JavaScript.

## File Structure

```text
.
├── about-me-pic.png
├── index.html
├── script.js
├── styles.css
└── README.md
```

## Local Development

Run a local static server from the project root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Commit and push the repository to GitHub.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your deploy branch)
   - **Folder**: `/ (root)`
4. Save and wait for deployment.
5. Your site will be live at:
   - `https://<your-github-username>.github.io/<repository-name>/`

## Notes

- This site is fully static and GitHub Pages compatible.
- It uses smooth scrolling, scroll-triggered reveal animations, and an animated particle background.
