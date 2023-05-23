$(document).ready(function () {
  console.log("Initializing sliders....");

  $(".section-hero").slick({
    fade: true,
    auto: true,
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom'><span></span></div>",
  });
  $(".growth-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom'><span></span></div>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  });
  $(".article-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom slick-arrow-center-sm'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom slick-arrow-center-sm'><span></span></div>",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  });
  $(".member-slider-container").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom slick-arrow-center-sm'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom slick-arrow-center-sm'><span></span></div>",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  });
  $(".think-tank-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "50px",
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom slick-arrow-center-sm'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom slick-arrow-center-sm'><span></span></div>",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
  $(".growth-community-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom slick-arrow-center-sm'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom slick-arrow-center-sm'><span></span></div>",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
  $(".growth-content-article-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "50px",
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom slick-arrow-center-sm'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom slick-arrow-center-sm'><span></span></div>",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
  $(".think-tank-series-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom slick-position-end'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom slick-position-end'><span></span></div>",
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  });
  $(".stories-slider-container").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom slick-position-center-outside'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom slick-position-center-outside'><span></span></div>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  });
  $(".sector-slide-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom slick-position-center-outside'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom slick-position-center-outside'><span></span></div>",
  });
  $(".growth-coaching-slide-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom slick-position-center-outside'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom slick-position-center-outside'><span></span></div>",
  });
  $(".community-slider-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:
      "<div class = 'slick-custom-prev slick-custom slick-position-center-outside'><span></span></div>",
    nextArrow:
      "<div class = 'slick-custom-next slick-custom slick-position-center-outside'><span></span></div>",
  });
});
