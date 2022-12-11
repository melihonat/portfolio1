// Get the logo element
var circle = document.getElementById("circle");

if (circle){
  // Set the initial position of the logo
  circle.style.position = "relative";
  circle.style.left = "0px";
}
// Animate the logo by moving it to the right
function animateLogo() {
  // Set the new position of the logo
  circle.style.left = parseInt(circle.style.left) + 1 + "px";

  // Set a timer to animate the logo again in 10 milliseconds
  setTimeout(animateLogo, 10);
}

// Start the animation
animateLogo();
