// Array of sounds
const sounds = ["https://pokemoncries.com/cries-old/1.mp3", "https://pokemoncries.com/cries-old/4.mp3", "https://pokemoncries.com/cries-old/7.mp3"]

// Get all elements with class pokemon
const pokemons = document.querySelectorAll(".pokemon");

// For each pokemon element, add an on-click listener to play the corresponding sound
pokemons.forEach((pokemon, index) => {
    pokemon.addEventListener("click", event => {
        var audio = new Audio(sounds[index]);
        audio.play();
    })
})

// Get the autoscroll top button
const scrollTopButton = document.getElementById("scrollTop");

// Hide or show the button depending on current scroll position
window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        gsap.to(scrollTopButton, { scale: 1, ease: Expo.easeOut })
    } else {
        gsap.to(scrollTopButton, { scale: 0, ease: Expo.easeOut })
    }
}

// Scroll to top when user clicks on the button
scrollTopButton.addEventListener("click", event => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Get the hamburger and the nav dropdown list
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle dropdown list display on hamburger click
hamburger.addEventListener("click", event => {
    navLinks.classList.toggle("toggled");
})

// Remove "toggled" class from nav dropdown list element if we switch back to desktop view if the class is present
const resetNavLinksOnResize = () => {

    if (window.matchMedia("(min-width:992px)").matches && navLinks.classList.contains("toggled")) {
        navLinks.classList.remove("toggled");
    }

}

// Call resetNavLinksOnResize function when window is resized
window.addEventListener('resize', resetNavLinksOnResize);

// For each li inside nav, add an on-click listener to hide the drop down menu
navLinks.addEventListener("click", event => {
    navLinks.classList.remove("toggled");
})


// Target h1-h2 elements from heading section
const h1Heading = document.querySelector("header h1");
const h2Heading = document.querySelector("header h2");


// Animate header then animate services section if not triggered via scroll
var tlHeader = gsap.timeline({ defaults: { duration: 1, ease: Sine.easeOut }, onComplete: () => animServices() }).delay(.3);
tlHeader.from(h1Heading, {
    scale: 0
}).from(h2Heading, {
    scale: 0
})

// Target h2 elements and every single service from services section
const h2Services = document.querySelector("#services h2");
const services = document.querySelectorAll(".services>div");

// Animate services section on scroll
var tlServices = gsap.timeline({
    scrollTrigger: {
        trigger: "#services",
        toggleActions: "play none none none",
        start: "center 67%",
    }
})

// Different animations depending on the device
// Tablet and desktop
if (window.matchMedia("(min-width:800px)").matches) {

    tlServices.from(h2Services, { yPercent: -300 })
        .from(services[0], { autoAlpha: 0, xPercent: -50 })
        .from(services[1], { autoAlpha: 0, yPercent: 50 }, "<")
        .from(services[2], { autoAlpha: 0, xPercent: 50 }, "<")

    // Mobile
} else {

    tlServices.from(h2Services, { yPercent: -300 })
        .from(services[0], { autoAlpha: 0, yPercent: 50 })
        .from(services[1], { autoAlpha: 0, yPercent: 50 }, "<.3")
        .from(services[2], { autoAlpha: 0, yPercent: 50 }, "<.3")

}

// Services section manual animation when heading part is done
const animServices = () => {
    tlServices.play()
}

// Target h2 element from pokedex section
const h2Pokedex = document.querySelector("#pokedex h2");

// Animate pokedex section on scroll
var tlPokedex = gsap.timeline({
    scrollTrigger: {
        trigger: "#pokedex",
        toggleActions: "play none none none",
        start: "center bottom",
    }
})

// Pokedex section timeline
tlPokedex.from(h2Pokedex, { yPercent: -300 }).from(pokemons, { autoAlpha: 0, scale: 0, ease: Sine.easeOut })