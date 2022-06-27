const header = document.getElementById("header");
const hide_menu = document.querySelector(".hide_menu");

header.addEventListener("click", () => {
  if (hide_menu.classList.contains("on")) {
    hide_menu.classList.remove("on");
  } else {
    hide_menu.classList.add("on");
  }
});

/* 베너파트 */

const bannerBox = document.querySelector("#bannerBox > ul");
const item = document.querySelectorAll(".item");

const size = item[0].clientWidth;

let counter = 0;

nextBtn.addEventListener("click", () => {
  if (counter < item.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter == item.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else {
    counter = item.length - 1;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

const circle = document.getElementById("circle");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  circle.style.left = mouseX + "px";
  circle.style.top = mouseY + "px";
});

const container = document.getElementById("container");

document.addEventListener("click", () => {
  if (circle.innerText === "pause") {
    circle.innerText = "play";
  } else {
    circle.innerText = "pause";
  }
});
