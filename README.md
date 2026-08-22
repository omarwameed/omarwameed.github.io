# Portfolio - Omar Wameed

Bilingual (Arabic / English) portfolio for a front-end developer.
Live at **https://omar-wameed.websiteiq.workers.dev**

Plain HTML, CSS and JavaScript. No framework, no build step, no CDN.

## What is in here

| Path | Purpose |
| :-- | :-- |
| `index.html` | The whole page. Arabic copy lives directly in the markup |
| `styles.css` | Design tokens, light and dark themes, layout |
| `app.js` | English dictionary, language and theme switching, scroll reveal |
| `fonts/` | IBM Plex Sans Arabic and Space Grotesk, self hosted woff2 subsets |
| `img/` | Screenshots taken from the two live project sites |
| `wrangler.jsonc` | Cloudflare Workers static assets config |
| `.assetsignore` | Keeps `.git`, `.wrangler`, docs and config out of the published site |

## Language switching

Arabic is the source of truth and sits in `index.html`. English lives in the `EN`
object in `app.js`. On first run the script captures the Arabic strings from the
DOM, so both dictionaries stay in sync automatically.

Elements opt in through four attributes:

| Attribute | Translates |
| :-- | :-- |
| `data-i18n` | element text |
| `data-i18n-alt` | image `alt` |
| `data-i18n-aria` | `aria-label` |
| `data-i18n-title` | `title` |

Any new text needs both a `data-i18n` attribute and a matching key in `EN`,
otherwise it stays Arabic while the page is in English.

Switching also flips `lang` and `dir`, so every layout rule uses CSS logical
properties (`padding-inline-start`, `inset-inline-end`) rather than physical ones.

## Run it locally

Any static file server works:

```
python -m http.server 8772
```

Then open http://localhost:8772

## Deploy

```
npx wrangler deploy
```

Requires `npx wrangler login` once. On Windows PowerShell use `npx.cmd` if script
execution is disabled.
