# THE DADDIES — your dad band's favorite dad band

Static site. No build step, no framework, no dependencies. Open `index.html`
in a browser or serve the repo root — done.

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Any static host serves this repo as-is: GitHub Pages (Settings → Pages →
deploy from `main`, root), Vercel, Netlify, S3. Everything is relative-path
and self-contained — fonts included, zero external requests.

## Drop zones (the site wires itself up as files appear)

Every photo/video/audio slot on the site shows a styled "pending" placeholder
until the real file exists at the path below. Add the file, refresh, done —
no code changes needed.

### Photos (go big — high-res, portrait 3:4 works best)

| Who | Path |
|---|---|
| Josh (guitar) | `assets/img/daddies/josh-guitar.jpg` |
| Josh (drums) | `assets/img/daddies/josh-drums.jpg` |
| Alex (bass) | `assets/img/daddies/alex-bass.jpg` |
| Seth (guitar) | `assets/img/daddies/seth-guitar.jpg` |
| Amy (vocals) | `assets/img/mommies/amy.jpg` |
| Erin (vocals) | `assets/img/mommies/erin.jpg` |
| Brian Justin Crum | `assets/img/bigdaddies/brian-justin-crum.jpg` |
| Full band (wide shot) | `assets/img/band/full-band.jpg` |
| Video poster (Milwaukee) | `assets/img/band/milwaukee-poster.jpg` |
| Social share image | `assets/img/band/og.jpg` (1200×630) |

### Video

- Milwaukee PrideFest headline set → `assets/video/milwaukee-pride.mp4`
- Vault clips → `assets/video/clip-01.mp4`, `clip-02.mp4`, `clip-03.mp4`

Prefer YouTube? Paste video IDs into `CONFIG.youtube` at the top of
`js/main.js` and the players swap to (privacy-enhanced) embeds automatically.

### Sound clips

- `assets/audio/01-dont-stop-believin.mp3`
- `assets/audio/02-pink-pony-club.mp3`
- `assets/audio/03-total-eclipse.mp3`
- `assets/audio/04-espresso.mp3`

Want different tracks? Edit the four `.track` blocks in `index.html`
(titles + `data-src` paths).

## Things to update before the world sees it

1. **Booking email** — `book@thedaddiesband.com` is a placeholder. Change it in
   `CONFIG.bookingEmail` (`js/main.js`) *and* the three `mailto:` links in
   `index.html`.
2. **Social handles** — `@thedaddiesband` everywhere in the `#social` section
   of `index.html`. Swap for the real ones.
3. **Members** — profiles/bios live in two places: cards in `index.html`,
   dossier stats + bios in the `MEMBERS` object in `js/main.js`.
4. **Setlists** — three sample sets in the `#setlists` section of `index.html`.

## Built-in toys

- **The count-in** — first visit each session gets counted in, 1-2-3-4.
  Skipped for repeat visits, reduced-motion users, and `?static` URLs.
- **Dossiers** — click any member card.
- **DAD MODE** — the switch in the nav. Flip it. We're not sorry.

## Fonts

Self-hosted in `assets/fonts/` (Anton, Fraunces, Archivo, Courier Prime — all
Open Font License via Google Fonts). No external requests, no tracking.
