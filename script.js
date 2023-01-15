const switchMenu = document.getElementById('switch-menu')
const backArrow = document.getElementById('back-arrow')
let timeline = gsap.timeline()

switchMenu.onclick = () => {
    timeline.to('#quarter-menu', {
        opacity: 0,
        zIndex: 0,
        duration: 0.5
    })

    timeline.to('#website-menu', {
        opacity: 1,
        zIndex: 999,
        duration: 0.5
    })

    timeline.to('#back-arrow', {
        opacity: 1,
        zIndex: 1000,
        duration: 0.5
    })
}

backArrow.onclick = () => {
    timeline.to('#website-menu', {
        opacity: 0,
        zIndex: 0,
        duration: 0.5
    })

    timeline.to('#back-arrow', {
        opacity: 0,
        zIndex: 0,
        duration: 0.5
    })

    timeline.to('#quarter-menu', {
        opacity: 1,
        zIndex: 999,
        duration: 0.5
    })
}
