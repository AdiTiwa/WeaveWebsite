
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
   const bar = document.getElementById("topbar");
  function showSlide(index) {
    console.log(index)
      if (index == 1){

        bar.style.zIndex = 200;
      }
      
      if (index >= 0 && index < slides.length) {
        slides.forEach((slide) => {
          slide.style.transform = `translateY(-${index * 100}vh)`;
        });
        currentSlide = index;

      }
    
    
  }
  
  function DownButton(){
     showSlide(currentSlide + 1);
  }
  function UpButton(){
    showSlide(currentSlide - 1);
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
