const nav = document.querySelector('.navbar');

window.addEventListener('scroll', fixNav);

function fixNav() {
    console.log(nav.offsetHeight);
    console.log(window.scrollY);
    if (window.scrollY > nav.offsetHeight+150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}