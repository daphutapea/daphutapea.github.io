/* =========================================================
   Daffa Narendra Hutapea - Portfolio interactions
   Plain (vanilla) JavaScript - no libraries needed.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Current year in footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile menu toggle ---------- */
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  menuBtn?.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  // Close the menu after clicking a link
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  });

  /* ---------- Navbar background + progress bar on scroll ---------- */
  const navbar = document.getElementById("navbar");
  const progressBar = document.getElementById("progress-bar");
  const toTop = document.getElementById("to-top");

  const onScroll = () => {
    const y = window.scrollY;

    // Frosted navbar after scrolling a little
    navbar.classList.toggle("scrolled", y > 30);

    // Reading progress
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";

    // Back-to-top button
    toTop.classList.toggle("show", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Scroll-reveal animations ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Small stagger for groups of cards entering together
          entry.target.style.transitionDelay = `${(i % 4) * 80}ms`;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Active nav link highlighting ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => navObserver.observe(s));

  /* ---------- Typing effect for the hero role ---------- */
  const roleEl = document.getElementById("role");
  if (roleEl) {
    const roles = [
      "Data Scientist",
      "Data Analyst",
      "ML Engineer",
      "Problem Solver",
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const type = () => {
      const current = roles[roleIdx];
      roleEl.textContent = current.slice(0, charIdx);

      if (!deleting && charIdx < current.length) {
        charIdx++;
        setTimeout(type, 90);
      } else if (deleting && charIdx > 0) {
        charIdx--;
        setTimeout(type, 45);
      } else if (!deleting && charIdx === current.length) {
        deleting = true;
        setTimeout(type, 1600); // pause at full word
      } else {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(type, 300);
      }
    };
    type();
  }

  /* ---------- Contact form -> opens email app pre-filled ---------- */
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n- ${name}\nReply to: ${email}`
    );
    // Opens the visitor's default email client addressed to Daffa
    window.location.href = `mailto:narendra.daffa08@gmail.com?subject=${subject}&body=${body}`;
  });
});
