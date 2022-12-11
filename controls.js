// Get the image element from the HTML
var imgElement = document.getElementById('circle');

// Define the initial position and speed of the image
var xPos = 0;
var yPos = 0;
var xSpeed = 5;
var ySpeed = 5;

function animate() {
  // Move the image horizontally
  xPos += xSpeed;

  // If the image hits the edge of the window, reverse its horizontal direction
  if (xPos > window.innerWidth || xPos < 0) {
    xSpeed = -xSpeed;
  }

  // Update the position and rotation of the image
  imgElement.style.transform = 'translate(' + xPos + 'px, ' + yPos + 'px) rotate(10deg)';

  // Animate the image repeatedly
  requestAnimationFrame(animate);
}

// Start the animation
animate();


const form = document.querySelector('#contact-box form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields');
  } else {
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }
});

// slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}