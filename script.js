// Navbar Scroll Effect

window.addEventListener("scroll", function(){

    let navbar = document.getElementById("navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});


// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});