const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function headerAnimation() {
    gsap.from('.header', {
        y:30, scale:1, opacity:0, delay:0.2, duration:1
    })
}
headerAnimation()
function TheAnimation() {
    gsap.from('.the', {
        y:30, scale:1, opacity:0, delay:0.7, duration:1
    })
}
TheAnimation()
