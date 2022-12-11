const sidebar = document.querySelector('#sidebar'); // select the sidebar element
const sidebarButton = document.querySelector('#sidebar-button'); // select the button element

sidebarButton.addEventListener('click', () => { // add a click event listener to the button
  sidebar.style.display = 'block'; // show the sidebar when the button is clicked
});