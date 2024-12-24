const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".menu__close");
const overlay = document.querySelector(".menu__overlay");
const typetext = document.querySelector(".promo__title");
const upBtn = document.querySelector(".up");
const contactsBlock = document.querySelector(".contacts");

window.onscroll = function () {
  scrollFunction();
};

let heightList = document.documentElement.scrollHeight;

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

burger.addEventListener("click", () => {
  menu.classList.add("active");
});
close.addEventListener("click", () => {
  menu.classList.remove("active");
});
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
});
