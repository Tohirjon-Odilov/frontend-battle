$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

let menu = document.querySelector(".menu-bar");
let close = document.querySelector(".close-bar");
let headerList = document.querySelector(".header__list");

menu.addEventListener("click", () => {
  close.classList.toggle("show");
  menu.classList.toggle("hide");
});

close.addEventListener("click", () => {
  close.classList.toggle("show");
  menu.classList.toggle("hide");
});
