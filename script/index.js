const slider = new Swiper(".usecases__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
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
});
const additionalBtns = document.querySelectorAll(".additional__btn");
const iconsContainer = document.querySelector(".features__curencies");
const featuresIcons = iconsContainer.querySelectorAll(
  ".features__curencies-icon-conteiner"
);
const page = document.querySelector(".page");
const btnTheme = document.querySelector(".theme-btn");

btnTheme.addEventListener("click", (e) => {
  page.classList.toggle("dark-theme");
  btnTheme.classList.toggle("theme-btn_active")

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
