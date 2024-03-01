document.getElementById("mobile-menu-toggle").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });
  window.onscroll = function() {scrollFunction()};

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', function () {
  const topArrowButton = document.getElementById('back-to-top-btn');

  // I Removed initial hiding logic, so the button is always visible
  topArrowButton.classList.add('hidden'); // Initially hide the button

  // I Added a scroll event listener to show/hide the button on scroll
  window.addEventListener('scroll', function () {
    // I Removed the scroll threshold logic
    if (window.scrollY > 0) {
      topArrowButton.classList.remove('hidden');
    } else {
      topArrowButton.classList.add('hidden');
    }
  });
});
