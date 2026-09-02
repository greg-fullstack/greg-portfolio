# Greg Martirosian — Portfolio

A single-page portfolio site. Plain HTML/CSS/JS — no framework, no build step.

## Structure

```
index.html      page markup
css/style.css   design system + layout (dark, warm-toned, lime accent)
js/main.js      i18n (EN/ES), skills search/filter, project tabs, scroll effects
assets/         icons, résumé PDFs
```

## Development server

Any static file server works. For example:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Deployment

The site is fully static — publish the repository root as-is (e.g. GitHub Pages) with no build step required.
