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