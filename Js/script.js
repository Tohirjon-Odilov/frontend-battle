$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

let menu = document.querySelector(".menu-bar");
let close = document.querySelector(".close-bar");
let headerList = document.querySelector(".header__list");

menu.addEventListener("click", () => {
  close.classList.toggle("show");
  menu.classList.toggle("hide");
  headerList.classList.add("top");
  headerList.classList.remove("bottom");
});

close.addEventListener("click", () => {
  close.classList.toggle("show");
  menu.classList.toggle("hide");
  headerList.classList.remove("top");
  headerList.classList.add("bottom");
});
