
// константы для выезда sub-menu
const mainMenu = document.querySelector('#menu-main-menu-1');
const subMenu = document.querySelector('.sub-menu');
const hamburger = document.querySelector('#work button');
const burger = document.querySelector('.hamburger');
console.log(hamburger)


// функция - при клике на ссылке work добавляются классы sub-menu in & main-menu-1 child-menu-open
// за счет них у списка ul основного появляется граница справа и он отъезжает влево
// в это время выезжает sub-menu с работами

function subMenuOpen() {
    hamburger.addEventListener('click', function (event) {
        event.preventDefault();
        subMenu.classList.toggle('in');
        mainMenu.classList.toggle('child-menu-open');
        hamburger.classList.toggle('is-active');
    })
}

subMenuOpen();

// функция  - клик по pnp-nav-back (стрелка влево) - закрывает sub menu на мобилке
const pnp = document.querySelector('.pnp-nav-back');


function closeMobileImage() {
    pnp.addEventListener('click', function (event) {
        event.preventDefault()
        subMenu.classList.toggle('in');
        mainMenu.classList.toggle('child-menu-open');
        hamburger.classList.toggle('is-active');
    })
}

closeMobileImage()
