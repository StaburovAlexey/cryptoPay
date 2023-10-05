const slider = new Swiper(".usecases__slider", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  // Slide class
  slideClass: "usecases__slider-slide",
  //Wrapper class
  wrapperClass: "usecases__slider-wrapper",
  // If we need pagination
  // If we need pagination
  pagination: {
    el: ".usecases__slider-pagination",
    bulletClass: "usecases__slider-pagination-bullet",
    bulletActiveClass: "usecases__slider-pagination-bullet_active",
    // type: "custom",
    bulletElement: "div",
    clickable: true,
  },
  on: {
    init: function () {
      fractionDrow();
    },
    slideChange: function () {
      fractionDrow();
    },
  },
  // breakpoints: {
  //   320: { centeredSlides: true },
  //   426: {},
  //   768: { centeredSlides: false, spaceBetween: 10 },
  //   1024: {},
  // },
});

function fractionDrow() {
  let activeSlide = document.querySelector(
    ".usecases__slider-pagination-bullet_active"
  );
  const fractionUp = document.querySelector(".slide__fraction-up");
  const slides = document.querySelectorAll(".slide");
  const fractionDown = document.querySelector(".slide__fraction-down");
  fractionDown.textContent = "0" + `${slides.length}`;
  if (activeSlide.getAttribute("aria-label") === "Go to slide 1") {
    fractionUp.textContent = "01";
  } else if (activeSlide.getAttribute("aria-label") === "Go to slide 2") {
    fractionUp.textContent = "02";
  } else {
    fractionUp.textContent = "03";
  }
}

const iconsContainer = document.querySelector(".features__curencies");
const featuresIcons = iconsContainer.querySelectorAll(
  ".features__curencies-icon-conteiner"
);

document.addEventListener("mouseover", (event) => {
  const target = event.target;
  if (target.classList.contains("features__curencies")) {
    for (let i = 0; i < featuresIcons.length; ++i) {
      const img = featuresIcons[i].querySelector(".features__curencies-icon");
      const text = featuresIcons[i].querySelector(
        ".features__curencies-icon-text"
      );
      setTimeout(() => {
        img.classList.add("features-icon");
        text.classList.add("features-icon-text");
      }, i * 400);
    }
  }
});
