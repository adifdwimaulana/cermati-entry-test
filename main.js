const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

const cookie = document.getElementById("cookie");
const hero = document.getElementById("hero");
const highlight = document.getElementById("highlight");
const footer = document.getElementsByName("footer");

function hideCookie() {
  const height = cookie.offsetHeight;

  cookie.style.transform = "translateY(-100%)";
  hero.style.marginTop = `-${height}px`;
}
