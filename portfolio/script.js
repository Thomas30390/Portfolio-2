document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-amovible");
    let index = 0;

    setInterval(() => {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        index = (index + 1) % images.length;
    }, 3000); // Changez 3000 pour ajuster la durée entre chaque transition (en millisecondes)
});