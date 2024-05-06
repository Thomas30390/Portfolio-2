// Obtenez la référence du bouton pour ouvrir la modal
var openModalBtn = document.getElementById("openModalBtn");

// Obtenez la référence de la modal
var modal = document.getElementById("myModal");

// Obtenez la référence du bouton pour fermer la modal
var closeBtn = document.getElementsByClassName("close")[0];

// Fonction pour ouvrir la modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Fonction pour fermer la modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Fonction pour fermer la modal en cliquant en dehors de celle-ci
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-amovible img");
    let index = 0;

    setInterval(() => {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        index = (index + 1) % images.length;
    }, 3000); // Changez 3000 pour ajuster la durée entre chaque transition (en millisecondes)
});