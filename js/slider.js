const images = document.querySelectorAll('.images-block');
const sliderLine = document.querySelector('.slider-line');

let count = 0;
let width;

function init() {
    console.log('resize');

    width = document.querySelector('.slider').offsetWidth;
    console.log(width)
    sliderLine.style.width = width * images.length + 'px';

    console.log(sliderLine.style.width)

    images.forEach(item => {
        item.style.width = width/2 + 'px';
        item.style.height = 'auto';
    })

    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;

    if (count <= 0) {
        count = 0
    }

    rollSlider()
});

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;

    if (count >= images.length) {
        count = 0
    }

    rollSlider()
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * (width/2) + 'px)'
}


