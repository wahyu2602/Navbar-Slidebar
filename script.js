const menuToggle = document.querySelector(".menu-toggle");
const slidebar = document.querySelector(".menu-slide");
const containerScale = document.querySelector(".container-scale");

menuToggle.addEventListener("click", function () {
  slidebar.classList.toggle("menu-toggle-active");
  containerScale.classList.toggle("container-scale-active");
});
