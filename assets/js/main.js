var swiper = new Swiper(".sliderYon", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".markalar_slider", {
    slidesPerView: 8,
    spaceBetween: 30,
    autoplay:true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 6,
      },
      1530: {
        slidesPerView: 8,
      },
    },
  });
  var swiper = new Swiper(".haberler_slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1530: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  $(document).ready(function() {
    if ($(".menuOpen").length) {
        $(".menuOpen").click(function() {
            var a = $("html");
            a.toggleClass("openMenu");
        });
    }
});
