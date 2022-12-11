// Set the initial number of logos to display
const numLogos = 20;

// Create the logos and add them to the container
for (let i = 0; i < numLogos; i++) {
  // Create a new logo element
  const logo = document.createElement("img");
  logo.src = "symbol-logo-transparent.png";

  // Set a random initial position and angle for the logo
  logo.style.position = "absolute";
  logo.style.left = Math.random() * window.innerWidth + "px";
  logo.style.top = Math.random() * window.innerHeight + "px";
  logo.style.transform = "rotate(" + Math.random() * 360 + "deg)";

  // Add the logo to the container
  container.appendChild(logo);
}

// Define the animation function
function animateLogos() {
  // Get all the logo elements
  const logos = document.querySelectorAll("#container img");

  // Update the position and angle of each logo
  logos.forEach(logo => {
    // Calculate the new position of the logo
    let currentLeft = parseInt(logo.style.left);
    let currentTop = parseInt(logo.style.top);

    // Instead of adding a random value to the current position,
    // subtract a value to make the logo move up
    let newLeft = currentLeft;
    let newTop = currentTop - 10;

    // If the logo has reached the end of the screen, remove it from the page
    if (newLeft < 0 || newLeft > window.innerWidth || newTop < 0 || newTop > window.innerHeight) {
      container.removeChild(logo);
    } else {
      // Update the position of the logo
      logo.style.left = newLeft + "px";
      logo.style.top = newTop + "px";

      // Calculate the new angle of the logo
      let currentAngle = parseInt(logo.style.transform.replace("rotate(", "").replace("deg)", ""));
      let newAngle = currentAngle + 5;

      // If the logo has reached the maximum angle, reset its angle to 0
      if (newAngle > 360) {
        newAngle = 0;
      }
    }
  });
}

setInterval(animateLogos, 20);

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