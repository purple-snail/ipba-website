const items = document.querySelectorAll(".item")
let ms = 0

items.forEach((item) => {
    item.style.setProperty("animation-delay", ms + "ms")
    item.classList.add("animate__animated", "animate__fadeInLeft")
    ms = ms + 100

    item.onclick = (event) => {
        event.preventDefault()
        goto(item.getAttribute("href"))
    }
})

function goto(link) {
    ms = 0
    for (let index = items.length - 1; index >= 0; index--) {
        const item = items[index];
        item.style.setProperty("animation-delay", ms + "ms")
        item.classList.remove("animate__fadeInLeft")
        item.classList.add("animate__animated", "animate__fadeOutRight")
        ms = ms + 100
    }

    setTimeout(() => {
        window.location.href = link
    }, 200 * items.length)
}
