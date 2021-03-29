const $hour = document.getElementById("hour");
const $date = document.getElementById("date");

const week = [
  "Domingo",
  "lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
const months = [
  "Enero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const updateDate = () => {
  const date = new Date();

  let hour = date.getHours(),
    minutes = date.getMinutes(),
    //seconds = date.getSeconds(),
    AMPM,
    days = date.getDate(),
    daysWeek = date.getDay(),
    month = date.getMonth(),
    year = date.getUTCFullYear();

  $date.textContent = `${week[daysWeek]} ${days} de ${months[month]} del ${year}`;

  if (hour >= 12) {
    hour -= 12;
    AMPM = "PM";
  } else {
    AMPM = "AM";
  }

  if (hour == 0) hour = 12;
  if (minutes <= 9) minutes = "0" + minutes;

  if (hour < 6) {
    document.title = "Clock ☀️";
  } else if (hour >= 6) {
    document.title = "Clock 🌕";
  }

  $hour.textContent = `${hour}:${minutes} ${AMPM}`;
};

setInterval(updateDate, 1000);
