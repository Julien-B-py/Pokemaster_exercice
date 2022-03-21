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