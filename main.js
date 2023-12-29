const mobileNav = document.querySelector("#mobileNav");
const hamburger = document.querySelector(".hamburger");
const body = document.body;

// new Date().getFullYear();

mobileNav.classList.add("mobile");

// HAMBURGER NAVIGATION

hamburger.addEventListener("click", () => {
	mobileNav.classList.toggle("mobile");
	document.documentElement.classList.toggle("scroll-lock");
});

// OPEN MODAL

document.querySelectorAll(".openModal").forEach((btn) => {
	btn.addEventListener("click", function () {
		document.getElementById("myModal").style.display = "flex";
		document.documentElement.classList.add("no-scroll");
	});
});

// CLOSE MODAL

document.getElementById("closeModal").addEventListener("click", function () {
	document.getElementById("myModal").style.display = "none";
	document.documentElement.classList.remove("no-scroll");
});

// CLOSE MODAL WITH OVERLAY

document.querySelector(".modal-overlay").addEventListener("click", function () {
	document.getElementById("myModal").style.display = "none";
	document.documentElement.classList.remove("no-scroll");
});
