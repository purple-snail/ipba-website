const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInRightBig')
            entry.target.classList.remove('group-member')
        }
    })
})

const groupMembers = document.querySelectorAll('.group-member')
let ms = 0

groupMembers.forEach((el) => {
    el.style.setProperty('animation-delay', ms + 'ms')
    observer.observe(el)

    ms = ms + 100
})
