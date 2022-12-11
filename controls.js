const image = document.querySelector('#circle'); // select the image element

image.addEventListener('mouseover', (event) => { // add a mouseover event listener to the image
  event.target.style.transform = 'rotate(360deg)'; // set the image's rotation to 360 degrees
});
