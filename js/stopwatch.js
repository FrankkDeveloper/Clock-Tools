const stopwatch = document.getElementById("stopwatch");
const btn_play = document.getElementById("play");
const btn_stop = document.getElementById("stop");
const btn_reset = document.getElementById("reset");

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
  /*   let dataTime = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }; */
  clearInterval(time);
  btn_play.removeAttribute("disabled");
}

function reset() {
  stopwatch.innerHTML = "00:00:00";
  (hours = 0), (minutes = 0), (seconds = 0);
}

btn_play.addEventListener("click", load);
btn_stop.addEventListener("click", stop);
btn_reset.addEventListener("click", reset);
