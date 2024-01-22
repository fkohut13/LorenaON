// Function to open side bar and close it.
document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector('.closebtn');
    const openBtn = document.querySelector('.threebar-icon');

    closeBtn.addEventListener('click', closeSidebar);
    openBtn.addEventListener('click', showSidebar);
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.left = '0px';
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.left = '-250px';
}

// Function that scrolls to div, function is present on the meet us button.
function scrollmeetbtn(element) {
    var scrollDiv = document.getElementById(element).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active-slide");
  }

  slides[slideIndex - 1].style.display = "flex";
  slides[slideIndex - 1].classList.add("active-slide"); // Add active class
  
}