// Mobile menu toggle
const toggle = document.querySelector(".nav__toggle");
const mobileMenu = document.querySelector(".mobile-menu");

toggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  toggle.classList.toggle("open", isOpen);
  toggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after tapping a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  });
});

// Close the menu if the window is resized back to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  }
});
