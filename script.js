const switchMenu = document.getElementById('switch-menu')
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
        x: 46,
        duration: 0.5
    })
}

