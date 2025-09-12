function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const expanded = icon.getAttribute("aria-expanded")==="true";

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    icon.setAttribute("aria-expanded", (!expanded).toString());
}

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
