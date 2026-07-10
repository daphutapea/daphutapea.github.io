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
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
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

  /* ---------- Project description "Read more" toggles ---------- */
  const clampedDescs = document.querySelectorAll(".project-desc.clamped");

  // Hide the toggle on descriptions that fit within the preview (no overflow).
  const syncReadMore = () => {
    clampedDescs.forEach((desc) => {
      const btn = desc.nextElementSibling;
      if (!btn || !btn.classList.contains("read-more")) return;
      if (desc.classList.contains("clamped")) {
        btn.style.display =
          desc.scrollHeight > desc.clientHeight + 2 ? "inline-flex" : "none";
      }
    });
  };

  clampedDescs.forEach((desc) => {
    const btn = desc.nextElementSibling;
    if (!btn || !btn.classList.contains("read-more")) return;
    btn.addEventListener("click", () => {
      // toggle() returns true when "clamped" is added back (collapsed)
      const collapsed = desc.classList.toggle("clamped");
      btn.setAttribute("aria-expanded", String(!collapsed));
      const label = btn.querySelector(".read-more-label");
      if (label) label.textContent = collapsed ? "Read more" : "Show less";
    });
  });

  syncReadMore();
  window.addEventListener("resize", syncReadMore, { passive: true });

  /* ---------- Motion preference ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Smooth scrolling (Lenis, loaded from CDN) ---------- */
  let lenis = null;
  if (!reduceMotion && typeof Lenis !== "undefined") {
    try {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
      // Keep the progress bar / active-nav / back-to-top in sync with Lenis
      lenis.on("scroll", onScroll);
    } catch (err) {
      lenis = null;
    }
  }

  // Smooth-scroll in-page anchor links (via Lenis, or native scroll as fallback)
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -80 });
      else target.scrollIntoView({ behavior: "smooth" });
      mobileMenu?.classList.add("hidden");
    });
  });

  /* ---------- Animated stat counters (count up when scrolled into view) ---------- */
  const animateCount = (el) => {
    const match = el.textContent.trim().match(/^([\d.]+)(.*)$/);
    if (!match) return;
    const target = parseFloat(match[1]);
    const suffix = match[2] || "";
    const decimals = (match[1].split(".")[1] || "").length;
    if (reduceMotion) {
      el.textContent = target.toFixed(decimals) + suffix;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = (target * easeOut(p)).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals) + suffix;
    };
    requestAnimationFrame(tick);
  };
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll(".stat-num").forEach((el) => statObserver.observe(el));

  /* ---------- Magnetic hero buttons (gently pull toward the cursor) ---------- */
  if (!reduceMotion) {
    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${mx * 0.3}px, ${my * 0.4}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* ---------- Interactive project cards: 3D tilt + cursor-following glow ---------- */
  if (!reduceMotion) {
    document.querySelectorAll(".project-card").forEach((card) => {
      const glow = document.createElement("div");
      glow.className = "card-glow";
      card.appendChild(glow);
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width; // 0..1 across the card
        const py = (e.clientY - r.top) / r.height; // 0..1 down the card
        card.style.transition = "transform 0.08s ease-out";
        card.style.transform =
          `perspective(1000px) rotateX(${(0.5 - py) * 6}deg) rotateY(${(px - 0.5) * 8}deg) translateY(-6px)`;
        glow.style.setProperty("--mx", px * 100 + "%");
        glow.style.setProperty("--my", py * 100 + "%");
      });
      card.addEventListener("mouseleave", () => {
        card.style.transition = "transform 0.4s ease";
        card.style.transform = "";
      });
    });
  }

  /* ---------- Contact form -> delivers to inbox via Web3Forms ---------- */
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.className = "text-xs text-slate-500 text-center";

    try {
      const payload = Object.fromEntries(new FormData(form));
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data.success) {
        formStatus.textContent =
          "Thanks! Your message was sent. I'll get back to you soon.";
        formStatus.className = "text-sm text-emerald-400 text-center font-medium";
        form.reset();
      } else {
        formStatus.textContent =
          "Something went wrong. Please email me directly at narendra.daffa08@gmail.com.";
        formStatus.className = "text-sm text-rose-400 text-center font-medium";
      }
    } catch (err) {
      formStatus.textContent =
        "Network error. Please email me directly at narendra.daffa08@gmail.com.";
      formStatus.className = "text-sm text-rose-400 text-center font-medium";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
});
