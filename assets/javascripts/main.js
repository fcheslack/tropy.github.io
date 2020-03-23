var html = document.querySelector('html');

document.addEventListener("keydown", function(event) {
  if (event.which == 9) {
    html.classList.add('key');
  }
})

document.addEventListener("mousedown", function() {
  html.classList.remove('key');
})