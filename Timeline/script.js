// We can use the function of Timeline here 
var tl =gsap.timeline();


tl.to("#text1", {
    x:300,
    duration: 1,
    delay: 1,
    y:200,
    stagger:0.3
})

tl.to("#text2", {
    x:400,
    duration: 0.9,
    delay: 0.5,
    y:250,
    stagger:0.3
})
tl.to("#text3", {
    x:500,
    duration: 0.7,
    delay: 0.5,
    y:300,
    stagger:0.3
})