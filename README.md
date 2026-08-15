# Daffa Narendra Hutapea - Portfolio Website

A bold, modern, single-page portfolio for Daffa Narendra Hutapea, a Data Scientist and
Data Analyst. Built with plain HTML, Tailwind CSS, and vanilla JavaScript, with no build
step or dependencies.

**Live site:** https://daphutapea.github.io

## Features

- Responsive single-page layout: Hero, About, Skills, Projects, Experience, Education, Contact
- Animated hero with a typing role effect and gradient styling
- Scroll-reveal animations and active-section navigation highlighting
- Project cards linking to live demos on Hugging Face and Vercel
- Contact form with email delivery via Web3Forms (no server required)
- Downloadable CV (PDF), available from the hero and the contact section

## Tech stack

- HTML5
- Tailwind CSS, loaded via the Play CDN (no build tooling)
- Vanilla JavaScript (no frameworks or libraries)
- Hosted on GitHub Pages

## Project structure

```
.
|-- index.html        Page markup and all text content
|-- css/styles.css    Theme tokens, layout, and animations
|-- js/main.js        Navigation, scroll effects, typing animation, contact form
|-- assets/           Profile photo and CV PDF
+-- README.md
```

## Running locally

Open `index.html` directly in any modern browser. An internet connection is required on
first load so the web fonts and Tailwind CSS can be fetched from their CDNs.

## Deployment

The site is hosted on GitHub Pages from the `daphutapea/daphutapea.github.io` repository.
Because the repository is named `<username>.github.io`, GitHub serves it at the root URL
(https://daphutapea.github.io) and rebuilds automatically on every push to the `main`
branch:

```
git add -A
git commit -m "describe the change"
git push
```

The update goes live about a minute later.

## Customization reference

- Text content: `index.html`, organized by commented section banners (for example `<!-- ABOUT -->`)
- Colors, fonts, and animations: `css/styles.css`, plus the Tailwind config block at the top of `index.html`
- Rotating hero titles: the `roles` array in `js/main.js`
- Profile photo: `assets/profile.jpg`, referenced from the hero in `index.html`
- CV files: two versions in `assets/` -- `CV - Daffa Narendra Hutapea - Data Analyst.pdf` and `... - Data Scientist.pdf`. The hero button opens a menu to choose one; the contact section links both directly. Source LaTeX lives in `CV - Daffa Narendra Hutapea/`
- Contact form delivery: the Web3Forms access key in the contact form's hidden `access_key` field
