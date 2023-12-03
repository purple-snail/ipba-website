const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')
const faqItems = document.querySelectorAll('.faq-item')
const arrows = document.querySelectorAll('.arrow')
let slideIndex = 0
let isPaused = false
let timer

function showSlide() {
    if (slideIndex >= slides.length) {
        slideIndex = 0
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach((slide) => {
        slide.style.display = 'none'
    })

    dots.forEach((dot) => {
        dot.classList.remove('active')
    })

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].classList.add('active')
}

function pauseInterval() {
    isPaused = true

    timer = setTimeout(() => {
        isPaused = false
    }, 5000)
}

dots.forEach((dot, i) => {
    dot.onclick = () => {
        clearTimeout(timer)
        slideIndex = i
        showSlide(slideIndex)

        pauseInterval()
    }
})

prevButton.onclick = () => {
    clearTimeout(timer)
    slideIndex--;
    showSlide(slideIndex)

    pauseInterval()
}

nextButton.onclick = () => {
    clearTimeout(timer)
    slideIndex++;
    showSlide(slideIndex)

    pauseInterval()
}

showSlide(slideIndex)

setInterval(() => {
    if (isPaused == false) {
        slideIndex++;
        showSlide(slideIndex);
    }
}, 2000)


questions.forEach((question, index) => {
    question.onclick = () => {
        let answer = answers[index]
        let arrow = arrows[index]

        question.classList.toggle('active')

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null
			answer.classList.remove('show')
            arrow.classList.remove('open')
        } else {
            answer.style.maxHeight = answer.scrollHeight * 2 + 'px'
			answer.classList.add('show')
            arrow.classList.add('open')
        }
    }
})

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate__animated', 'animate__fadeInLeft')
		}
	})
})

let ms = 100

faqItems.forEach((item) => {
	item.style.setProperty('animation-delay', ms + 'ms')
	observer.observe(item)
	ms = ms + 100
})
