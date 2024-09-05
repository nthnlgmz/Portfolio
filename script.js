const showMenu = (e, o) => {
  let t = document.getElementById(e),
    n = document.getElementById(o);
  document.addEventListener("DOMContentLoaded", function () {
    new Swiper("#swiperContainer", {
      loop: !1,
      pagination: { el: ".swiper-pagination", clickable: !0 }
    });
  }),
    n &&
      t &&
      t.addEventListener("click", () => {
        n.classList.toggle("show--menu");
      });
};
showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav__link"),
  linkAction = () => {
    let e = document.getElementById("nav-menu");
    e.classList.remove("show--menu");
  };
function onScroll(e) {
  for (
    var o = document.querySelectorAll("#nav-menu a"),
      t =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop,
      n = 0;
    n < o.length;
    n++
  ) {
    var l = o[n],
      a = l.getAttribute("href"),
      r = document.querySelector(a);
    r.offsetTop <= t && r.offsetTop + r.offsetHeight > t
      ? (document
          .querySelector("#nav-menu ul li a")
          .classList.remove("active--link"),
        l.classList.add("active--link"))
      : l.classList.remove("active--link");
  }
}
navLink.forEach((e) => e.addEventListener("click", linkAction)),
  window.document.addEventListener("scroll", onScroll);
const scrollHeader = () => {
  let e = document.getElementById("header");
  this.scrollY >= 200
    ? e.classList.add("scroll--header")
    : e.classList.remove("scroll--header");
};
window.addEventListener("scroll", scrollHeader);
const scrollTop = () => {
  let e = document.getElementById("scroll-top");
  this.scrollY >= 560
    ? e.classList.add("show--scroll")
    : e.classList.remove("show--scroll");
};
window.addEventListener("scroll", scrollTop);
var containerEl = document.querySelector(".portfolio__container");
containerEl &&
  mixitup(".portfolio__container", {
    selectors: { target: ".portfolio__content" },
    animation: { duration: 400 }
  });
for (
  var numberButtons = document.querySelectorAll(".portfolio__item"), i = 0;
  i < numberButtons.length;
  i++
)
  numberButtons[i].addEventListener("click", changeButton.bind(null, i));
function changeButton(e, o) {
  for (
    var t = document.getElementsByClassName("active--portfolio"), n = 0;
    n < t.length;
    n++
  )
    t[n].classList.remove("active--portfolio");
  o.target.classList.add("active--portfolio");
}
const mySwiper = new Swiper(".reviews__container ", {
  spaceBetween: 16,
  loop: !0,
  grabCursor: !0,
  pagination: { el: ".swiper-pagination", clickable: !0 },
  breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
});
gsap.from(".home__img", { opacity: 0, duration: 2, delay: 0.2, x: 60 }),
  gsap.from(".home__data", { opacity: 0, duration: 2, delay: 0.8, y: 25 }),
  gsap.from(
    ".home__greeting, .home__name, .home__professional , .home__button",
    {
      opacity: 0,
      duration: 2,
      delay: 1,
      y: 25,
      ease: "expo.out",
      stagger: 0.2
    }
  ),
  gsap.from(".nav__logo, .nav__toggle", {
    opacity: 0,
    duration: 2,
    delay: 1.5,
    y: 25,
    ease: "expo.out",
    stagger: 0.2
  }),
  gsap.from(".nav__item", {
    opacity: 0,
    duration: 2,
    delay: 1.8,
    y: 25,
    ease: "expo.out",
    stagger: 0.2
  }),
  gsap.from(".home__social-icon", {
    opacity: 0,
    duration: 2,
    delay: 2.3,
    y: 25,
    ease: "expo.out",
    stagger: 0.2
  });
