import "./assets/scss/all.scss";
import * as bootstrap from "bootstrap";
import Swiper from "swiper/bundle";
import { gsap } from "gsap";

import "swiper/css/bundle";

document.addEventListener('DOMContentLoaded', () => {

	const header = document.querySelector('#header');
	const sections = document.querySelectorAll('#section:not(.main-banner)')
	const list = ["position-sticky", "top-0", "start-0", "z-5", "bg-white"];

	// if(sections.length < 2) return;

	const option = {
		root: null,
		rootMargin: `50px 0px 0px 0px`,
		threshold: 0.2
	}

	const callBack = (entries, observe) => {
			entries.forEach(entry => {
				console.log(entry); 
				// if(entry.isIntersecting) {
				// 	console.log('hit')
				// }
			})
			// !entry.isIntersecting ? header.classList.add(...list) : header.classList.remove(...list)
	}

	const observer = new IntersectionObserver(callBack, option);

	sections.forEach(section => {
		console.log(section)
		observer.observe(section)
	})


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

})
