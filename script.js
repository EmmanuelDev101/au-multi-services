// Trouver le bouton du menu mobile
const menuButton = document.querySelector(".menu-toggle");

// Trouver le menu de navigation
const navigationMenu = document.querySelector("#main-navigation");

// Écouter le clic sur le bouton du menu
menuButton.addEventListener("click", function () {
  // Ouvrir ou fermer le menu
  const menuIsOpen = navigationMenu.classList.toggle("active");

  // Mettre à jour l'état du bouton
  menuButton.setAttribute("aria-expanded", menuIsOpen);
});
