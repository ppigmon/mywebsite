"use strict";

// theme toggle switch
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// theme stored in users local storage

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// checking to see if there's a saved user preference

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// const icon = document.getElementById("icon");

// icon.onclick = function () {
//   document.body.classList.toggle("dark-theme");
//   if(document.body.classList.contains('dark-theme')) {
//       icon.src = 'imgs/sun.png'
//   }
//   else {
//       icon.src = 'imgs/moon.png'
//   }
// };

// CONTACT FORM SUCCESS OR ERROR MESSAGE

var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks! Message sent!";
      status.classList.add("success");
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem.";
      status.classList.add("error");
    });
}
form.addEventListener("submit", handleSubmit);

// SMOOTH SCROLL EFFECT

// function smoothScroll(section, dur) {
//   var section = document.querySelector(section);
//   let sectionPosition = section.getBouningClientRect().top;
//   let startPostion = window.pageYOffset;
//   let distance = sectionPosition - startPostion;
//   let startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime === currentTime;
//     let timeElapased = current - startTime;
//     let runAnimation = ease(timeElapased, startPostion, distance, dur);
//     window.scrollTo(0, runAnimation);
//     if (timeElapased < dur) requestAnimationFrame(animation);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
// }

// let home = document.querySelector(".home-button");
// let about = document.querySelector("about-button");
// let work = document.querySelector("work-button");
// let contact = document.querySelector("contact-button");

// let homeSection = document.querySelector('.home')
// let aboutSection = document.querySelector('.about')
// let workSection = document.querySelector('.work')
// let contactSection = document.querySelector('.contact')

// home.addEventListener("click", function () {
//   smoothScroll(homeSection, 1000);
// });
// about.addEventListener("click", function () {
//   smoothScroll(aboutSection, 1000);
// });
// work.addEventListener("click", function () {
//   smoothScroll(workSection, 1000);
// });
// contact.addEventListener("click", function () {
//   smoothScroll(contactSection, 1000);
// });
