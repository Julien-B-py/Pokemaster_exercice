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
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
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