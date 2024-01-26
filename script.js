let menuBar = document.querySelector(".menu-bar");
let navBar = document.querySelector(".nav-bar");
let sections = document.querySelectorAll("section .pages");
let navLinks = document.querySelectorAll("header nav ul li a");
let header = document.getElementById("header-tag");

menuBar.onclick = () => {
    navBar.classList.toggle("active");
    header.classList.toggle("activate-border");
};

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("activate");
                links.classList.remove("mobile-active");
                document.querySelector("header nav ul li a[href*=" + id + "]").classList.add("activate");
                document.querySelector("header nav ul li a[href*=" + id + "]").classList.add("mobile-active");
            })
        }
    });
};