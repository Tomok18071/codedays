"use strict";

// aos
AOS.init({
  duration: 1000,
});



/* ------------------------------------------------ */
/* ハンバーガーメニュー */
/* ------------------------------------------------ */
$('.nav_toggle').on('click', function () {
  $('.nav_toggle, .nav').toggleClass('show');
});


/* ------------------------------------------------ */
/* ページ内リンクをクリックした時のハンバーガーメニューの動作 */
/* ------------------------------------------------ */
$(function () {
  $(".nav_menu_link").on('click', function () {
  $('.nav_toggle, .nav').toggleClass('show');
  });
});

/* ------------------------------------------------ */
/* スムーススクロール */
/* ------------------------------------------------ */
$('a[href^="#"]').click(function () {
  var speed = 600;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});
