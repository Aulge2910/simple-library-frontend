
/*** Register GSAP Plugins */
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

 

/*** Animation 1 */
/*** Our Primary User Section -> Image Flows In And Out */
ScrollTrigger.create({
    trigger: ".student-box",
    start: "top top",
    end: "+=1500",
    pin: true,
    }
)

ScrollTrigger.create({
    trigger: ".student-box__img",
    start: "200 top",
    end: "+=2000",
    scrub: 3,
 
    animation: gsap.timeline()
    .fromTo(".student-box__img-student1", {"margin-left": "350em", opacity: 0}, {"margin-left":0, opacity:1})
    .fromTo(".student-box__img-student2", {"margin-left": "4em", scale: 1.1}, {"margin-left": 0, opacity:1})
    .fromTo(".student-box__img-student3", {"margin-left": "6em", scale: 1.3}, {"margin-left": 0, opacity:1})
    .fromTo(".student-box__img-student4", {"margin-left": "8em", scale: 1.5}, {"margin-left": "2em", opacity:1})


     .to(".student-box__img-student1", {"margin-left": "-190em", scale:0.6, opacity: 0, y:-200, duration:2} ,">")
     .to(".student-box__img-student2", {scale:0.95, opacity: 0  ,y:-150, duration:2.5}, "<")
     .to(".student-box__img-student3", {scale:0.8,opacity: 0 , y:-120, duration:1.5}, "<")
     .to(".student-box__img-student4", {scale:0.6, opacity: 0, y:-100, duration:2}, "<")
     }
)



/*** Animation 2 */
/*** Pin The Screen of Horizontal Scroll */
ScrollTrigger.create({
    trigger: ".horizontal-box",
    start: "top top",
    end: "+=3000",
    pin: true,
    }
)

/*** Animation 2 */
/*** Trigger The Horiozontal Scroll Animation Once the Screen Reached */
ScrollTrigger.create({
    trigger: ".horizontal-box",
    start: "top top",
    end: "+=3000",
    scrub: 1,
    animation: gsap.timeline()
    .fromTo(".horizontal-box__parallal-page1", {"margin-left": 0 },{"margin-left":"-100%"})
    .to(".scroll-box h1", {"xPercent": "-100"},"<")
    .fromTo(".scroll-box--bgCity",{"background-size": "200% 200%", "background-position": "20% 50%"},{"background-size": "300% 200%", "background-position":"70% 50%"},"<")
    .fromTo(".scroll-box__animatedIcon", {"margin-left": 0},{"margin-left": "200%"},"<")
    .fromTo(".horizontal-box__parallal-page2", {"margin-left":"100%"},{"margin-left":0},"<")
    }
) 
 


/*** Animation 3 */
/*** for the books hover -> bc,bm,bi,others */
let book1 = document.querySelector(".collections-box--chinese"),
    hover1 = gsap.to("#book-no1", {text:"65,231+", color: "#fff", duration: 0.8, paused: true, ease: "power1.inOut"});

    book1.addEventListener("mouseenter", () => hover1.play());
    book1.addEventListener("mouseleave", () => hover1.reverse());

let book2 = document.querySelector(".collections-box--english"),
    hover2 = gsap.to("#book-no2", {text:"30,281+", color: "#fff", duration: 0.8, paused: true, ease: "power1.inOut"});

    book2.addEventListener("mouseenter", () => hover2.play());
    book2.addEventListener("mouseleave", () => hover2.reverse());

let book3 = document.querySelector(".collections-box--malay"),
    hover3 = gsap.to("#book-no3", {text:"40,408+", color: "#fff", duration: 0.8, paused: true, ease: "power1.inOut"});

    book3.addEventListener("mouseenter", () => hover3.play());
    book3.addEventListener("mouseleave", () => hover3.reverse());

let book4 = document.querySelector(".collections-box--iban"),
    hover4 = gsap.to("#book-no4", {text:"24,591+", color: "#fff", duration: 0.8, paused: true, ease: "power1.inOut"});

    book4.addEventListener("mouseenter", () => hover4.play());
    book4.addEventListener("mouseleave", () => hover4.reverse());
 
 

 
/*** Animation 3  */
/*** Parallax Story Box */
gsap.utils.toArray(".story-box").forEach(function(container) {
    let image = container.querySelector(".story-box .story-box__body .story-box__img img");
    let evenHeader = container.querySelector(".container .story-box:nth-child(even) h2");
    let oddHeader = container.querySelector(".container .story-box:nth-child(odd) h2");
    let storyText = container.querySelector(".container .story-box > .story-box__body .story-box__text");
 
    let tl = gsap.timeline({
        scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
        },
      }); 

      tl.fromTo(oddHeader, {"x":0,delay: 0.2 },{"xPercent":"50"},"<"),
      tl.fromTo(evenHeader, {"x":0,delay:0.2 },{"xPercent":"-50"},"<"),
      tl.fromTo(storyText, {"y":0 },{"yPercent":"150", delay:0.2 },"<"),
      tl.fromTo(image, {scale:1.6, transformOrigin: "50% 50%", yPercent: -30,},{scale:1.6, transformOrigin: "50% 50%",yPercent: 30,},"<");
});