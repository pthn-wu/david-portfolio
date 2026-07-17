# How to update your website

Almost everything you'd ever want to change lives in **one file**:

> **`js/content.js`**

It's organized top-to-bottom in the same order as the page: hero → banner →
work → experience → writing → now → footer. Each section has comments
explaining what you can change.

## The golden rules

1. **Only change text between quotes** — `"like this"`.
2. **Keep the commas** at the end of lines and after `}` blocks.
3. Commit the change to GitHub — Vercel redeploys the site automatically
   within a minute or two. There's no build step.

## The easiest way to edit (no tools needed)

1. Open `js/content.js` in this repo on **github.com**
2. Click the **pencil icon** (Edit this file)
3. Make your change, then click **Commit changes**
4. Wait ~1 minute — your live site updates itself

This works from a phone, too. You can also ask Claude to make changes and
push them for you.

## Common edits

### Change any wording
Find the text in `js/content.js` and edit it. For example, to change your
bio, edit `hero.subtitle`.

### Add a project card
In `workSection.cards`, copy one of the existing `{ ... },` blocks, paste it
after, and edit the title, description, tag, and demo file. Put the demo's
HTML file in `assets/demos/` and point `demo:` at it. Cards automatically
alternate text-left / text-right.

### Add or remove a job
In `experienceSection.roles`, add or delete a whole `{ ... },` block.
Bullets are a simple list of strings — wrap a phrase in `**double stars**`
to make it **bold**.

### Add an interest card
In `nowSection.cards`, copy a block and change the emoji, title, and
description.

### Change the scrolling banner words
Edit the `marquee` list. Each entry is one phrase; the Spurs logo is placed
between them automatically.

### Change your email
Update `email` at the top **and** the `mailto:` link in `footer.buttons`.

### Swap an image
Upload the new image to `assets/images/` and update the matching path in
`js/content.js` (e.g. the G&G logo on the supplier-portal card, or the
Spurs crest on the COYS card).

## What NOT to touch (unless you want to)

- `index.html` — the page skeleton. No content lives here.
- `css/styles.css` — colors, fonts, spacing, animations.
- `js/main.js` — the code that reads `content.js` and builds the page.

## If the page ever comes up blank

You most likely have a typo in `js/content.js` — usually a missing quote or
comma. Open the browser's console (F12 → Console) and it will point at the
line. Undo your last change (on GitHub: the file's History → revert) and
try again.

## Previewing on your computer (optional)

If you've downloaded the repo, run a tiny local server from its folder:

```
python3 -m http.server 8000
```

then open http://localhost:8000 in your browser. (Double-clicking
`index.html` mostly works too, but browsers may block the demo pop-ups
from local files.)
