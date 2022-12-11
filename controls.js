// Get the logo element
var logo = document.getElementById("circle");

// Set the initial position of the logo
logo.style.position = "relative";
logo.style.left = "0px";

// Animate the logo by moving it to the right
function animateLogo() {
  // Set the new position of the logo
  logo.style.left = parseInt(logo.style.left) + 1 + "px";

  // Set a timer to animate the logo again in 10 milliseconds
  setTimeout(animateLogo, 10);
}

// Start the animation
animateLogo();
