const menuButton = document.querySelector("button[aria-label='Navigation']");
const menuContent = document.querySelector("[data-menu-content]");
let isMenuOpen = false;

menuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menuButton.setAttribute("aria-expanded", isMenuOpen);
  if (isMenuOpen) {
    menuContent.classList.remove("hidden");
    menuContent.classList.add("block");
  } else {
    menuContent.classList.remove("block");
    menuContent.classList.add("hidden");
  }
});
