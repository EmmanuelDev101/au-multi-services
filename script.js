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

// Trouver le formulaire de contact
const contactForm = document.querySelector("#contact-form");

// trouver l'espace du message
const foramMessage = document.querySelector("#form-message");

// Écouter l'événement de soumission du formulaire
contactForm.addEventListener("submit", function (event) {
  // Empêcher l'envoi du formulaire
  event.preventDefault();

  // afficher le message de confirmation
  foramMessage.textContent =
    "Merci pour votre message ! Nous vous répondrons bientôt.";

  // Vider les champs du formulaire
  contactForm.reset();
});
