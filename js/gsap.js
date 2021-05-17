// gsap.fromTo('.logo-wrapper', 1, {y: -100, opacity: 0},{y: 0, opacity: 1});
// gsap.fromTo('.menu-trigger', 0.5, { x: 200 }, {x: 0}, "-=0.7");

gsap.from(".list-slogan li", {
    y: 40,
    opacity: 0,
    duration:0.5,
    stagger: 0.25, //simple stagger of 0.5 seconds
    delay: 1,
}, {
    y: 0,
    opacity: 1,
});