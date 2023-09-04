//==================== SECTION FLASHING EFFECT CHAPTER ================================

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

const header = document.getElementsByClassName('header')[0]

let showMenu = false;

toggleButton.addEventListener('click', toggleMenu)

function toggleMenu() {

    navbarLinks.classList.toggle('active')
    crossBtn.classList.toggle('header__cross_button--active')

    for (let elem of burgerBars) {
        elem.classList.toggle('header__toggle_button__bar--unactive')
    }

    showMenu = !showMenu
    // console.log('showMenu is ', showMenu)
}

document.addEventListener('click', function handleClickOutsideBox(event) {
    if (showMenu) {
        if (!header.contains(event.target)) {
            navbarLinks.classList.toggle('active')
            crossBtn.classList.toggle('header__cross_button--active')

            for (let elem of burgerBars) {
                elem.classList.toggle('header__toggle_button__bar--unactive')
            }
            showMenu = false
        }
    }
})



//==================== EVENT DELEGATION IN DROP DOWN MENU =======================================

// document.querySelector('.services_page_test').addEventListener('click', function(e) {
//     // window.location.href = 'http://example.com';
//     console.log(e.target)
// }, false)


// table.onclick = function(event) {
//     let td = event.target.closest('td'); // (1)

//     if (!td) return; // (2)

//     if (!table.contains(td)) return; // (3)

//     highlight(td); // (4)
// };


// const subMenuTarget = document.querySelector('.header__navbar__item__submenu')

// navbarLinks.addEventListener('click', function(event) {
//     console.log(event.target.classList.contains('header__navbar__item__submenu--diagnostic'))

//     if (event.target.classList.contains('header__navbar__item__submenu--diagnostic')) {
//         window.location.href = './product-di-agnostics.html'
//     }

//     if (event.target === subMenuTarget) {
//         console.log('yoooooo')
//     }
// })

