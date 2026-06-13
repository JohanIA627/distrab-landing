// Reveal-on-scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Laptop del hero: inclinación que sigue al mouse
const hero = document.querySelector(".hero");
const laptopTilt = document.querySelector(".laptop-tilt");
const fineMouse = window.matchMedia("(pointer: fine)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (hero && laptopTilt && fineMouse && !reducedMotion) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    laptopTilt.style.setProperty("--ty", `${-14 + x * 16}deg`);
    laptopTilt.style.setProperty("--tx", `${10 - y * 12}deg`);
  });

  hero.addEventListener("mouseleave", () => {
    laptopTilt.style.removeProperty("--ty");
    laptopTilt.style.removeProperty("--tx");
  });
}
