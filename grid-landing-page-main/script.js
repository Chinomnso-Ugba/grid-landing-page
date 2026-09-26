const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  document.body.classList.add("menu-is-open");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  document.body.classList.remove("menu-is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = document.body.classList.contains("menu-is-open");
  // console.log("menu was", isOpen ? "open" : "closed"); // leftover debug, works fine so leaving it
  isOpen ? closeMenu() : openMenu();
}

menuToggle.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// close the menu automatically if someone resizes up/down past the breakpoint
// (keeps things from getting stuck open in a weird half-state)
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000 || window.innerWidth < 1000) {
    closeMenu();
  }
});
