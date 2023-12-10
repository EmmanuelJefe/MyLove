document.addEventListener('DOMContentLoaded', function () {
    const animatedSection = document.getElementById('animatedSection');

    // Detecta el final de la animación 'loveSection'
    animatedSection.addEventListener('animationend', function () {
        // Inicia la siguiente animación después de que 'loveSection' termine
        animatedSection.classList.remove('loveSection');
        animatedSection.classList.add('moveBackwards');

        // Reinicia la animación para futuros usos
        void animatedSection.offsetWidth; // Truco para reiniciar la animación
        animatedSection.classList.remove('moveBackwards');
        animatedSection.classList.add('loveSection');
    });
});