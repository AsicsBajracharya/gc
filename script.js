// const dates = require("./mockEvents");
const dates = [
  {
    date: 18,
    month: 5,
    eventTitle: "Virtual RoundTable on Transformative megatrends",
  },
  {
    date: 19,
    month: 5,
    eventTitle: "Virtual RoundTable on Transformative megatrends",
  },
  {
    date: 1,
    month: 5,
    eventTitle: "Virtual RoundTable on Transformative megatrends",
  },
  {
    date: 12,
    month: 5,
    eventTitle: "Virtual RoundTable on Transformative megatrends",
  },
  {
    date: 2,
    month: 5,
    eventTitle: "Virtual RoundTable on Transformative megatrends",
  },
  {
    date: 4,
    month: 5,
    eventTitle: "Virtual RoundTable on Transformative megatrends",
  },
  {
    date: 7,
    month: 5,
    eventTitle: "Virtual RoundTable on Transformative megatrends",
  },
];

jQuery(document).ready(function () {
  //alert('Inside custom script');
  jQuery(".mark-as-read").click(function () {
    console.log("The function is hooked up");
    var form_data = jQuery("#calender_form").serializeArray();
    jQuery.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "fetch_calender_events",
        message_id: $(".mark-as-read").val(),
        user_industry: $(".user_industry").val(),
        user_area_of_interest: $(".user_area_of_interest").val(),
        user_region: $(".user_region").val(),
        year: $(".year").val(),
        month: $(".month").val(),
      },
      success: function (output) {
        console.log(output.data);
        const events = [];
        output.data.forEach((element) => {
          events.push(
            "<h1>Event title ---- " +
              element.title +
              " ---- with ID : " +
              element.ID
          );
        });
        jQuery(".event-list-container").html(events);
      },
    });
  });
});

function initArticleMiniSlider() {
  $(".mini-article-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  });
}
$(document).ready(function () {
  console.log("ready!", dates);

  //calendar
  var element = document.getElementById("my-calendar");
  // Create the calendar
  // SET event list
  // dates.forEach((item, i) => {
  //   console.group(item.eventTitle);
  //   // $(".event-list").append(
  //   //   `<li class = "event-item">
  //   //     <div class = "event-date-mini">
  //   //       <div class = "event-month">${item.month}</div>
  //   //       <div> class = "event-date">${item.date}</div>
  //   //     </div>
  //   //     <div class = "event-date-title>
  //   //     ${item.eventTitle}
  //   //     </div>
  //   //   </li>`
  //   // );
  //   $(".event-list").append(`<li>
  //   <div class = "event-left">
  //     <div class = "event-month">${item.month}</div>
  //     <div class="event-date">${item.date}</div>
  //     </div>
  //   <div class = "event-title">event right</div>
  //   <li>`);
  // });
  if (element) {
    var myCalendar = jsCalendar.new(element);

    myCalendar.onDateClick(function (event, date) {
      console.log("date click", new Date(date).getDate());
      // inputA.value = date.toString();
    });
    myCalendar.onMonthChange(function (event, date) {
      // inputB.value = date.toString();
    });
  }

  // var calendar = $("#fs-calendar");
  // var myCalendar = jsCalendar.new(calendar);
  function initSlider() {
    $(".section-hero").slick({
      fade: false,
      auto: true,
      autoplay: true,
      autoplaySpeed: 5000,
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
      slidesToScroll: 4,
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
      slidesToShow: 4,
      slidesToScroll: 3,
      prevArrow:
        "<div class = 'slick-custom-prev slick-custom slick-position-end'><span></span></div>",
      nextArrow:
        "<div class = 'slick-custom-next slick-custom slick-position-end'><span></span></div>",
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
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      prevArrow:
        "<div class = 'slick-custom-prev slick-custom slick-position-center-outside'><span></span></div>",
      nextArrow:
        "<div class = 'slick-custom-next slick-custom slick-position-center-outside'><span></span></div>",
    });
  }

  AOS.init();
  // initSlider();
  // new WOW().init();

  $(".fs-ham").on("click", function () {
    console.log("menu clicked");

    if ($(".menu").hasClass("visible")) {
      $(".menu").removeClass("visible");
    } else {
      $(".menu").addClass("visible");
    }
  });

  $(".bell").on("click", function () {
    $(".notification-container").toggleClass("visible");
  });

  if (window.innerWidth < 768) {
    initArticleMiniSlider();
  }
  const section3 = document.getElementById("section3");
  const section4 = document.getElementById("section4");
  const section5 = document.getElementById("section5");
  const section3Pos = section3.offsetTop - 200;
  const section4Pos = section4.offsetTop - 200;
  const section5Pos = section5.offsetTop - 200;

  // console.log("section3", topPos);

  $(window).on("scroll", function () {
    if (window.scrollY > section3Pos) {
      $(".nav-fixed").addClass("visible");
    } else {
      $(".nav-fixed").removeClass("visible");
    }
    if (window.scrollY > section3Pos && window.scrollY < section4Pos) {
      $(".nav-item.pill:not(.section1)").removeClass("active");
      $(".section1").addClass("active");
      console.log("between one and two");
    } else if (window.scrollY > section4Pos && window.scrollY < section5Pos) {
      $(".nav-item.pill:not(.section2)").removeClass("active");
      $(".section2").addClass("active");
      console.log("between two and three");
    } else if (window.scrollY > section5Pos) {
      $(".nav-item.pill:not(.section3)").removeClass("active");
      $(".section3").addClass("active");
      console.log("above 3");
    }
  });

  // const calendar = new VanillaCalendar("#calendar");
  // calendar.init();

  $(".video-thumbnail").on("click", function () {
    console.log("click on video thumbnail");
    $(".overlay").addClass("visible");
    $("body").addClass("overlay-visible");
  });

  $(".overlay").on("click", function (e) {
    console.log("clicked on overlay");
    // e.stopPropagation();
    $(this).removeClass("visible");
    $("iframe").attr("src", $("iframe").attr("src"));
    $("body").removeClass("overlay-visible");
  });

  $(".icon-search").on("click", function () {
    $(".search-input").toggleClass("visible");
    $(".icon-search").toggleClass("search-visible");
  });
});
