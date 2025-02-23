document.getElementById('myLink').onclick = function (event) {
  event.preventDefault(); // Prevent navigation
  event.stopPropagation(); // Stop event propagation
  alert('Link clicked, but navigation is prevented.');
};
