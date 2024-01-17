// Hamburger
const Hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

Hamburger.addEventListener("click", () => {
  Hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

window.addEventListener("scroll", () => {
  Hamburger.classList.remove("hamburger-active");
  navMenu.classList.add("hidden");
});
