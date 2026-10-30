# From Skills to Complex Manipulation: Grounding, Learning and Control

Website for the ICRA 2027 workshop on 24 or 28 May 2027 (shown as 24/28 May 2027) at Coex, Seoul.

Live site: https://from-skills-to-complex-manipulation.github.io

The site is plain HTML and CSS with no build step. GitHub Pages publishes every push to `master` within a minute or two. You can also edit files directly on github.com.

## Files

| File | Contents |
| --- | --- |
| `index.html` | Home |
| `program.html` | Schedule |
| `speakers.html` | Keynotes, invited speakers and the panel |
| `organizers.html` | Organizers and contact |
| `call-for-papers.html` | Call for papers |
| `privacy.html`, `terms.html` | Footer pages |
| `404.html` | Shown for broken links |
| `assets/css/style.css` | All styling. Colors and fonts are defined at the top. |
| `assets/js/main.js` | Mobile menu |
| `assets/img/` | ICRA logo and the social preview image (`og-image.png`) |
| `assets/fonts/` | Self-hosted fonts (SIL Open Font License) |

## Common edits

**Filling in placeholders.** Everything still waiting for real content has `class="tba"` and shows in grey. Search the HTML files for `tba`. Once you replace the text, remove the `tba` class.

**Adding a photo.** Put a square image, at least 400×400, in `assets/img/people/`. In the person's card, replace the `<svg>…</svg>` inside `<div class="person-photo">` with:

```html
<img src="assets/img/people/jane-doe.jpg" alt="" loading="lazy">
```

The `alt` is empty because the name is printed right under the photo.

**Changing the date.** Search all `.html` files for `24/28` and `first day/last day`. The social preview image `assets/img/og-image.png` also shows the date, so it needs to be regenerated.

**Changing the menu or footer.** Each page has its own copy of the header and footer, so update every `.html` file.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Design notes

- The three colors come from the ICRA 2027 logo: green for Grounding, amber for Learning, purple for Control.
- Fonts: Source Serif 4 for headings, IBM Plex Sans for text and IBM Plex Mono for labels.
- The site loads nothing from third parties: no analytics, no cookies, no external fonts. Keep it that way, or update `privacy.html`.
