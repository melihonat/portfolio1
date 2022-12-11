function updateLogoPosition() {
  var logo = document.getElementById("circle");
  logo.style.left = /* calculate new left position here */;
  logo.style.top = /* calculate new top position here */;
}

function animateLogo() {
  var startTime = Date.now(); // get the current time in milliseconds

  function update() {
    // calculate the elapsed time since the previous frame
    var elapsedTime = Date.now() - startTime;

    // update the position of the logo
    updateLogoPosition(elapsedTime);

    // request the next frame of the animation
    requestAnimationFrame(update);
  }

  // start the animation loop
  requestAnimationFrame(update);
}

window.onload = animateLogo;
