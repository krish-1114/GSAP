function breaktext() {
    var h1 = document.querySelector("h1");
    var h1text = document.querySelector("h1").textContent;

    var splittext = h1text.split("");
    var halfvalue = ((splittext.length)/2)-1;
    
    var clutter = "";

    console.log(halfvalue)

    splittext.forEach(function (e,idex) {
             if(idex<=halfvalue){
                clutter += `<span class="a">${e}</span>`
            }else{
                clutter += `<span class="b">${e}</span>`
             }
    })

    h1.innerHTML = clutter;


    // h1.innerHTML = clutter;
}

breaktext()

gsap.from("h1 .a",{
    y:50,
    duratiom:1,
    delay:0.5,
    opacity:0,
    ease: "expoScale(0.5,7,none)",
    stagger:0.3,
})

gsap.from("h1 .b",{
    y:50,
    duratiom:1,
    delay:0.5,
    opacity:0,
    ease: "expoScale(0.5,7,none)",
    stagger:-0.3,
})