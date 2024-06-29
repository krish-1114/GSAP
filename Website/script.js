function cursor() {

    var main = document.querySelector(".main")
    var cursor = document.querySelector(".cursor")


    main.addEventListener("mousemove", function (val) {

        gsap.to(cursor, {
            x: val.x,
            y: val.y,
            duration: 1,
            ease: "back.out"
        })

    })
}

cursor();

function page1() {
    var tl = gsap.timeline()

    tl.from("nav h1,nav h4,nav button", {
        y: -30,
        opacity: 0,
        delay: 1,
        duration: 1,
        stagger: 0.1
    })

    tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        delay: 1,
        duration: 0.6,
    })
    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        delay: 1,
        duration: 0.4,
    })

    tl.from(".center-part1 button", {
        y: 10,
        opacity: 0,
        delay: 1,
        duration: 0.4,
    })

    gsap.from(".section1bottom img", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    }, "-=0.2")

}

// page1();

// function page2(){

    gsap.from(".services h3", {
        x: -100, 
        opacity: 0,
        duration: 0.5,
        scrollTrigger:{
            trigger:".services h3",
            scoller:"body",
            markers:true,
            start:"top 50%",
            end:"top 0",
            scrub:2
        }
    })
     

// }

// page2();