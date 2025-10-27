# My Local Website (starter)

This is a small static website starter using HTML, CSS and a tiny bit of JavaScript for simple animations.

Files created:
- `index.html` — main page
- `css/styles.css` — styles and animations
- `js/script.js` — small interactive behaviors
- `package.json` — optional npm start script for live-server

How to run locally

Option A — Open directly
1. Open `index.html` in your browser (double-click or right-click -> Open with). This works for basic testing but some features (fetch, modules) can be limited due to file:// restrictions.

Option B — Python (recommended quick server)
Open PowerShell in this folder and run:

```powershell
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

Option C — npm + live-server (optional)
If you have Node.js installed, you can install dev dependencies and run the start script:

```powershell
npm install
npm start
```

This will open the site using `live-server` and refresh on file changes.

Next steps
- Customize content in `index.html`.
- Add images into an `assets/` folder and reference them.
- Expand CSS, add components, or include a bundler if you add tooling.

Enjoy building!