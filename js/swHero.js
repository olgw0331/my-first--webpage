const mainVisualBg = document.querySelector(
  ".hero .main-visual .main-visual-bg",
);
// console.log(mainVisualBg);

const swHero = new Swiper(".sw-hero", {
  speed: 1000,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".hero-next-btn",
    prevEl: ".hero-prev-btn",
  },

  on: {
    slideChangeTransitionStart: function (swiper) {
      // const activeSlide = swiper.activeIndex + 1;
      // console.log(activeSlide);
      // mainVisualBg.style.backgroundImage = `url(assets/images/slide_${activeSlide}.png)`;

      const activeSlide = swiper.slides[swiper.activeIndex];
      // console.log(activeSlide);
      const activeSlideImg = activeSlide.querySelector(".slide-image img");
      // console.log(activeSlideImg.src);
      mainVisualBg.style.backgroundImage = `url(${activeSlideImg.src})`;
    },
  },
});
