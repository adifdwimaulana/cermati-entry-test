const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

const cookie = document.getElementById("cookie");
const hero = document.getElementById("hero");
const newsletter = document.getElementById("newsletter");

function hideCookie() {
  const height = cookie.offsetHeight;

  cookie.style.transform = "translateY(-100%)";
  hero.style.marginTop = `-${height}px`;
}

function hideNewsletter() {
  const height = newsletter.offsetHeight;
  localStorage.setItem("closed_at", new Date());

  newsletter.style.transform = "translateY(100%)";
}

function getScrollPercentage() {
  return (
    ((document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100
  );
}

window.onscroll = () => {
  const cacheDate = localStorage.getItem("closed_at");
  const closedAt = new Date(cacheDate);
  const now = new Date();

  const minutes = parseInt(
    (Math.abs(now.getTime() - closedAt.getTime()) / (1000 * 60)) % 60
  );

  if (getScrollPercentage() > 33.3) {
    if (minutes >= 10 || !cacheDate) {
      newsletter.style.transform = "translateY(0)";
    }
  }
};
