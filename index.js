//  ================================= 
//  ============ nav Bar ============
//  ================================= 

function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

//  ================================= 
//  ======== create a Slider ========
//  ================================= 

let slides = document.querySelectorAll(".display");
let count = 0;

const slideImg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
};

const goNext = () => {
    count = (count + 1) % slides.length; // Loop back to the first slide
    slideImg();
};

const goPrev = () => {
    count = (count - 1 + slides.length) % slides.length; // Loop back to the last slide
    slideImg();
};

// Add event listeners to buttons
document.getElementById("next").addEventListener("click", goNext);
document.getElementById("prev").addEventListener("click", goPrev);

//  ================================= 
//  === animation on scrollTrigger ==
//  =================================

gsap.registerPlugin(ScrollTrigger);

gsap.from(".serviceBox", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3, // Delay between each box animation
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%", // Starts animation when 80% into viewport
        toggleActions: "play none none reverse",
    }
});

gsap.from(".carFeatured", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3, // Delay between each box animation
    scrollTrigger: {
        trigger: ".serviceText",
        start: "top 80%", // Starts animation when 80% into viewport
        toggleActions: "play none none reverse",
    }
});

gsap.from(".carBoxes", {
    opacity: 0,
    x: 0,
    duration: 1,
    stagger: 0.5, // Delay between each box animation
    scrollTrigger: {
        trigger: ".carbox",
        start: "top 80%", // Starts animation when 80% into viewport
        toggleActions: "play none none reverse",
    }
});

gsap.from(".ourCar", {
    opacity: 0,
    y: -100,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".ourCar",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

gsap.from(".lembo", {
    opacity: 0,
    x: 100,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".lembo",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});