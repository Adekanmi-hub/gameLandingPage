//This is the navigation bar fetch function which was used to import the html file into the index.html file
fetch("navigation/nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("nav-container").innerHTML = data;
  });

//This is the hero section fetch function which renders the hero html and executes the carousel function after.
fetch("hero/hero.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
    // Carousel functionality
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    setInterval(nextSlide, 5000);
  });

//This is the registration section rendering and animation effect
fetch("registration/registration.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("reg-section").innerHTML = data;
    // Steps animation on scroll
    const steps = document.querySelectorAll(".step");

    function checkSteps() {
      const triggerBottom = window.innerHeight * 0.8;

      steps.forEach((step) => {
        const stepTop = step.getBoundingClientRect().top;

        if (stepTop < triggerBottom) {
          step.classList.add("visible");
        }
      });
    }
    window.addEventListener("scroll", checkSteps);
    checkSteps(); // Check on initial load
  });

fetch("offers/offers.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("offers-section").innerHTML = data;
  });

fetch("cta/ctaSection.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("cta-section").innerHTML = data;
  });
