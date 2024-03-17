

  var swiper = new Swiper(".swiper-screenshots", {
    loop: true,
    centeredSlides: true,
    breakpoints: {
        // when window width is >= 1200px
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        }, 
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


  });

  var swiperList = new Swiper(".swiper-list", {
    loop: true,
          slidesPerView: 3,
          spaceBetween: 30
  });

    var swiperOeuvre = new Swiper(".swiper-featured-artworks", {
      slidesPerView: 2,
      spaceBetween: 30,
      direction: 'horizontal',
    });
