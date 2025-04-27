// ******************** Continue-reading slider ******************* //
var swiper1 = new Swiper(".bookCarousel1", {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
var swiper2 = new Swiper(".bookCarousel2", {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
