const swiper = new Swiper(".swiper", {
  // 分頁、左右箭頭、滾動條若有使用則必需設定
  // 分頁
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 24,
    },
  },
});

//BackToTop按鈕，點選後移至最上面
$(document).ready(function () {
  $(".backtotop").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
//問題集按鈕
$(function () {
  $(".option__content").hide();
  $(".icon-remove").addClass("opacity");
  $(".option").click(function () {
    $(".option__content").slideUp();
    $(".icon-remove").addClass("opacity");
    if ($(".option__content", this).css("display") == "none") {
      $(".option__content", this).slideDown();
      $(".icon-remove", this).removeClass("opacity");
    }
  });
});
//漢堡選單按鈕
$(document).ready(function () {
  $(".nav-icon__list").hide();
  $(".nav-icon__menu ").click(function (e) {
    e.preventDefault();
    $(".nav-icon__menu ").toggleClass("opacity");
    $("main,.footer-link").slideToggle();
    $(".nav-icon__list").slideToggle();
  });
});
//篩選按鈕
$(document).ready(function () {
  $(".filter-float").toggle();
  $(".filter__btn").click(function (e) {
    e.preventDefault();
    $(".filter-float").slideToggle();
  });
});
$(document).ready(function () {
  $(".filter-order").toggle();
  $(".filter__order").click(function (e) {
    e.preventDefault();
    $(".filter-order").slideToggle();
  });
});
