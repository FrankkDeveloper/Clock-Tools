const stopwatch = document.getElementById("stopwatch");
const btn_play = document.getElementById("play");
const btn_stop = document.getElementById("stop");
const btn_reset = document.getElementById("reset");
const btn_darkmode = document.getElementById("btn-dark-mode");

let hours = 0,
  minutes = 0,
  seconds = 0,
  time;

function load() {
  btn_play.setAttribute("disabled", "disabled");
  time = setInterval(() => {
    if (seconds == 60) {
      seconds = 0;
      minutes++;

      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
    seconds++;
    stopwatch.innerHTML = `${print(hours)}:${print(minutes)}:${print(seconds)}`;
  }, 1000);
}

function print(value) {
  if (value <= 9) {
    return "0" + value;
  } else {
    return value;
  }
}

function stop() {
  let dataTime = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
  clearInterval(time);
  btn_play.removeAttribute("disabled");
  localStorage.setItem("time", JSON.stringify(dataTime));
}

function reset() {
  stopwatch.innerHTML = "00:00:00";
  (hours = 0), (minutes = 0), (seconds = 0);
}

function darkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");

  //we save the dark-mode in local storage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "true");
    document.querySelector(".btn-dark-mode i").classList.add("fa-moon");
    document.querySelector(".btn-dark-mode i").classList.remove("fa-sun");
  } else {
    localStorage.setItem("dark-mode", "false");
    document.querySelector(".btn-dark-mode i").classList.add("fa-sun");
    document.querySelector(".btn-dark-mode i").classList.remove("fa-moon");
  }
}

//we get the current mode
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  document.querySelector(".btn-dark-mode i").classList.add("fa-moon");
  document.querySelector(".btn-dark-mode i").classList.remove("fa-sun");
} else {
  document.body.classList.remove("dark-mode");
  document.querySelector(".btn-dark-mode i").classList.add("fa-sun");
  document.querySelector(".btn-dark-mode i").classList.remove("fa-moon");
}
btn_play.addEventListener("click", load);
btn_stop.addEventListener("click", stop);
btn_reset.addEventListener("click", reset);
btn_darkmode.addEventListener("click", darkMode);
