/*const swiper = new Swiper('.swiper-screenshots', {
    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }, }

    
  });*/

  var swiper = new Swiper(".swiper-screenshots", {
    centeredSlides: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }, }
  });