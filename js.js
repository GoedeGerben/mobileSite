var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider");
  var stripes = document.getElementsByClassName("stripe");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < stripes.length; i++) {
    stripes[i].className = stripes[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  stripes[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}