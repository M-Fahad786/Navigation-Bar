let menuBar = document.querySelector("#menu-bars");
let navBar = document.querySelector(".nav");

menuBar.onclick = () => {
  menuBar.classList.toggle("fa-times")
  navBar.classList.toggle("active")
}

