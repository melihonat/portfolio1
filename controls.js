window.onload = () => {
  // put your JavaScript code here
  const image = document.querySelector('#my-image');
  image.addEventListener('mouseover', (event) => {
    event.target.style.transform = 'rotate(360deg)';
  });
};
