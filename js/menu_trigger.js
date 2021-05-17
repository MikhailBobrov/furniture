const menu_trigger = document.querySelector('.menu-trigger');
const menu_button = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');



menu_trigger.addEventListener('click', ()=> {
    menu_button.classList.toggle('active');
    navigation.classList.toggle('active');
    colorToggle();
});

//  данный класс приходит из navbar.js и при добавлении .navbar - класс active меняет им цвет
function colorToggle() {
    nav.classList.toggle('active-open-menu');
}

