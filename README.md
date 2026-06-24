# Daffa Narendra Hutapea — Portfolio Website

A bold, modern, single-page portfolio built with **HTML + Tailwind CSS + vanilla JavaScript**.
No installation, no build step — it just runs in your browser.

---

## 🚀 How to view it

**The easy way:** open the folder and **double-click `index.html`**. It opens in your browser. Done.

> ℹ️ It needs an internet connection the first time you open it, because the fonts and the
> Tailwind styling library load from the web.

---

## 📁 What's in here

```
Web Porto Project/
├── index.html        ← the whole page (text content lives here)
├── css/styles.css    ← colors, animations, card styles
├── js/main.js        ← menu, scroll effects, typing animation, contact form
├── assets/           ← put your photo and CV PDF here (see below)
└── README.md         ← this file
```

---

## ✏️ How to edit your information

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

## 🖼️ Add your photo (optional, recommended)

Right now the hero shows your initials **"DNH"** in a gradient circle. To use a real photo:

1. Put your photo in the `assets/` folder, e.g. `assets/profile.jpg`.
2. In `index.html`, find the `<div class="avatar-inner">` block and replace the
   `<span ...>DNH</span>` line with:
   ```html
   <img src="assets/profile.jpg" alt="Daffa Narendra Hutapea" class="w-full h-full object-cover rounded-full" />
   ```

## 📄 Add your CV for download (optional)

1. Compile your `resume.tex` to a PDF (e.g. with [Overleaf](https://overleaf.com)) and save it as
   `assets/Daffa_Narendra_Hutapea_CV.pdf`.
2. Tell me and I'll wire up a **"Download CV"** button in the hero — or add it yourself by
   copying one of the existing buttons and pointing its `href` to that file.

---

## 🌐 Putting it online for free (when you're ready)

Since you already have a GitHub account (`@daphutapea`), the easiest free hosting is:

- **GitHub Pages** — upload this folder to a repository, enable Pages in the repo settings.
  Your site goes live at `https://daphutapea.github.io/<repo-name>/`.
- **Netlify** or **Vercel** — drag-and-drop this folder onto their website. Done in seconds.

I can walk you through any of these step by step. Just ask.

---

Built with care. Questions or tweaks? Just say the word.
