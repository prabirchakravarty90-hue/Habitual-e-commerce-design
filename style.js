// Add a simple animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".mockup").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      el.classList.add("visible");
    }
  });
});
