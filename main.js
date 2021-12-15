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
