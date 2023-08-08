//==================== SECTION FLASHING EFFECT CHAPTER =======================================

const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
        })
    },
    {
        threshold: 0.3,
    }
)

cards.forEach(card => {
    observer.observe(card)
})



//==================== RESPONSIVE NAVBAR CHAPTER =======================================

const toggleButton = document.getElementsByClassName('header__toggle_button')[0]
const navbarLinks = document.getElementsByClassName('header__navbar')[0]
const crossBtn = document.getElementsByClassName('header__cross_button')[0]
const burgerBars = document.querySelectorAll('.header__toggle_button__bar')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    crossBtn.classList.toggle('header__cross_button--active')

    for (let elem of burgerBars) {
        elem.classList.toggle('header__toggle_button__bar--unactive')
    }
})

