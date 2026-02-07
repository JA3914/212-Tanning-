// 212 Tanning — Minimal Interaction Layer
// Designed to respect existing CSS animations

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     FADE-IN OBSERVER
  ========================== */
  const faders = document.querySelectorAll(".fade");

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: "0px 0px -80px 0px"
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    }, observerOptions);

    faders.forEach(el => fadeObserver.observe(el));
  } else {
    // Graceful fallback
    faders.forEach(el => el.classList.add("show"));
  }

  /* =========================
     SMOOTH SCROLL (ANCHORS)
  ========================== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

});
