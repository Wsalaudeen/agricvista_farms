const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "flex";
  }
});
