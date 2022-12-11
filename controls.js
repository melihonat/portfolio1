window.onscroll = function() {
  var logo = document.getElementById('circle');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  logo.style.top = scrollTop + 20 + 'px';
};
