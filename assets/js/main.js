/*=============== Visitor Count ===============*/
window.onload = function () {
	fetch("https://llp74j3v63.execute-api.eu-west-1.amazonaws.com/production/getVisitorCount", {
		method: "PUT",
	})
		.then((response) => response.json())
		.then((data) => (document.getElementById("visitorCount").textContent = data))
		.catch((error) => console.error("Error:", error));
};

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

if (navToggle) navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
if (navClose) navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));

/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll(".nav__link");
const linkAction = () => {
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show-menu");
};
navLinks.forEach((navLink) => navLink.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
	const header = document.getElementById("header");
	this.scrollY >= 50
		? header.classList.add("scroll-header")
		: header.classList.remove("scroll-header");
};

/*=============== SWIPER PROJECTS ===============*/

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== EMAIL JS ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
