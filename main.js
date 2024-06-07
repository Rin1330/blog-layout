import "./assets/scss/all.scss";
import * as bootstrap from "bootstrap";
import Swiper from "swiper/bundle";
import { gsap } from "gsap";

import "swiper/css/bundle";

const header = document.querySelector("#header");
const target = document.querySelector("#work");
const list = ["position-sticky", "top-0", "start-0", "z-5", "bg-white"];

function cb(payload) {
	console.log(payload[0]);
	console.log(payload[0].isIntersecting);
	console.log(payload[0].intersectionRatio);
}

const ob = new IntersectionObserver(cb, {
	// root: target,
	// threshold: 0.5,
});

ob.observe(target);

// const handler = entries => {
//   !entries[0].isIntersection ?  header.classList.add(...list) : header.classList.remove(...list)
// }
// const observer = new window.IntersectionObserver(handler, option)
// observer.observe(header);

const navbarBtn = document.querySelector(".navbar-toggler");
navbarBtn.addEventListener("click", (e) => {
	e.preventDefault();
	navbarBtn.classList.toggle("open-menu");
});

const swiper = new Swiper("#articles .swiper", {
	slidesPerView: 1,
	spaceBetween: 24,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
	},
	pagination: {
		el: "#articles .swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return `<a href="javascript:;" class="${className} fs-0 w-3 h-3 mx-2 my-2 bg-black">${index + 1}</a>`;
		},
	},
});
