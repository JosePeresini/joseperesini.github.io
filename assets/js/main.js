const body = document.querySelector("body");
const navButton = document.querySelector(".navigation__button");
const navMenu = document.querySelector(".mobile__button");
const navMenuList = document.querySelector(".mobile");
const footerButton = document.querySelector(".footer__button--absolute");
const mobileLinks = document.querySelectorAll(".mobile__a");

let isMenuOpen = false;

function toggleMobileMenu(event) {
	event.stopPropagation();

	if (!isMenuOpen) {
		navMenuList.style.display = "flex";
		navMenu.setAttribute("aria-expanded", "true");
		navMenu.setAttribute("aria-label", "Cerrar menú de navegación");
		isMenuOpen = true;

		const icon = navMenu.querySelector(".mobile__i");
		icon.classList.remove("bi-list");
		icon.classList.add("bi-x");
	} else {
		navMenuList.style.display = "none";
		navMenu.setAttribute("aria-expanded", "false");
		navMenu.setAttribute("aria-label", "Abrir menú de navegación");
		isMenuOpen = false;

		const icon = navMenu.querySelector(".mobile__i");
		icon.classList.remove("bi-x");
		icon.classList.add("bi-list");
	}
}

function closeMobileMenu() {
	if (isMenuOpen) {
		navMenuList.style.display = "none";
		navMenu.setAttribute("aria-expanded", "false");
		navMenu.setAttribute("aria-label", "Abrir menú de navegación");
		isMenuOpen = false;

		const icon = navMenu.querySelector(".mobile__i");
		icon.classList.remove("bi-x");
		icon.classList.add("bi-list");
	}
}

function scrollToTop() {
	window.scrollTo({
		top: 0,
	});
}

function handleMobileLinkClick(event) {
	setTimeout(() => {
		closeMobileMenu();
	}, 100);
}

navMenu.addEventListener("click", toggleMobileMenu);

body.addEventListener("click", function (event) {
	if (
		isMenuOpen &&
		!navMenuList.contains(event.target) &&
		!navMenu.contains(event.target)
	) {
		closeMobileMenu();
	}
});

mobileLinks.forEach((link) => {
	link.addEventListener("click", handleMobileLinkClick);
});

navButton.addEventListener("click", scrollToTop);

// Scroll al inicio al hacer clic en el botón del footer
// if (footerButton) {
// 	footerButton.addEventListener("click", scrollToTop);
// }

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape" && isMenuOpen) {
		closeMobileMenu();
	}
});

window.addEventListener("resize", function () {
	if (window.innerWidth >= 1024 && isMenuOpen) {
		closeMobileMenu();
	}
});

document.addEventListener("DOMContentLoaded", function () {
	navMenuList.style.display = "none";
	navMenu.setAttribute("aria-expanded", "false");

	document.body.classList.add("js-enabled");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));

		if (target) {
			const navHeight = document.querySelector(".navigation").offsetHeight;
			const targetPosition = target.offsetTop - navHeight - 20;

			window.scrollTo({
				top: targetPosition,
				behavior: "smooth",
			});
		}
	});
});
