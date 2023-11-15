document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    if (index >= 0 && index < slides.length) {
      slides.forEach((slide) => {
        slide.style.transform = `translateY(-${index * 100}vh)`;
      });
      currentSlide = index;
    }
  }

  document.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
      showSlide(currentSlide + 1);
    } else {
      showSlide(currentSlide - 1);
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
      showSlide(currentSlide + 1);
    } else if (event.key === "ArrowUp") {
      showSlide(currentSlide - 1);
    }
  });
});
