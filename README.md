# Prathmesh Honrao Portfolio

A modern, single-page personal portfolio built as a static site for GitHub Pages.

## Local preview

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

1. Create a GitHub repository (for example, `prathmesh_honrao`).
2. Push these files to the repository root.
3. In GitHub, go to `Settings -> Pages`.
4. Under **Build and deployment**, set:
   - Source: `Deploy from a branch`
   - Branch: `main` and folder `/ (root)`
5. Save and wait for Pages to publish.

Your site URL will be:

- `https://<your-username>.github.io/<repo-name>/`

If the repo is named `<your-username>.github.io`, it will publish at:

- `https://<your-username>.github.io/`

## Customize quickly

- Profile text and experience: `/index.html`
- Colors and layout: `/styles.css`
- Animations and navigation behavior: `/script.js`
