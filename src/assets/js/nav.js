const menuButton = document.querySelector("button[aria-label='Navigation']");
const menuContent = document.querySelector("[data-menu-content]");
let isMenuOpen = false;

menuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menuButton.setAttribute("aria-expanded", isMenuOpen);
  isMenuOpen
    ? menuContent.classList.add("block") &
      menuContent.classList.remove("hidden")
    : menuContent.classList.add("hidden") &
      menuContent.classList.remove("block");
});
