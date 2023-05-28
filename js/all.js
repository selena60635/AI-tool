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
$(document).ready(function () {
  $(".option1__content").hide();
  $(".option1").click(function (e) {
    e.preventDefault();
    $(".icon-add1").toggleClass("opacity");
    $(".option1__content").slideToggle();
  });
});
$(document).ready(function () {
  $(".option2__content").hide();
  $(".option2").click(function (e) {
    e.preventDefault();
    $(".icon-add2").toggleClass("opacity");
    $(".option2__content").slideToggle();
  });
});
$(document).ready(function () {
  $(".option3__content").hide();
  $(".option3").click(function (e) {
    e.preventDefault();
    $(".icon-add3").toggleClass("opacity");
    $(".option3__content").slideToggle();
  });
});
$(document).ready(function () {
  $(".option4__content").hide();
  $(".option4").click(function (e) {
    e.preventDefault();
    $(".icon-add4").toggleClass("opacity");
    $(".option4__content").slideToggle();
  });
});
$(document).ready(function () {
  $(".option5__content").hide();
  $(".option5").click(function (e) {
    e.preventDefault();
    $(".icon-add5").toggleClass("opacity");
    $(".option5__content").slideToggle();
  });
});
//漢堡選單按鈕
$(document).ready(function () {
  $(".nav-icon__list").toggle();
  $(".icon-menu").click(function (e) {
    e.preventDefault();
    $(".icon-menu").toggleClass("opacity");
    $("main,.footer-link").toggle();
    $(".nav-icon__list").toggle();
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
