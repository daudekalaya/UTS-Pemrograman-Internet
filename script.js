const menuToggle = document.querySelector('.daud_menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

window.addEventListener('scroll', function() {
  var jumbotron = document.getElementById('daud_jumbotron');
  var scrolled = window.scrollY > 50;

  if (scrolled) {
    jumbotron.classList.add('scrolled');
  } else {
    jumbotron.classList.remove('scrolled');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  console.log("Script is running!");

  const copyrightElement = document.querySelector('.daud_footer-copyright');
  const currentYear = new Date().getFullYear();
  copyrightElement.innerHTML = `&copy; ${currentYear}, Daud Ekalaya MCS`;
});

document.addEventListener("DOMContentLoaded", function () {
  function scrollToTarget(target) {
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const learnMoreButton = document.querySelector("#daud_jumbotron a[href='#daud_penerimaan']");

  learnMoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToTarget(this.getAttribute("href"));
  });
});
