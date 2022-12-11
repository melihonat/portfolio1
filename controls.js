function updateLogoPosition(elapsedTime) {
  // calculate the elapsed time in seconds
  var elapsedSeconds = elapsedTime / 1000;

  // update the angle of the logo based on the elapsed time and speed
  angle += elapsedSeconds * speed;

  // calculate the horizontal and vertical displacement of the logo
  var x = radius * Math.cos(angle);
  var y = radius * Math.sin(angle);

  // calculate the new left and top positions of the logo
  var left = x + radius;
  var top = y + radius;

  // update the position of the logo
  var logo = document.getElementById("circle");
  logo.style.left = left + "px";
  logo.style.top = top + "px";
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
