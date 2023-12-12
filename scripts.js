let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  // Call showSlides automatically every 5 seconds (adjust the time interval as needed).
  setInterval(autoChangeSlide, 5000);
});

function autoChangeSlide() {
  // Increment the slideIndex to show the next slide.
  slideIndex++;
  showSlides(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("single-review");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Make slides disappear
  for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none";
  }
  // diactive the dots
  for (i = 0; i < dots.length; i++) { 
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Make current slide and dot appear
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
