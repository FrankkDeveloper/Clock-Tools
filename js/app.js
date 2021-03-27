const btn_darkmode = document.getElementById("btn-dark-mode");

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

function redirect(addres) {
  window.location = addres;
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
btn_darkmode.addEventListener("click", darkMode);
