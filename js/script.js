

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

  var swiperList = new Swiper(".swiper-filters", {
    slidesPerView: 4,
    spaceBetween: 5
  });

    var swiperOeuvre = new Swiper(".swiper-featured-artworks", {
      slidesPerView: 3,
      spaceBetween: 5,
      direction: 'horizontal',
    });
