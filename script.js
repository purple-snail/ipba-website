const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(
                "animate__animated",
                "animate__fadeInRightBig"
            );
        }
    });
});

const groupMembers = document.querySelectorAll(".group-member");
let ms = 0;

groupMembers.forEach((el) => {
    el.style.setProperty("animation-delay", ms + "ms");
    observer.observe(el);
    ms = ms + 100;
});

window.addEventListener("scroll", (e) => {
    const nav = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
        nav.classList.add("add-shadow");
    } else {
        nav.classList.remove("add-shadow");
    }
});
