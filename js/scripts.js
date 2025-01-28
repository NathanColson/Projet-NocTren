// Fonction pour afficher/masquer le menu mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Défilement fluide pour les ancres
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Validation du formulaire de contact
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      event.preventDefault();
      alert("Tous les champs sont obligatoires.");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Redirection pour le bouton "S'abonner"
  const subscribeButton = document.querySelector(".cta-button .btn");
  const subscribeButtonDebutant = document.querySelector(
    ".programme-card-debutant .btn"
  );
  const subscribeButtonAvance = document.querySelector(
    ".programme-card-avance .btn"
  );

  if (subscribeButton) {
    console.log("Bouton trouvé !");
    subscribeButton.addEventListener("click", (event) => {
      event.preventDefault(); // Empêche l'action par défaut du lien
      window.location.href = "tarifs.html"; // Redirige vers la page des tarifs
    });
  }

  if (subscribeButtonDebutant) {
    console.log("Bouton trouvé !");
    subscribeButtonDebutant.addEventListener("click", (event) => {
      event.preventDefault(); // Empêche l'action par défaut du lien
      window.location.href = "debutant.html"; // Redirige vers la page des tarifs
    });
  }

  if (subscribeButtonAvance) {
    console.log("Bouton trouvé !");
    subscribeButtonAvance.addEventListener("click", (event) => {
      event.preventDefault(); // Empêche l'action par défaut du lien
      window.location.href = "avance.html"; // Redirige vers la page des tarifs
    });
  }
});
