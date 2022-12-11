const circle = document.querySelector('#circle');

function animateCircle() {
    circle.style.transform = 'scale(1.2)';
    circle.style.transition = 'transform 0.5s ease-in-out';
}

circle.addEventListener('mouseover', animateCircle);