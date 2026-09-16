// [추가 1]
// festival 슬라이드들을 감싸고 있는 swiper-wrapper 찾기
const festivalWrapper = document.querySelector(".sw-festival .swiper-wrapper");

// [추가 2]
// 현재 들어있는 모든 festival 슬라이드 가져오기
const festivalSlides = [...festivalWrapper.querySelectorAll(".swiper-slide")];

// [추가 3]
// 원본 슬라이드 개수 저장
const festivalTotal = festivalSlides.length;

// [추가 4]
// Swiper가 움직이기 전에
// 원래 슬라이드 번호 기준으로 홀/짝 정보를 저장
festivalSlides.forEach((slide, index) => {
  const slideNumber = index + 1;

  if (slideNumber % 2 === 1) {
    slide.dataset.festivalPosition = "down";
  } else {
    slide.dataset.festivalPosition = "up";
  }
});

// ★ 반복을 위해 한 세트 복제
// 위에서 만든 data-festival-position도 같이 복제됨
festivalSlides.forEach((slide) => {
  festivalWrapper.appendChild(slide.cloneNode(true));
});

// [추가 6]
// 슬라이드 전체를 한 세트 복제
festivalSlides.forEach((slide) => {
  festivalWrapper.appendChild(slide.cloneNode(true));
});

const swFestival = new Swiper(".sw-festival", {
  speed: 350,
  loop: true,

  slidesPerView: 3.5,
  slidesPerGroup: 1,
  spaceBetween: 32,
  //   centeredSlides: true,
  pagination: {
    el: ".festival .swiper-pagination",
    type: "custom",
    // [추가 7]
    // 복제된 슬라이드는 페이지 숫자에 포함하지 않도록 처리
    renderCustom: function (swiper) {
      const current = (swiper.realIndex % festivalTotal) + 1;

      return `
      <span class="swiper-pagination-current">${current}</span>
      /
      <span class="swiper-pagination-total">${festivalTotal}</span>
    `;
    },
  },

  navigation: {
    nextEl: ".festival-next-btn",
    prevEl: ".festival-prev-btn",
  },
});
