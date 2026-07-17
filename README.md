# David — personal portfolio

One-page portfolio site for Phyo Thihan Nyein (David): strategy & business
development work, interactive AI-prototype demos, writing
([Inquisitive Introvert](https://inquisitiveintrovert.substack.com/)), and
interests.

Plain HTML/CSS/JS — no build step, no dependencies. Deployed on Vercel;
every push to `main` goes live automatically.

## Updating the site

**All content lives in [`js/content.js`](js/content.js).**
See **[HOW-TO-EDIT.md](HOW-TO-EDIT.md)** for a plain-language guide.

## Structure

| Path | What it is |
|---|---|
| `index.html` | Page skeleton (no content here) |
| `js/content.js` | **All site content — edit this** |
| `js/main.js` | Renders the page from `content.js` |
| `css/styles.css` | All styling and animations |
| `assets/demos/` | The interactive project prototypes (open in pop-ups) |
| `assets/images/` | Logos and images |
