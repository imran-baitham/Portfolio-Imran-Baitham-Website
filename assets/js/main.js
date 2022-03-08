// theme__color
const themeChangerColor = document.getElementById("theme__color");
themeChangerColor.addEventListener("click", () => {
  document.querySelector(".theme__model").style.display = "block";
});

const closetheme = document.querySelector(".theme_close");
closetheme.addEventListener("click", () => {
  document.querySelector(".theme__model").style.display = "none";
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scrool__header");
  } else {
    header.classList.remove("scrool__header");
  }
};
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/

const modelViews = document.querySelectorAll(".services__model"),
  modelBtns = document.querySelectorAll(".services__button"),
  modelClose = document.querySelectorAll(".services__modal-close");

let model = (modelClick) => {
  modelViews[modelClick].classList.add("active-modal");
};

modelBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    model(i);
  });
});

modelClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modelViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

/* Link active work */

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// const sections = document.querySelectorAll("section[id]");
// function scroolActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(`.nav__menu a[href*=` + sectionId + `]`)
//         .classList.add("active__link");
//     } else {
//       document
//         .querySelector(`.nav__menu a[href*=` + sectionId + `]`)
//         .classList.remove("active__link");
//     }
//   });
// }
// window, addEventListener("scroll", scroolActive);

// Html
// <!-- <a href="#home" class="nav__link active__link"> -->
// Css
/* Active link */
// .active__link {
//   /* background-image: linear-gradient(
//     180deg,
//     hsla(var(--first-hue), var(--sat), var(--lig), 1),
//     hsla(var(--first-hue), var(--sat), var(--lig), 0.2)
//     );
//     box-sizing: 0 0 16px hsla(var(--first-hue), var(--sat), var(--lig), 0.4);
//     color: var(--first-hue);
//     /* line-height: 20px; */
//   /* text-decoration: underline red; */
//   /* margin-top: 10%; */
// }

/*=============== LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");

const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectTheme = localStorage.getItem("selected-theme");
const selectIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectTheme) {
  document.body.classList[selectTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectTheme === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/

// const sr = scrollReveal({
//   origin: "top",
//   distance: "60px",
//   duration: 2500,
//   delay: 400,
// });

// sr.reveal(`.home__data`);
// sr.reveal(`.home__handle`, { delay: 700 });
// sr.reveal(`.home__social , .home__scrool`, { delay: 900, origin: "bottom" });

// ================== Live Date ===========================
const updateClock = () => {
  let now = new Date();
  let dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const week = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wedday",
    "Thursday",
    "Friday",
    "Satday",
  ];
  const ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];
  const values = [week[dname], months[mo], dnum + "th"];
  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
};

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}


// <button class="button" onclick="popup()">new Tab</button>
// initClock();
// function popup() {
//   window.open("work.php", "work", "width=800,height=500");
// }
