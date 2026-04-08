// Typing effect (kept subtle & professional)
const text = ["HR Executive", "Talent Acquisition Specialist", "HR Operations Expert"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, isDeleting ? 40 : 80);
}
type();

// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close menu on click
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});