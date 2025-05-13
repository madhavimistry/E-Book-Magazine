// ******************** Continue-reading slider ******************* //
var swiper1 = new Swiper(".bookCarousel1", {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: false,

  navigation: {
    nextEl: ".swiper1-button-next",
    prevEl: ".swiper1-button-prev",
  },

  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      // Small screen
      slidesPerView: 1,
    },
    768: {
      // Tablet
      slidesPerView: 2,
    },
    992: {
      // Laptop
      slidesPerView: 3,
    },
    1200: {
      // Desktop
      slidesPerView: 4,
    },
  },
});

// ******************** Popular-books slider ******************* //
var popularBooks = new Swiper(".popularBooks", {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: false,

  navigation: {
    nextEl: ".swiper2-button-next",
    prevEl: ".swiper2-button-prev",
  },

  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      // Small screen
      slidesPerView: 1,
    },
    768: {
      // Tablet
      slidesPerView: 2,
    },
    992: {
      // Laptop
      slidesPerView: 3,
    },
    1200: {
      // Desktop
      slidesPerView: 4,
    },
  },
});


// ******************** new releases -books slider ******************* //
var popularBooks = new Swiper(".releaseBooks", {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: false,

  navigation: {
    nextEl: ".swiper3-button-next",
    prevEl: ".swiper3-button-prev",
  },

  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      // Small screen
      slidesPerView: 1,
    },
    768: {
      // Tablet
      slidesPerView: 2,
    },
    992: {
      // Laptop
      slidesPerView: 3,
    },
    1200: {
      // Desktop
      slidesPerView: 4,
    },
  },
});