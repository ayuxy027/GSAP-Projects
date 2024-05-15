gsap.to("#box", {
    x:1000,
    duration: 4,
    delay : 1,
    rotate:360,
    backgroundColor:"teal",
    repeat:-1,
    yoyo:true,
}
)

gsap.to("#box2", {
    x:500,
    y:160,
    duration: 4,
    rotate:360,
    delay : 1.5,
    borderRadius:"50%",
    backgroundColor:"crimson",
    scale:1.5,
    repeat:-1,
    yoyo:true,
})

gsap.to("#text", {
    x:700,
    duration: 4,
    delay : 1,
    scale:1.75
})