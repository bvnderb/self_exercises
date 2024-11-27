document.getElementById('regularButton').addEventListener('click', function () {
    pokeFetch(false);
});

document.getElementById('shinyButton').addEventListener('click', function () {
    pokeFetch(true);
});

async function pokeFetch(isShiny) {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error('No response received. Try again later');
        }

        const data = await response.json();
        const pokemonSprite = isShiny ? data.sprites.front_shiny : data.sprites.front_default;


        const imgElement = document.getElementById('pokemonSprite');



        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }
    catch (error) {
        console.error('Error fetching user data:', error);
    }
}
