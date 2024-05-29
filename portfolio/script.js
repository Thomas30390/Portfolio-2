// Récupérer les éléments
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var span = document.getElementsByClassName("close")[0];

    // Récupérer toutes les images avec la classe "myImg"
    var images = document.getElementsByClassName("myImg");

    // Ajouter un gestionnaire de clic à chaque image
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function() {
            modal.classList.add('show');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        }
    }

    // Fermer la modal au clic sur le bouton de fermeture
    span.onclick = function() {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = "none", 500);
    }

    // Fermer la modal au clic en dehors de l'image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = "none", 500);
        }
    }