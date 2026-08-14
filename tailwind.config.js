/** @type {import('tailwindcss').Config} */
// Mirrors the theme that used to live inline in index.html when the site
// loaded Tailwind from the Play CDN. Keep this in sync with css/styles.css.
module.exports = {
  // js/main.js matters: the contact form sets Tailwind classes at runtime
  // (emerald-400 / rose-400) that appear nowhere in the HTML.
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0f",          // page background
        surface: "#12121c",      // cards
        "surface-2": "#1a1a2b",  // raised cards / hovers
        primary: "#8b5cf6",      // violet
        secondary: "#d946ef",    // fuchsia
        accent: "#22d3ee",       // cyan
        muted: "#94a3b8",        // muted text
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
