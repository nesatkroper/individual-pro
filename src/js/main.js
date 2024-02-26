// COME BACK PLEASE
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back Please 🥹";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

// AUTO RANDOM TITLE
let titleText = ["Website Midterm", "Suon Phanun", "BBU B-202 D3 T1"];
let counter = 0;

setInterval(function () {
  document.title = titleText[counter % titleText.length];
  counter++;
}, 2000);

// SLIDE SLICH
$(document).ready(function () {
  $(".content-scroll-adidas").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 3800,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    centerMode: true,
    variableWidth: false,
    lazyLoad: "progressive",
    cssEase: "cubic-bezier(0.87,0.03,0.41,0.9)",
    prevArrow: `
    <button type="button" class="slick-prev btn_prev btn_slick">
        <i class="fa-solid fa-chevron-left"></i>
      </button>`,
    nextArrow: `<button type="button" class="slick-next btn_next btn_slick">
        <i class="fa-solid fa-chevron-right"></i>
      </button>`,
  });
});

$(document).ready(function () {
  $(".content-scroll-nike").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 4100,
    useTransform: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    centerMode: true,
    variableWidth: false,
    lazyLoad: "progressive",
    cssEase: "cubic-bezier(0.87,0.03,0.41,0.9)",
    prevArrow: `
    <button type="button" class="slick-prev btn_prev btn_slick">
        <i class="fa-solid fa-chevron-left"></i>
      </button>`,
    nextArrow: `<button type="button" class="slick-next btn_next btn_slick">
        <i class="fa-solid fa-chevron-right"></i>
      </button>`,
  });
});

$(document).ready(function () {
  $(".banner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    // centerMode: true,
    variableWidth: false,
    lazyLoad: "progressive",
    cssEase: "cubic-bezier(0.87,0.03,0.41,0.9)",
    prevArrow: `
    <button type="button" class="slick-prev btn_prev btn_slick">
        <i class="fa-solid fa-chevron-left"></i>
      </button>`,
    nextArrow: `<button type="button" class="slick-next btn_next btn_slick">
        <i class="fa-solid fa-chevron-right"></i>
      </button>`,
  });
});

$(document).ready(function () {
  $(".banner-car").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    useTransform: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    // centerMode: true,
    variableWidth: false,
    lazyLoad: "progressive",
    cssEase: "cubic-bezier(0.87,0.03,0.41,0.9)",
    prevArrow: `
    <button type="button" class="slick-prev btn_prev btn_slick">
        <i class="fa-solid fa-chevron-left"></i>
      </button>`,
    nextArrow: `<button type="button" class="slick-next btn_next btn_slick">
        <i class="fa-solid fa-chevron-right"></i>
      </button>`,
  });
});
