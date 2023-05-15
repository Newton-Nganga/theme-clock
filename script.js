const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const sTimer = document.querySelector(".timer");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const themeContainer = document.querySelector(".themes");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const themeColors = [
  { bg: "#269b43", b: "#0b0f0c" },
  { bg: "#26979b", b: "#0b0f0f" },
  { bg: "#3d7cda", b: "#0d1116" },
  { bg: "#d7e240", b: "#0f0f0b" },
  { bg: "#c7324b", b: "#12121f" },
];



window.addEventListener('load',()=>{
  themeColors.forEach((el) => {
  const btn = document.createElement("button");
  btn.classList.add("theme-btn");
  btn.style.backgroundColor = el.bg;
  btn.addEventListener("click",()=>{
     document.getElementsByTagName("body")[0].style.backgroundColor = el.b;
     const timed = document.querySelectorAll(".t-i");
     timed.forEach((e) => (e.style.backgroundColor = el.b));
     document.querySelector('.clock').style.borderColor = el.bg
  })
  themeContainer.appendChild(btn);
});
  
})

// toggle.addEventListener('click', (e) => {
//     const html = document.querySelector('html')
//     if (html.classList.contains('dark')) {
//         html.classList.remove('dark')
//         e.target.innerHTML = 'Dark mode'
//     } else {
//         html.classList.add('dark')
//         e.target.innerHTML = 'Light mode'
//     }
// })

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  sTimer.innerHTML = seconds;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
