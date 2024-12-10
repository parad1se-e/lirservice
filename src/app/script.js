const accordion = document.getElementsByClassName("accordion__button");
const burger = document.querySelector(".burger");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".header__link");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

burger.addEventListener("click", () => {
  burger.classList.toggle("burger__active");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
    header.style.position = "fixed";
    if (window.innerWidth <= 480) {
      document.body.style.overflow = "scroll";
    }
  } else {
    nav.style.display = "flex";
    header.style.position = "fixed";
    if (window.innerWidth <= 480) {
      document.body.style.overflow = "hidden";
    }
  }
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.style.display = "none";
      burger.classList.remove("burger__active");
      header.style.position = "static";
      document.body.style.overflow = "auto";
    });
  });
});