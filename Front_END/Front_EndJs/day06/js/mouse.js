"use strict";

const circle = document.getElementById("circle");

// 배열 반환
// querySelectorAll , elementsbyclassname

/* 
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  circle.style.left = mouseX + "px";
  circle.style.top = mouseY + "px";
});
 */

const font = document.getElementById("font");
const container = document.getElementById("container");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  if (mouseY > 48 && mouseX < 1600) {
    font.style.display = "block";
    font.style.left = mouseX + "px";
    font.style.top = mouseY + "px";
  } else {
    font.style.display = "none";
  }
});

container.addEventListener("click", () => {
  console.log(font);
  if (font.innerText === "pause") {
    font.innerText = "play";
    setTimeout(() => {
      font.innerText = "pause";
    }, 3000);
    setTimeout(() => {
      font.innerText = "play";
    }, 4000);
  } else {
    font.innerText = "pause";
  }
});
