# Daffa Narendra Hutapea - Portfolio Website

A bold, modern, single-page portfolio built with **HTML + Tailwind CSS + vanilla JavaScript**.
No installation, no build step - it just runs in your browser.

**Live site:** https://daphutapea.github.io

---

## How to view it locally

**The easy way:** open the folder and **double-click `index.html`**. It opens in your browser. Done.

> Note: It needs an internet connection the first time you open it, because the fonts and the
> Tailwind styling library load from the web.

---

## What's in here

```
Web Porto Project/
|-- index.html        <- the whole page (text content lives here)
|-- css/styles.css    <- colors, animations, card styles
|-- js/main.js        <- menu, scroll effects, typing animation, contact form
|-- assets/           <- your photo (profile.jpg) and CV PDF live here
+-- README.md         <- this file
```

---

## How to edit your information

All your text lives in **`index.html`**. Open it in any text editor (even Notepad works,
but [VS Code](https://code.visualstudio.com/) is nicer and free). Look for the big comment
banners like `<!-- ===== ABOUT ===== -->` to find each section.

Common edits:

| You want to change... | Find this in `index.html` |
|---|---|
| Your headline / tagline | the `HERO` section |
| The "About" paragraphs | the `ABOUT` section |
| Stats (GPA, scores) | the `stat-card` blocks |
| A skill | the `tag` items in the `SKILLS` section |
| A project | the `<article class="project-card">` blocks |
| Contact links | the `CONTACT` section |

The roles that "type" themselves in the hero are in **`js/main.js`**, in the `roles = [...]` list.

---

## Your photo

Done - the hero shows your headshot from `assets/profile.jpg` (an optimized, web-sized copy).
To change it later, replace that file (square images look best) and bump the `?v=` number on
the `<img src="assets/profile.jpg?v=2">` tag in `index.html` so browsers load the new one.

---

## Add your CV for download (optional)

1. Compile your `resume.tex` to a PDF (e.g. with [Overleaf](https://overleaf.com)) and save it as
   `assets/Daffa_Narendra_Hutapea_CV.pdf`.
2. Tell me and I'll wire up a "Download CV" button in the hero - or add it yourself by
   copying one of the existing buttons and pointing its `href` to that file.

---

## How it is hosted

The site is published for free with **GitHub Pages** from the repo `daphutapea/daphutapea.github.io`.
Because the repo is named `<username>.github.io`, GitHub serves it at the root URL
https://daphutapea.github.io and rebuilds automatically on every push to `main`.

**To update the live site:** edit the files, then run:

```
git add -A
git commit -m "your message"
git push
```

The change goes live in about a minute. (Or just tell me what to change and I will publish it.)

---

Questions or tweaks? Just say the word.
