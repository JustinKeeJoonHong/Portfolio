const header = document.getElementById("header");
const hideMenu = document.querySelector(".hideMenu");

header.addEventListener("mouseover", () => {
  // hidemenu 클래스중에 "on" 이 포함 되어있다면
  if (hideMenu.classList.contains("on")) {
    // 클래스 중에 on 삭제
    hideMenu.classList.remove("on");
  } else {
    hideMenu.classList.add("on");
  }
});

header.addEventListener("mouseleave", () => {
  // hidemenu 클래스중에 "on" 이 포함 되어있다면
  if (hideMenu.classList.contains("on")) {
    // 클래스 중에 on 삭제
    hideMenu.classList.remove("on");
  } else {
    hideMenu.classList.add("on");
  }
});
