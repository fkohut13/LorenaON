
document.addEventListener('DOMContentLoaded', function () {
  // Function to open side bar and close it.
  const closeBtn = document.querySelector('.closebtn');
  const openBtn = document.querySelector('.threebar-icon');

  closeBtn.addEventListener('click', closeSidebar);
  openBtn.addEventListener('click', showSidebar);

  const btnLeft = document.querySelector(".slider__btn-left");
  const btnRight = document.querySelector(".slider__btn-right");
  if (btnLeft) {
    btnLeft.addEventListener('click', () => changesliderimage(-1));
  }
  if (btnRight) {
    btnRight.addEventListener('click', () => changesliderimage(1));
  }
  const closesliderbtn = document.getElementById("closeslider");
  if (closesliderbtn) {
    closesliderbtn.addEventListener('click', closeslider);
  }



  let scrValue;

  const cardimage = document.getElementsByClassName("card-img");

  for (var i = 0; i < cardimage.length; i++) {
    cardimage[i].addEventListener('click', function () {
      scrValue = this.getAttribute('src');
      fullscreenslider(scrValue);
    });
  }

  const hiddentext = document.querySelectorAll('.hidden-txt');
  const hiddenimgs = document.querySelectorAll('.hidden-img');
  const observer = new IntersectionObserver((entries) => {
    if (entries) {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }
  });

  hiddentext.forEach((el) => observer.observe(el));
  hiddenimgs.forEach((el) => observer.observe(el));



  const filtercontainer = document.querySelector(".filter_buttons");
  cards = document.querySelectorAll(".card-item");
  if (filtercontainer) {
    filtercontainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("filter-btn")) {

        filtercontainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const filtervalue = event.target.getAttribute("data-filter");
        cards.forEach((item) => {
          if (item.classList.contains(filtervalue) || filtervalue === 'all') {
            item.classList.remove("hide");
            item.classList.add("show");
          }
          else {
            item.classList.remove("show");
            item.classList.add("hide");
          }
        });
      }
    });
  }

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
  window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
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

  // Ensure valid slideIndex
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active-slide");
  }

  // Display the current slide (if it exists)
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].classList.add("active-slide");
  }
}
function scrolltop(element) {
  var scrollDiv = document.getElementById(element).offsetTop;
  window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
}

function togglemap() {
  const map = document.getElementById("map");
  const openmap = document.getElementById("map-btn");

  map.style.display = map.style.display === 'none' || map.style.display === '' ? 'flex' : 'none';


}
// if (elem.value=="Close Curtain") elem.value = "Open Curtain";
//else elem.value = "Close Curtain";
let images = [
  './assets/images/default.jpg',
  './assets/images/default1.jpg'
];
let currentindex = 0;
function fullscreenslider(scrValue) {
  const fullscreenslidercontainer = document.querySelector("#fsc");
  const fullscreenimgslider = document.querySelector("#fis");
  fullscreenslidercontainer.classList.add("active");
  fullscreenslidercontainer.style.display = 'block';
  fullscreenimgslider.style.backgroundImage = 'url("' + scrValue + '")';
  if (!images.includes(scrValue)) {
    images.push(scrValue);
  }

}
function closeslider() {
  const fullscreenslidercontainer = document.querySelector("#fsc");
  fullscreenslidercontainer.classList.remove('active');
  fullscreenslidercontainer.style.display = 'none';
  images = [
    './assets/images/default.jpg',
    './assets/images/default1.jpg'
  ];
}

function changesliderimage(direction) {
  const fullscreenimgslider = document.querySelector("#fis");
  currentindex = (currentindex + direction + images.length) % images.length;
  fullscreenslider(images[currentindex]);


}

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImage");
let captionText = document.getElementById("caption");
let currentIndex = 0;

function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  currentIndex = Array.from(document.querySelectorAll('.grid-item img')).indexOf(img);
}

function closeModal() {
  modal.style.display = "none";
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = document.querySelectorAll('.grid-item img').length - 1;
  }
  updateModalImage();
}

function nextImage() {
  if (currentIndex < document.querySelectorAll('.grid-item img').length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateModalImage();
}

function updateModalImage() {
  let images = document.querySelectorAll('.grid-item img');
  modalImg.src = images[currentIndex].src;
  captionText.innerHTML = images[currentIndex].alt;
}










