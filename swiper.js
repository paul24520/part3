// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 16,
//   freeMode: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
window.addEventListener("DOMContentLoaded", () => {
  const createSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);
    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      }
      if (swiper !== undefined) swiper.destroy();
      return;
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  // создание объекта настроек свайпер для более чистого кода

  const swiperSettingsObj = {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 16,
    freeMode: true,
  };

  // Исправление бага со swiper.destroy()

  createSwiper("(max-width: 768px)", ".mySwiper", swiperSettingsObj);
});

