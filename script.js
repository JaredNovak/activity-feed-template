const button = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

button.addEventListener("click", () => {
  menu.classList.toggle("visible");
});

const users = document.querySelectorAll(".user");
const viewbtn = document.getElementById("btn-view");
const scroll = document.querySelector(".users");
const btnmsg = document.getElementById("button-view-all");
const icons = document.querySelectorAll(".icon");
viewbtn.addEventListener("click", () => {
  let index = 0;
  if (scroll.style.overflowY === "scroll") {
    scroll.style.overflowY = "hidden";
    menu.style.height = "52%";
    scroll.scrollTo(0, 0);
    btnmsg.innerText = "View All";
  } else {
    scroll.style.overflowY = "scroll";
    if (window.innerWidth > 332) {
      menu.style.height = "56%";
    } else menu.style.height = "66%";
    btnmsg.innerText = "View less";
  }
  users.forEach((user) => {
    if (index >= 4) {
      user.classList.toggle("visible");
      index++;
    } else {
      index++;
    }
  });
});

let index = 0;
users.forEach((user) => {
  if (index > 3) {
    user.classList.add("hidden");
    index++;
  } else {
    index++;
  }
});
