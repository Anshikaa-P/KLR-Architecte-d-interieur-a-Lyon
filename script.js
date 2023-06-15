function init(){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  }
  
//   init()



gsap.from("#left",{
    delay:1,
    top:-1000,
    duration:1,
    opacity:0
})

gsap.from("#right",{
    delay:1,
    top:1000,
    duration:1,
    opacity:0
})

gsap.from("#menu",{
    delay:2,
    duration:1,
    opacity:0
})

gsap.from("#rphoto1 span",{
    delay:2,
    top:"25%",
    duration:0.5,
    opacity:0,
    stagger:0.2
})
gsap.from("#two", {
    backgroundColor: "white",
    duration:1,
    scrollTrigger:{
        trigger:"#two",
        start:"top 85%",
    }
})
gsap.from("#video", {
    y:200,
    duration:0.5,
    scrollTrigger:{
        trigger:"#video",
        start:"top 85%",
    }
})
gsap.from("#tphoto",{
    width:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#tphoto",
        start:"top 85%",
    }
})

gsap.from("#aphoto",{
    width:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#tphoto",
        start:"top 85%",
    }
})

gsap.to("#tpoverlay",{
    width:"100%",
    duration:1,
    opacity:1,
    delay:1,
    scrollTrigger:{
        trigger:"#tphoto",
        start:"top 85%",
    }
})

gsap.from("#ttext",{
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#ttext",
        start:"top 75%",
    }
})

gsap.from("#four",{
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#four",
        start:"top 85%",
    }
})

gsap.from("#faphoto",{
    duration:0.5,
    opacity:0,
    y:150,
    scrollTrigger:{
        trigger:"#four",
        start:"top 40%",
    }
})
gsap.from("#fbphoto",{
    duration:0.5,
    opacity:0,
    y:150,
    delay:0.5,
    scrollTrigger:{
        trigger:"#four",
        start:"top 40%",
    }
})
gsap.from("#fcphoto",{
    duration:0.5,
    opacity:0,
    y:150,
    delay:0.8,
    scrollTrigger:{
        trigger:"#four",
        start:"top 40%",
    }
})
gsap.from("#fphoto",{
    width:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#four",
        start:"top 40%",
    }
})
gsap.to("#fpoverlay",{
    width:"100%",
    duration:1,
    opacity:1,
    delay:1,
    scrollTrigger:{
        trigger:"#four",
        start:"top 40%",
    }
})

gsap.from("#project span",{
    duration:0.4,
    y: 150,
    stagger:0.1,
    opacity:0,
    scrollTrigger:{
        trigger:"#project",
        start:"top 75%",
    }
})
gsap.from("#fphoto2",{
    duration:0.8,
    y: 150,
    opacity:0,
    scrollTrigger:{
        trigger:"#project",
        start:"top 75%",
    }
})
gsap.from("#f2left2",{
    duration:0.8,
    y: 150,
    opacity:0,
    scrollTrigger:{
        trigger:"#f2left2",
        start:"top 80%",
    }
})
gsap.from("#f2right1",{
    duration:0.8,
    y: 150,
    opacity:0,
    scrollTrigger:{
        trigger:"#f2right1",
        start:"top 80%",
    }
})
gsap.from("#f3photo",{
    duration:0.8,
    y: 150,
    opacity:0,
    scrollTrigger:{
        trigger:"#f3photo",
        start:"top 90%",
    }
})
gsap.from("#f4left2",{
    duration:0.8,
    y: 150,
    opacity:0,
    scrollTrigger:{
        trigger:"#f4left2",
        start:"top 80%",
    }
})
gsap.from("#f4right1",{
    duration:0.8,
    y: 150,
    opacity:0,
    scrollTrigger:{
        trigger:"#f4right1",
        start:"top 80%",
    }
})
gsap.from("#six", {
    backgroundColor: "white",
    duration:1,
    scrollTrigger:{
        trigger:"#six",
        start:"top 85%",
    }
})

gsap.from("#sleft",{
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#sleft",
        start:"top 75%",
    }
})
gsap.from("#srightp",{
    width:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#sleft",
        start:"top 50%",
    }
    
})
gsap.to("#srightpoverlay",{
    width:"100%",
    duration:1,
    opacity:1,
    delay:1,
    scrollTrigger:{
        trigger:"#sleft",
        start:"top 50%",
    }
})
gsap.from("#eight", {
    backgroundColor: "white",
    duration:1,
    scrollTrigger:{
        trigger:"#eight",
        start:"top 85%",
    }
})


var fphoto2overlay = document.querySelector("#fphoto2overlay");

fphoto2overlay.addEventListener("mouseenter", function(){
    fphoto2overlay.style.scale = "1.1";
    fphoto2overlay.style.transition = "ease 0.8s";
    fphoto2overlay.style.cursor = "pointer";
})

fphoto2overlay.addEventListener("mouseleave", function(){
    fphoto2overlay.style.scale = "initial";
    fphoto2overlay.style.cursor = "initial";
})


var f2left2overlay = document.querySelector("#f2left2overlay");

f2left2overlay.addEventListener("mouseenter", function(){
    f2left2overlay.style.scale = "1.1";
    f2left2overlay.style.transition = "ease 0.8s";
    f2left2overlay.style.cursor = "pointer";
})

f2left2overlay.addEventListener("mouseleave", function(){
    f2left2overlay.style.scale = "initial";
    f2left2overlay.style.cursor = "initial";
})


var f2right1overlay = document.querySelector("#f2right1overlay");

f2right1overlay.addEventListener("mouseenter", function(){
    f2right1overlay.style.scale = "1.1";
    f2right1overlay.style.transition = "ease 0.8s";
    f2right1overlay.style.cursor = "pointer";
})

f2right1overlay.addEventListener("mouseleave", function(){
    f2right1overlay.style.scale = "initial";
    f2right1overlay.style.cursor = "initial";
})


var f3photooverlay = document.querySelector("#f3photooverlay");

f3photooverlay.addEventListener("mouseenter", function(){
    f3photooverlay.style.scale = "1.1";
    f3photooverlay.style.transition = "ease 0.8s";
    f3photooverlay.style.cursor = "pointer";
})

f3photooverlay.addEventListener("mouseleave", function(){
    f3photooverlay.style.scale = "initial";
    f3photooverlay.style.cursor = "initial";
})


var f4left2overlay = document.querySelector("#f4left2overlay");

f4left2overlay.addEventListener("mouseenter", function(){
    f4left2overlay.style.scale = "1.1";
    f4left2overlay.style.transition = "ease 0.8s";
    f4left2overlay.style.cursor = "pointer";
})

f4left2overlay.addEventListener("mouseleave", function(){
    f4left2overlay.style.scale = "initial";
    f4left2overlay.style.cursor = "initial";
})


var f4right1overlay= document.querySelector("#f4right1overlay");

f4right1overlay.addEventListener("mouseenter", function(){
    f4right1overlay.style.scale = "1.1";
    f4right1overlay.style.transition = "ease 0.8s";
    f4right1overlay.style.cursor = "pointer";
})

f4right1overlay.addEventListener("mouseleave", function(){
    f4right1overlay.style.scale = "initial";
    f4right1overlay.style.cursor = "initial";
})

var e1 = document.querySelector("#e1");
var e1h1 = document.querySelector("#e1 h1");
var e1img = document.querySelector("#e1 img");

e1.addEventListener("mouseenter", function(){
    e1h1.style.letterSpacing = "4px";
    e1h1.style.transition = "ease 0.5s";
    e1img.style.transition = "ease 0.5s";
    e1img.style.height = "3vw";
    e1img.style.borderColor = "#cba55a";
    e1.style.cursor = "pointer";
})

e1.addEventListener("mouseleave", function(){
    e1h1.style.letterSpacing = "initial";
    e1img.style.height = "3.5vw";
    e1img.style.borderColor = "#aaa";
    e1.style.cursor = "initial";
})