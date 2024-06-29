gsap.from(".page1 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:".page1 h1",
        scroll:"body",
        markers:true,
        start:"top 50%", 
        // scrub:true
        scrub:2
        
    }
})
gsap.from(".page1 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:".page1 h2",
        scroll:"body",
        markers:true,
        start:"top 50%", 
        scrub:5
        // scrub:true
    }
})

// gsap.from(".page1 .box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })
// gsap.from(".page2 .box", {
//     scale: 0,
//     delay: 2,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: ".page2 .box",
//         scroller: "body",
//         markers:true,
//         start:"top 60%"
//     }
// })
// gsap.from(".page3 .box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })