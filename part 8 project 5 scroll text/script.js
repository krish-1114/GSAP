 window.addEventListener("wheel",function(elem){

    if(elem.deltaY>0){
        gsap.to(".marque",{
            transform:'translateX(-200%)',
            delay:1,
            duration:2,
            ease:"none"
        })

        gsap.to(".marque img",{
            rotate:180
        })


    }else{
        gsap.to(".marque",{
            transform:'translateX(0%)',
            delay:1,
            duration:2,
            ease:"none"
        })

        gsap.to(".marque img",{
            rotate:0
        })
    }

})