import "./assets/scss/all.scss";
import * as bootstrap from "bootstrap";

const navbarBtn = document.querySelector('.navbar-toggler');
navbarBtn.addEventListener('click', e => {
  e.preventDefault();
  navbarBtn.classList.toggle('open-menu')
})