const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        navBar.classList.add("visible");
    } else {
        navBar.classList.remove("visible");
    }
});