import "./assets/scss/all.scss";
import * as bootstrap from "bootstrap";

document.querySelector("#menu-button").addEventListener("click", (e) => {
	// document.querySelector("#menu-button").classList.toggle("active");
	const btn = document.querySelector("#menu-button");
	const offcanvas = document.querySelector("#mainNav");
	const bsOffcanvas = new bootstrap.Offcanvas(offcanvas, {
		keyboard: false,
		backdrop: "static",
	});

	if (!btn.classList.contains("active")) {
		btn.classList.add("active");
		setTimeout(() => {
			bsOffcanvas.show();
		}, 300);
	} else {
		btn.classList.remove("active");
		offcanvas.classList.remove("show");
		document.querySelector(".offcanvas-backdrop").remove();
	}
});

function rmMainActive() {
	const btn = document.querySelector("#menu-button");
	let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	if (width >= 992 && btn.classList.contains("active")) {
		btn.classList.remove("active");
	}
}

rmMainActive();

window.addEventListener("resize", function () {
	rmMainActive();
});
