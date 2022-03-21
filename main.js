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

// COLLAPSIBLE NAV BAR

const navOpen = document.getElementById("nav-open");
const nav = document.getElementById("nav");
const socialLinks = document.getElementById("social-links");
const themeSwitch = document.getElementById("theme-switch-container");
const navClose = document.getElementById("nav-close");

navOpen.addEventListener("click", () => {
  nav.classList.toggle("active");
  socialLinks.classList.toggle("active");
  themeSwitch.classList.toggle("active");
  navClose.classList.toggle("active");
  navOpen.classList.toggle("active");
});
navClose.addEventListener("click", () => {
  nav.classList.toggle("active");
  socialLinks.classList.toggle("active");
  themeSwitch.classList.toggle("active");
  navClose.classList.toggle("active");
  navOpen.classList.toggle("active");
});

// skills bar chart

// const ctx = document.getElementById("myChart").getContext("2d");

// const labels = ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"];

// const data = {
//   labels,
//   datasets: [
//     {
//       data: [2, 2, 2, 1, 1, 5],
//       backgroundColor: "#0dd3ff",
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     layout: {
//       padding: 100,
//     },
//     responsive: true,
//     scales: {
//       x: {
//         grid: {
//           lineWidth: 0,
//         },
//       },
//       y: {
//         grid: {
//           lineWidth: 1,
//         },
//         ticks: {
//           callback: function (value, index, ticks) {
//             if (value == 1) {
//               return "Novice";
//             } else if (value == 2) {
//               return "Beginner";
//             } else if (value == 3) {
//               return "Intermediate";
//             } else if (value == 4) {
//               return "Expert";
//             } else if (value == 5) {
//               return "Profesional";
//             }
//           },
//         },
//       },
//     },
//   },
// };

// Chart.defaults.font.size = 20;
// Chart.defaults.font.family = " 'Ubuntu', 'Aeriel' ";
// Chart.defaults.plugins.legend.display = false;

// const myChart = new Chart(ctx, config);
