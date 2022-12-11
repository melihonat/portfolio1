// select the logo element from the DOM
const logo = document.querySelector('#circle');

// create a new animation for the logo
const logoAnimation = new Animation(logo, {
  // specify the size of the logo
  height: 100,
  width: 100,
  // specify the starting position of the logo
  top: 50,
  left: 50,
  // specify the duration of the animation in milliseconds
  duration: 1000
});

// create a keyframe for the animation
logoAnimation.addKeyframe(0, {
  // specify the starting position of the logo
  top: 50,
  left: 50
});

// create another keyframe for the animation
logoAnimation.addKeyframe(500, {
  // specify the ending position of the logo
  top: 100,
  left: 100
});

// start the animation
logoAnimation.start();
