const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function circleMotion(xscale, yscale) {
    window.addEventListener("mousemove", function (detail) {
        document.querySelector(".mincircle").style.transform = `translate(${detail.clientX}px , ${detail.clientY}px)  scale(${xscale},${yscale})
        `;
    })
}

function firstPageAnimation() {
    var t1 = gsap.timeline();
    t1.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        stagger: .2,

        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            duration: 1.5,
            stagger: .2,
            delay: -1,
            ease: Expo.easeInOut
        })
        .from(".footer", {
            y: '-10',
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })


}
function circlechapta() {
    var xscale = 1;
    var yscale = 1;
    var xpre = 0;
    var ypre = 0;
    window.addEventListener("mousemove", function (dets) {
        var xdiff = dets.clientX - xpre;
        var ydiff = dets.clientY - ypre;
        xpre = dets.clientX;
        ypre = dets.clientY;
        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(.8, 1.2, ydiff);
        circleMotion(xscale, yscale);




    })

}

document.querySelectorAll(".enem").forEach(
    function (enem) {
        var diff = 0;
        var rotate = 0;
        var diffrot = 0;

        enem.addEventListener("mousemove", function (dets) {

            var diff = dets.clientY - enem.getBoundingClientRect().top
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(enem.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                left: dets.clientX,
                top: diff,
                rotate: gsap.utils.clamp(-20, 20, diffrot) * 0.8
            })
            gsap.to(enem.querySelector(".h"), {
                opacity:.2,
                ease: Power3,
            })

        })
        enem.addEventListener("mouseleave", function (dets) {
            gsap.to(enem.querySelector("img"), {
                opacity: 0,
                ease: Power3,

            })
            gsap.to(enem.querySelector(".h"), {
                opacity: .6,
                ease: Power3,
                left: 0,
            })

        })

    })
circlechapta();
firstPageAnimation();
circleMotion();
